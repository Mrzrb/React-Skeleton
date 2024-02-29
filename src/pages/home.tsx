import { useQuery } from "react-query";
import { ApiResponse } from "../api/base";
import { Test } from "../api/test";

const Home = () => {
    const { isLoading, isError, data } = useQuery("test", Test);
    return (
        <div>home, {isLoading ? "xxxx" : JSON.stringify(data?.data)}</div>
    )
}

export default Home;
