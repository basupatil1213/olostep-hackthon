import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import NavBar from "./components/NavBar";

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
