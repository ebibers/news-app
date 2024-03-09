import { CiRead } from "react-icons/ci";
import { format } from 'date-fns';

function Card(props) {
    const results = props.news;

    return(
        <div className="col-span-3 grid grid-cols-3 justify-items-center">
            {results.map((result) => {
                return(
                    <div key={result.id} className="w-96 rounded-3xl relative mt-8 grid justify-items-center shadow-xl">
                        <img src={result.image} className="rounded-t-3xl w-96 h-64" alt="image"/>
                        <p className="text-center h-14 font-news pt-2 overflow-hidden w-full px-10">{result.title}</p>
                        <a href={result.url} className="text-2xl mb-4 absolute bottom-1 text-blue-300
                        border-blue-300 hover:bg-blue-300 hover:text-white p-2 rounded-full
                        border-2" target="_blank">{<CiRead/>}</a>
                        <div className="grid w-full font-news items-center h-20 grid-cols-2">
                            <p className="text-center ml-4 justify-self-start">{format(result.publish_date, 'MMMM do yyyy')}</p>
                            <p className="text-white font-semibold mr-4 justify-self-end h-7 w-10 text-center
                            bg-blue-300 rounded-lg">{result.language}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Card