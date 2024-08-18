import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Web Scrap</h1>
      <div>
        {token && user ? (
          <div className="flex items-center">
            <p className="mr-4">{user.name}</p>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setToken(null);
                setUser(null);
              }}
              className="bg-red-500 px-4 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/auth");
            }}
            className="bg-blue-500 px-4 py-1 rounded"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;