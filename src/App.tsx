import { useQuery } from "react-query";

function App() {
    const ff = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(555)
            }, 1000);
        });
    }
    const { data, isLoading, isError } = useQuery('posts', () => ff())

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error</div>
    }

    return (
        <div className="App rounded-md">
            {isLoading ? "true" : "false"}--{JSON.stringify(data)}
        </div>
    );
}

export default App;
