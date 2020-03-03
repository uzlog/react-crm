import React from "react";
import useGet from "../../api/hooks/useGet";
import { clients } from "../../api/routes/clients";

const Clients = () => {
    const { isLoading, response, error } = useGet({ url: clients });

    console.log({ isLoading, response, error });

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>This is the clients page!</h1>
        </div>
    );
};

export default Clients;
