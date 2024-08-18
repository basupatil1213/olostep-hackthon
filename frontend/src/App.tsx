import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes.tsx";
import NavBar from "./components/NavBar.tsx";

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
