import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";

function App() {
    return (
        <Router>
            <main>
                <Routes />
            </main>
        </Router>
    );
}

export default App;
