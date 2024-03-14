function Pagination({totalPosts, postsPerPage, setCurrentPage, currentPage}) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }

    return(
        <div className="flex flex-wrap items-center space-x-4 mt-8 mb-8 2xl:mb-0 space-y-4 2xl:space-y-0 justify-center">
            {pages.map((page, index) => {
                return <button
                onClick={() => setCurrentPage(page)} 
                className={`${page == currentPage ? 'bg-blue-300 text-white' : 'text-blue-300 bg-white'} border-2 hover:bg-blue-300 hover:text-white border-blue-300 h-10 rounded-xl w-10 font-news font-semibold`}
                key={index}>
                {page}
                </button>
            })}
        </div>
    );
}

export default Pagination