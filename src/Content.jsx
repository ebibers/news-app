import { forwardRef } from "react";
import { useState } from "react";
import Card from "./Card.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

const Content = forwardRef(({}, ref) => {
    const [results, setResults] = useState([]);

    const apiUrl = `https://api.worldnewsapi.com/search-news?api-key=${apiKey}&text=lebron james&sort=publish-time&sort-direction=DESC`;

    const fetchData = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setResults(data.news);
    }

    console.log(results);

    return(
        <div ref={ref} className="h-screen w-full grid grid-cols-4">
            <Card news={results}/>
            <div className="col-span-1 bg-blue-300">
                <button onClick={fetchData}>fetch</button>
            </div>
        </div>
    );
})

export default Content