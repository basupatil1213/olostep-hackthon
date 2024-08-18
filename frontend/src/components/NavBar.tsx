import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

type User = {
    _id: string;
    name: string;
    email: string;
};

const NavBar: React.FC = () => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken) {
            setToken(storedToken);
        }
        console.log(`storedUser: ${storedUser}`);
        
        if (storedUser && storedUser !== "undefined") {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
        navigate("/"); // Navigate to home or login page after logout
    };

    return (
        <nav className="flex justify-between w-screen mx-10 items-center p-4 bg-gray-900 text-white shadow-lg">
            <div className="flex items-center">
                <h1 className="text-3xl font-extrabold tracking-tight mr-8 text-white">Web Scrap</h1>
                <div className="flex space-x-6">
                    <Link to="/scrap" className="text-lg font-medium hover:text-blue-400 transition-colors duration-200">
                        Scrap
                    </Link>
                    <Link to="/dashboard" className="text-lg font-medium hover:text-blue-400 transition-colors duration-200">
                        Dashboard
                    </Link>
                </div>
            </div>
            <div>
                {token && user ? (
                    <div className="flex items-center space-x-4">
                        <p className="text-lg font-semibold">{user.name}</p>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-200">
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate("/auth")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200">
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
