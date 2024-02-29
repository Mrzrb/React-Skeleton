import { useQuery } from "react-query";
import { Test } from "../api/test";

const Home = () => {
    const { isLoading, data } = useQuery("test", Test);
    return (
        <div>home, {isLoading ? "xxxx" : JSON.stringify(data?.data)}</div>
    )
}

export default Home;
