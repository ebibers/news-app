import { useState } from "react";

function Filters( {handleClick} ) {
    const [keyword, setKeyword] = useState("");
    const [organization, setOrganization] = useState("");
    const [person, setPerson] = useState("");
    const [location, setLocation] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [author, setAuthor] = useState("");
    const [language, setLanguage] = useState("");

    const languages = [
        {name : "All", code : ""},
        {name : "Afar", code :"aa"},
        {name : "Amharic",	code :'am'},
        {name : "Arabic",	code :'ar'},
        {name : "Bengali",	code :'bn'},
        {name : "Bosnian",	code :'bs'},
        {name : "Bulgarian",	code :'bg'},
        {name : "Burmese",	code :'my'},
        {name : 'Chinese',	code :'zh'},
        {name : 'Croatian',	code :'hr'},
        {name : 'Czech',	code :'cs'},
        {name : 'Danish',	code :'da'},
        {name : 'Dutch',	code :'nl'},
        {name : 'English',	code :'en'},
        {name : 'Estonian',	code :'et'},
        {name : 'Finnish',	code :'fi'},
        {name : 'French',	code :'fr'},
        {name : 'German',	code :'de'},
        {name : 'Greek',	code :'el'},
        {name : 'Hebrew',	code :'he'},
        {name : 'Hindi',	code :'hi'},
        {name : 'Hungarian',	code :'hu'},
        {name : 'Icelandic',	code :'is'},
        {name : 'Indonesian',	code :'id'},
        {name : 'Italian',	code :'it'},
        {name : 'Japanese',	code :'ja'},
        {name : 'Korean',	code :'ko'},
        {name : 'Lao',	code :'lo'},
        {name : 'Latvian',	code :'lv'},
        {name : 'Lithuanian',	code :'lt'},
        {name : 'Macedonian',	code :'mk'},
        {name : 'Malay',	code :'ms'},
        {name : 'Maltese',	code :'mt'},
        {name : 'Marathi',	code :'mr'},
        {name : 'Māori',	code :'mi'},
        {name : 'Nepali',	code :'ne'},
        {name : 'Norwegian',	code :'nb'},
        {name : 'Norwegian',	code :'no'},
        {name : 'Persian',	code :'fa'},
        {name : 'Polish',	code :'pl'},
        {name : 'Portuguese',	code :'pt'},
        {name : 'Romanian',	code :'ro'},
        {name : 'Russian',	code :'ru'},
        {name : 'Serbian',	code :'sr'},
        {name : 'Sinhalese',	code :'si'},
        {name : 'Slovak',	code :'sk'},
        {name : 'Slovene',	code :'sl'},
        {name : 'Somali',	code :'so'},
        {name : 'Spanish',	code :'es'},
        {name : 'Swedish',	code :'sv'},
        {name : 'Tajik',	code :'tg'},
        {name : 'Tamil',	code :'ta'},
        {name : 'Telugu',	code :'te'},
        {name : 'Thai',	code :'th'},
        {name : 'Turkish',	code :'tr'},
        {name : 'Ukrainian',	code :'uk'},
        {name : 'Urdu',	code :'ur'},
        {name : 'Uzbek',	code :'uz'},
        {name : 'Vietnamese',	code :'vi'},
    ];

    return(
        <div className="2xl:col-span-1 col-span-4 py-10 2xl:py-0 flex flex-wrap flex-col space-y-14 justify-center items-center grow-0 bg-blue-300">
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
            <div className="flex w-full 2xl:flex-col 2xl:flex-wrap px-14 2xl:px-0 justify-center">
                <div className="flex flex-col 2xl:flex-row space-y-14 2xl:space-y-0 justify-center 2xl:space-x-40 text-white font-news w-full">
                    <p>Date From</p>
                    <p>Date To</p>
                </div>
                <div className="flex flex-wrap space-y-8 2xl:space-y-0 2xl:space-x-4 justify-center">
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
            <select 
                name="language"
                placeholder="Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="outline-blue-300 px-8 font-news w-3/4 h-12 rounded-full
                text-xl text-blue-300 p-2 font-light"
            >
                {languages.map((language, index) => {
                    return(
                        <option key={index} value={language.code}>{language.name}</option>
                    )
                })}
            </select>
            <button 
                onClick={() => handleClick(keyword, organization, person, location, dateFrom, dateTo, author, language)} 
                className="border-2 border-white font-news hover:text-blue-300 
                hover:bg-white w-3/4 h-12 rounded-full text-xl font-semibold 
                text-white p-2">
                Search
            </button>
        </div>
    );
}

export default Filters