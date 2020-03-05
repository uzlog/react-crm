import axios from "axios";
import { clients } from "../routes/clients";

export async function fetchClients({ pageNo = 1 }) {
    const { data } = await axios.get(`${clients}?pageNo=${pageNo}`);

    await new Promise(r => setTimeout(r, 1000));

    return data;
}
