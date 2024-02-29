import { RouterProvider } from "react-router-dom";
import router from "./router/route";

function App() {
    return (
        <div className="App rounded-md">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
