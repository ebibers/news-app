import { useState } from "react";

function Filters( {handleClick} ) {
    const [keyword, setKeyword] = useState("");
    const [organization, setOrganization] = useState("");
    const [person, setPerson] = useState("");
    const [location, setLocation] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [author, setAuthor] = useState("");

    return(
        <div className="col-span-1 flex flex-wrap flex-col space-y-14 justify-center items-center grow-0 bg-blue-300">
            <input 
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Keyword"
                className=" outline-blue-300 px-8 font-news w-3/4 h-12 rounded-full
                text-xl text-blue-300 p-2 font-light"
            />
            <input 
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Organization"
                className=" outline-blue-300 px-8 font-news w-3/4 h-12 rounded-full
                text-xl text-blue-300 p-2 font-light"
            />
            <input 
                type="text"
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                placeholder="Person"
                className=" outline-blue-300 px-8 font-news w-3/4 h-12 rounded-full
                text-xl text-blue-300 p-2 font-light"
            />
            <input 
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className=" outline-blue-300 px-8 font-news w-3/4 h-12 rounded-full
                text-xl text-blue-300 p-2 font-light"
            />
            <div className="flex w-full flex-col flex-wrap justify-center">
                <div className="flex justify-center space-x-40 text-white font-news w-full">
                    <p>Date From</p>
                    <p>Date To</p>
                </div>
                <div className="flex flex-wrap space-x-4 justify-center">
                    <input 
                        type="date"
                        value={dateFrom}
                        pattern="\d{4}-\d{2}-\d{2}"
                        onChange={(e) => setDateFrom(e.target.value)}
                        className=" outline-blue-300 px-8 font-news w-52 h-12 rounded-full
                        text-xl text-blue-300 p-2 font-light"
                    />
                    <input 
                        type="date"
                        value={dateTo}
                        pattern="\d{4}-\d{2}-\d{2}"
                        onChange={(e) => setDateTo(e.target.value)}
                        className=" outline-blue-300 px-8 font-news w-52 h-12 rounded-full
                        text-xl text-blue-300 p-2 font-light"
                    />
                </div>
            </div>
            <input 
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                className=" outline-blue-300 px-8 font-news w-3/4 h-12 rounded-full
                text-xl text-blue-300 p-2 font-light"
            />
            <button 
                onClick={() => handleClick(keyword, organization, person, location, dateFrom, dateTo, author)} 
                className="border-2 border-white font-news hover:text-blue-300 
                hover:bg-white w-3/4 h-12 rounded-full text-xl font-semibold 
                text-white p-2">
                Search
            </button>
        </div>
    );
}

export default Filters