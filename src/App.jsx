import Hero from "./Hero.jsx";
import Content from "./Content.jsx";
import { CiCircleChevDown } from "react-icons/ci";
import { useRef } from "react";

function App() {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return(
        <>
            <Hero/>
            <button onClick={handleClick} className="hover:text-blue-300 text-8xl absolute text-white mb-10 bottom-1 right-1/2">
                <CiCircleChevDown/>
            </button>
            <Content ref={ref}/>
        </>
    );
}

export default App
