import { forwardRef } from "react";
import { useState } from "react";
import Card from "./Card.jsx";
import Pagination from "./Pagination.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

const Content = forwardRef(({}, ref) => {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const apiUrl = `https://api.worldnewsapi.com/search-news?api-key=${apiKey}&text=tesla&number=100&sort=publish-time&sort-direction=DESC`;

    const fetchData = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setResults(data.news);
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = results.slice(firstPostIndex, lastPostIndex);

    return(
        <div ref={ref} className="h-screen w-full grid grid-cols-4">
            <div className="col-span-3 h-full">
                <Card news={currentPosts}/>
                <Pagination 
                    totalPosts={results.length} 
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
            <div className="col-span-1 bg-blue-300">
                <button onClick={fetchData}>fetch</button>
            </div>
        </div>
    );
})

export default Content