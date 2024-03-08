import { forwardRef } from "react";
import { useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

const Content = forwardRef(({}, ref) => {
    const [results, setResults] = useState([]);

    const apiUrl = `https://api.worldnewsapi.com/search-news?api-key=${apiKey}&text=nba`;

    const fetchData = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setResults(data.news);
    }

    console.log(results);

    return(
        <div ref={ref} className="h-screen w-full">
            <button onClick={fetchData}>fetch</button>
                {results.map((result) => {
                    return(
                        <div key={result.id}>
                            <img src={result.image} alt="image"/>
                            <p>{result.title}</p>
                            <p>{result.publish_date}</p>
                            <a href={result.url} target="_blank">{result.url}</a>
                            <p>{result.language}</p>
                        </div>
                    )
                })}
        </div>
    );
})

export default Content