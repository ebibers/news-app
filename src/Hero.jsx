import Logo from "./Logo.jsx";

function Hero() {
    return(
        <div className="h-screen relative bg-cover bg-center bg-[url('.\assets\background.jpg')]">
            <div className="w-full h-full backdrop-blur-md grid grid-cols-3">
                <div className="w-full h-full grid grid-rows-3 col-span-2">
                    <Logo/>
                    <div className="font-body row-span-2 pl-20 h-full w-full
                    text-white font-bold text-8xl">
                        <p className="pb-5"><span className="text-blue-300">Your</span> Window</p>
                        <p>To the <span className="text-blue-300">World</span></p>
                    </div>
                </div>
                <div className="w-full h-screen bg-blue-300 grid grid-rows-4">
                    <div>
                        <p className="font-body text-center text-white pt-10 text-4xl">DailyNews</p>
                        <p className="font-body text-justify px-16 text-white pt-5 text-2xl">
                        DailyNews is a website that allows it's users to search for news articles about
                        any topic and provides many news sources from all around the world.</p>
                    </div>
                    <div>
                        <p className="font-body text-center text-white pt-5 text-4xl">Features</p>
                        <p className="font-body text-justify px-16 text-white pt-5 text-2xl">
                        News articles can be searched for by using a multitude of different sorting filters
                        such as by: language, keyword, person, location, organization, author, publication date.
                        Each news card has a link that directs the user to the full article.</p>
                    </div>
                    <div>
                        <p className="font-body text-center text-white mt-20 text-4xl">API</p>
                        <p className="font-body text-justify px-16 text-white pt-5 text-2xl">
                        The website uses a public api called World News Api which gives
                        access to thousands of news sources in over 50 languages from 150 different countries.</p>
                    </div>
                    <div className=" self-end pb-8">
                        <p className="font-body text-center text-white text-xl">
                        Learn more about: <a href="https://worldnewsapi.com" target="_blank">
                        worldnewsapi.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero