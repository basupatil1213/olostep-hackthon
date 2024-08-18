import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CodeSnippet from "../components/DisplayCode";

type WebScrap = {
    _id: string;
    title: string;
    body: string;
    url : string;
};

const Dashboard = () => {
    const [webscraps, setWebscraps] = React.useState<WebScrap[]>([]);
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            alert("You need to login");
            navigate("/auth");
        }
    },[])
    useEffect(() => {
        const fetchWebscraps = async () => {
            try {
                const response = await fetch("http://localhost:5000/webscrap/all", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        user: user,
                    }),
                });
                const responseData = await response.json();
                setWebscraps(responseData.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchWebscraps();
    },[]);
    return (
        <div>
            {
                webscraps && webscraps.map((webscrap) => (
                    <div key={webscrap._id}>
                        <h2>{webscrap.title}</h2>
                        <p>{webscrap.url}</p>
                        <CodeSnippet displayCode={webscrap.body} />
                    </div>
                ))
            }
        </div>
    );
};

export default Dashboard;
