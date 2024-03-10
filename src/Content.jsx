import { forwardRef } from "react";
import { useState } from "react";
import Card from "./Card.jsx";
import Pagination from "./Pagination.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

const Content = forwardRef(({}, ref) => {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);


    const postsPerPage = 6;

    const apiUrl = `https://api.worldnewsapi.com/search-news?api-key=${apiKey}&language=en&number=100&sort=publish-time&sort-direction=DESC`;

    const fetchData = async () => {
        try{
            setStatus("loading");

            const response = await fetch(apiUrl);
            const data = await response.json();
            setResults(data.news);

            if (results) {
                setStatus("success");
            }
        } catch (err) {
            setStatus("error");
            setError(err.message);
        }
    };

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = results.slice(firstPostIndex, lastPostIndex);

    return(
        <div ref={ref} className="h-screen w-full grid grid-cols-4">
            {status == "idle" &&
                <div className="col-span-3 flex items-center justify-center">
                    <p className="font-body font-bold text-blue-300 text-7xl">Choose search filters.</p>
                </div>
            }
            {status == "error" && 
                <div className="col-span-3 flex items-center justify-center">
                    <p className="font-news font-bold text-blue-300 text-3xl">{error}</p>
                </div>
            }
            {status == "loading" && 
                <div className="col-span-3 flex items-center justify-center">
                    <p className="font-body font-bold text-blue-300 text-7xl">Loading...</p>
                </div>
            }
            {status == "success" && 
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
            <div className="col-span-1 bg-blue-300">
                <button onClick={fetchData}>fetch</button>
            </div>
        </div>
    );
})

export default Content