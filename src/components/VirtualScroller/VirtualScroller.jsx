import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { useQuery } from "react-query";
import debounce from "../../helpers/debounce";

const rowLimit = 40;

const isItemLoaded = (index, listItems) => !!listItems[index];

const loadMoreItems = debounce(async (startIndex, setOffset) => {
    setOffset(startIndex);
}, 100);

export const VirtualScroller = ({ items, query, RowRenderer }) => {
    const [listItems, setListItems] = useState(items);
    const [offset, setOffset] = useState(0);
    const [paging, setPaging] = useState({ items: 0 });
    const { data, isFetching } = useQuery(
        [{ offset, limit: rowLimit }],
        query,
        {
            suspense: false
        }
    );

    useEffect(() => {
        if (data && !isFetching) {
            const { startIndex, endIndex } = data.paging;
            const newListItems = [...listItems];
            let dataIndex = 0;

            for (
                let offsetIndex = startIndex;
                offsetIndex <= endIndex;
                offsetIndex++
            ) {
                newListItems[offsetIndex] = data.data[dataIndex];

                dataIndex++;
            }

            setListItems(newListItems);
            setPaging(data.paging);
        }
    }, [data, isFetching]);

    if (!listItems.length) {
        return null;
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <InfiniteLoader
                    isItemLoaded={index => isItemLoaded(index, listItems)}
                    loadMoreItems={startIndex =>
                        loadMoreItems(startIndex, setOffset)
                    }
                    itemCount={paging.items}
                >
                    {({ onItemsRendered, ref }) => (
                        <List
                            height={height}
                            itemCount={paging.items}
                            itemSize={75}
                            width={width}
                            onItemsRendered={onItemsRendered}
                            ref={ref}
                        >
                            {({ index, style }) =>
                                RowRenderer(listItems[index], style, index)
                            }
                        </List>
                    )}
                </InfiniteLoader>
            )}
        </AutoSizer>
    );
};

VirtualScroller.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.number
        ])
    ),
    query: PropTypes.func,
    RowRenderer: PropTypes.func.isRequired
};

VirtualScroller.defaultProps = {
    items: [],
    query: () => {}
};

export default VirtualScroller;
