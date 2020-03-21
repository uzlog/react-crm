import React from "react";
import VirtualScroller from "../../components/VirtualScroller/VirtualScroller";
import { fetchClients } from "../../api/queries/clients";
import ClientBox from "../../components/ClientBox/ClientBox";
import ColumnHeaders from "../../components/ColumnHeaders/ColumnHeaders";

const RowRenderer = (item, style, index) => {
    let component;

    if (item) {
        component = <ClientBox {...item} />;
    } else {
        component = `Loading... ${index}`;
    }
    return <div style={style}>{component}</div>;
};

const Clients = () => {
    return (
        <>
            <ColumnHeaders />
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <VirtualScroller
                    query={fetchClients}
                    RowRenderer={RowRenderer}
                />
            </React.Suspense>
        </>
    );
};

export default Clients;
