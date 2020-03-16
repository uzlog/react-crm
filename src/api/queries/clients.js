import axios from "axios";
import { clients } from "../routes/clients";

export async function fetchClients({ offset, limit }) {
    const { data } = await axios.get(
        `${clients}?offset=${offset}&limit=${limit}`
    );

    await new Promise(r => setTimeout(r, 1000));

    return data;
}
