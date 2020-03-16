import React from "react";
import VirtualScroller from "../../components/VirtualScroller/VirtualScroller";
import { fetchClients } from "../../api/queries/clients";
import ClientBox from "../../components/ClientBox/ClientBox";

const RowRenderer = (item, style, index) => {
    let component;

    // console.log({ item, style, index });

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
            <h1>This is the clients page!</h1>
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
