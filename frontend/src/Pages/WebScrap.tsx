import { useEffect, useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import CodeSnippet from "../components/DisplayCode";
import { BASE_URL } from "../App";

const WebScrap = () => {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState<{
    title: string;
    body: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<object | null | unknown>(null);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]);

  const handleScrap = async () => {
    setLoading(true);
    setError(null);
    try {
        const token = localStorage.getItem("token");
        console.log(`token: ${token}`);
      const response = await fetch(`${BASE_URL}/webscrap`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
        throw new Error("Failed to scrap data");
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!data) {
      alert("No data to save");
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (!user._id) {
        alert("User not found");
        return;
      }
      const response = await fetch(`${BASE_URL}/webscrap/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: data.title,
          body: data.body,
          user: user._id,
          url,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to save data");
      }
      const respData = await response.json();
      alert(`Data saved with id: ${respData.id}`);
    } catch (err) {
      console.error(err);
      alert("Failed to save data");
    }
  };

  return (
    <div className="container mx-auto p-4 w-screen">
      <h1 className="text-3xl font-bold mb-4">Web Scraping</h1>
      <div className="mb-4">
        <Input value={url} setValue={setUrl} />
      </div>
      <div className="mb-4">
        <button
          onClick={handleScrap}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          disabled={loading}
        >
          {loading ? "Scraping..." : "Scrap"}
        </button>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded"
          disabled={loading || !data}
        >
          Save
        </button>
      </div>
      {error !==  && <p className="text-red-500">{`Error in fetching Data, Please try again`}</p>}
      {data && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">Title: {data.title}</h2>
          <p className="text-xl font-semibold mb-2">content</p>
          <CodeSnippet displayCode={data.body} />
        </div>
      )}
    </div>
  );
};

export default WebScrap;
