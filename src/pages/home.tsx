import { useQuery } from "react-query";
import { Test } from "../api/test";

const Home = () => {
    const { isLoading, isError, data } = useQuery("test", Test);
    return (
        <div>
            <div>home, {isLoading ? "xxxx" : JSON.stringify(data?.data)}</div>
        </div>
    )
}

export default Home;
