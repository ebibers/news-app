import { CiRead } from "react-icons/ci";
import { format } from 'date-fns';

function Card(props) {
    const results = props.news;

    return(
        <div className="grid grid-cols-3 justify-items-center">
            {results.map((result) => {
                return(
                    <div key={result.id} className="w-96 rounded-3xl relative mt-12 flex justify-center flex-wrap shadow-xl">
                        <img src={result.image} className="rounded-t-3xl w-96 h-60" alt="image"/>
                        <p className="text-center h-12 my-2 font-news overflow-hidden w-full px-10">{result.title}</p>
                        <a href={result.url} className="text-2xl mb-2 absolute bottom-1 text-blue-300
                        border-blue-300 hover:bg-blue-300 hover:text-white p-2 rounded-full
                        border-2" target="_blank">{<CiRead/>}</a>
                        <div className="grid w-full font-news items-center py-4 grid-cols-2">
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