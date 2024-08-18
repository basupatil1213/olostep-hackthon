import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeSnippet from "../components/DisplayCode";

type WebScrap = {
  _id: string;
  title: string;
  body: string;
  url: string;
};

const Dashboard = () => {
  const [webscraps, setWebscraps] = useState<WebScrap[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert("You need to login");
      navigate("/auth");
      return;
    }

    const fetchWebscraps = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/webscrap/all", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: user,
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch webscraps");
        }
        const responseData = await response.json();
        setWebscraps(responseData.data);
      } catch (err) {
        setError(err as string || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchWebscraps();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {webscraps.length === 0 ? (
        <p className="text-center text-gray-500">No webscraps found</p>
      ) : (
        webscraps.map((webscrap) => (
          <div
            key={webscrap._id}
            className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-2">{webscrap.title}</h2>
            <a
              href={webscrap.url}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {webscrap.url}
            </a>
            <CodeSnippet displayCode={webscrap.body} />
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
