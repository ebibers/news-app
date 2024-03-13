import { forwardRef } from "react";
import { useState } from "react";
import Card from "./Card.jsx";
import Pagination from "./Pagination.jsx";
import Filters from "./Filters.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

const Content = forwardRef(({}, ref) => {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    const postsPerPage = 6;

    const fetchData = async (keyword, organization, person, location, dateFrom, dateTo, author) => {
        try{
            setStatus("loading");

            let apiUrl = `https://api.worldnewsapi.com/search-news?api-key=${apiKey}&number=100&sort=publish-date&sort-direction=DESC`;
            
            keyword ? apiUrl += `&text=${keyword}` : "";
            organization || person || location ? apiUrl += "&entities=" : "";
            organization ? apiUrl += `ORG:${organization}` : "";
            person && !organization ? apiUrl += `PER:${person}` : "";
            person && organization ? apiUrl += `,PER:${person}` : "";
            location && !person && !organization ? apiUrl += `LOC:${location}` : "";
            location && (person || organization) ? apiUrl += `,LOC:${location}` : "";
            dateFrom ? apiUrl += `&earliest-publish-date=${dateFrom}` : "";
            dateTo ? apiUrl += `&latest-publish-date=${dateTo}` : "";
            author ? apiUrl += `&authors=${author}` : "";
            
            const response = await fetch(apiUrl);

            const data = await response.json();
            setResults(data.news);

            console.log(data);

            if (results) {
                setStatus("success");
            }
            if (data.status == "failure") {
                setStatus("error");
                setError(data.message);
            }
        } catch (err) {
            setStatus("error");
            setError(err.message);
        }
    };

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    let currentPosts = [];

    if (results) {
        currentPosts = results.slice(firstPostIndex, lastPostIndex);
    }

    return(
        <div ref={ref} className="h-screen w-full grid grid-cols-4">
            {status == "idle" &&
                <div className="col-span-3 flex items-center justify-center">
                    <p className="font-body font-bold text-blue-300 text-7xl">Choose search filters.</p>
                </div>
            }
            {status == "error" && 
                <div className="col-span-3 flex items-center justify-center">
                    <p className="font-news font-bold text-blue-300 text-5xl">{error}</p>
                </div>
            }
            {status == "loading" && 
                <div className="col-span-3 flex items-center justify-center">
                    <p className="font-body font-bold text-blue-300 text-7xl">Loading...</p>
                </div>
            }
            {status == "success" && results && 
                <div className="col-span-3 h-full">
                    <Card news={currentPosts}/>
                    <Pagination 
                        totalPosts={results.length} 
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            }
            <Filters handleClick={fetchData}/>
        </div>
    );
})

export default Content