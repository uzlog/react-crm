import React from "react";
import VirtualScroller from "../../components/VirtualScroller/VirtualScroller";
import { fetchClients } from "../../api/queries/clients";

const RowRenderer = (index, style, listItems) => {
    // console.log({ style });
    // return <div style={style}>{item.name}</div>;

    let label;

    const item = listItems[index];

    if (item) {
        label = item.name;
    } else {
        label = "Loading...";
    }
    return (
        <div className="ListItem" style={style}>
            {label}
        </div>
    );
};

const Clients = () => {
    return (
        <div>
            <h1>This is the clients page!</h1>
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <VirtualScroller
                    query={fetchClients}
                    RowRenderer={RowRenderer}
                />
            </React.Suspense>
        </div>
    );
};

export default Clients;
