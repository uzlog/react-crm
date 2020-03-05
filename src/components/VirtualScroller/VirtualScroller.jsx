import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { useQuery } from "react-query";

// There is an issue with the window being blank after loading additional items. Then you scroll, and it fixes it. I think this is because of the react suspense displayingf the loading fallback, then coming back to this.
export const VirtualScroller = ({ items, query, RowRenderer }) => {
    const [listItems, setListItems] = useState(items);
    const [pageNo, setPageNo] = useState(1);
    const rowLimit = 20;
    const { data, isFetching } = useQuery([{ pageNo, limit: rowLimit }], query);

    useEffect(() => {
        setListItems([...listItems, ...data]);
    }, [data]);

    const isItemLoaded = index => {
        return index < listItems.length;
    };

    console.log({ pageNo, listItems, data });

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    const loadMoreItems = isFetching
        ? () => {}
        : (startIndex, stopIndex) => {
              const newPage = Math.ceil(stopIndex / rowLimit);
              if (newPage > pageNo) {
                  setPageNo(newPage);
              }
          };

    if (!listItems.length) {
        return null;
    }

    return (
        <InfiniteLoader
            isItemLoaded={isItemLoaded}
            loadMoreItems={loadMoreItems}
            itemCount={1000}
        >
            {({ onItemsRendered, ref }) => (
                <List
                    height={700}
                    itemCount={1000}
                    itemSize={35}
                    width={300}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                >
                    {({ index, style }) => RowRenderer(index, style, listItems)}
                </List>
            )}
        </InfiniteLoader>
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
