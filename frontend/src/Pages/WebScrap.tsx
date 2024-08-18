import React, { useEffect } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const WebScrap = () => {
    const [url, setUrl] = React.useState<string>("");
    const [data, setData] = React.useState<{
        title: string,
        body: string
    } | null>(null);

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/auth');
        }
    });

    const handleScrap = async () => {
        try {
            const response = await fetch("http://localhost:5000/webscrap", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ url }),
            });
            console.log(`Response: ${response}`);
            const data = await response.json();
            console.log(data);
            setData(data);
            toast.success("Scraping successful!");
        } catch (err) {
            console.error(err);
            toast.error("Failed to scrape data.");
        }
    };

    const handleSave = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            if (!user.id) {
                toast.error("User not found");
                return;
            }
            const response = await fetch("http://localhost:5000/webscrap/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: data?.title,
                    body: data?.body,
                    user: user.id
                }),
            });
            const respData = await response.json();
            console.log(respData);
            toast.success(`Data saved with id: ${respData.id}`);
        } catch (err) {
            console.error(err);
            toast.error("Failed to save data.");
        }
    };

    return (
        <>
            <ToastContainer />
            <Input value={url} setValue={setUrl} />
            <button onClick={handleScrap}>Scrap</button>
            <button onClick={handleSave}>Save</button>
            <p>{data && <div>{data.title}</div>}</p>
            <p>Body</p>
            <p>{data && <pre>{data.body}</pre>}</p>
            <p dangerouslySetInnerHTML={{ __html: data ? data.body : '' }} />
        </>
    )
};

export default WebScrap;
