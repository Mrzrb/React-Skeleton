import client from "../util/axios";
import { ApiResponse } from "./base";

const Test = async () => {
    const data = await client.post<ApiResponse>("/api");
    return data.data;
}

export { Test };
