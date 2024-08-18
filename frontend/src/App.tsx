import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes.tsx";
import NavBar from "./components/NavBar.tsx";

export const BASE_URL = "https://webscraping-app-615396515843.us-east1.run.app";

function App() {
    return (
        <Router>
            <NavBar />
            <main>
                <Routes />
            </main>
        </Router>
    );
}

export default App;
