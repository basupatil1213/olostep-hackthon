import React from "react";
import Input from "../components/Input";

const WebScrap = () => {
    const [url, setUrl] = React.useState<string>("");
    const [data, setData] = React.useState<{
        title : string,
        body: string
    } | null>(null);

    const handleScrap = async () => {
        try {
            const response = await fetch("http://localhost:5000/webscrap", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
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
    return (
        <>
            <Input value={url} setValue={setUrl}/>
            <button onClick={handleScrap}>Scrap</button>
            {data && <div>{data.title}</div>}
        </>
    )
};

export default WebScrap;
