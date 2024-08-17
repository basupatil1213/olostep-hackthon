import React, { useEffect } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
const WebScrap = () => {
    const [url, setUrl] = React.useState<string>("");
    const [data, setData] = React.useState<{
        title : string,
        body: string
    } | null>(null);

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/auth');
        }
    })

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
            const data = await response.json();
            console.log(data);
            setData(data);
        } catch (err) {
            console.error(err);

        }
    }

    const handleSave = async () => {
        try {
            const response = await fetch("http://localhost:5000/webscrap/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });
            const respData = await response.json();
            console.log(respData);
            alert(`Data saved with id: ${respData.id}`);
        } catch (err) {
            console.error(err);
            alert("Failed to save data");

        }
    }
    return (
        <>
            <Input value={url} setValue={setUrl}/>
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
