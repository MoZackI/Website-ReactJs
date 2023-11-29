const Pagination = ({ page, lastPage, setPage }) => {

const scrollTop = () => {
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
}
const handlePrevPage = () => {
    setPage((prevState) => prevState -1)
    scrollTop()
}

    return(
        <div className="flex justify-center text-center py-4 px-2 gap-4 text-color-primary">
            { page <= 1 ? null :
            <button onClick={handlePrevPage} className="transision-all hover:text-red-700">prev</button>
            }
            <p>{page}  of  {lastPage}</p>
            {page >= lastPage ? null :
            <button onClick={handleNextPage} className="transision-all hover:text-red-700">next</button>
            }
        </div>
    )
}


export default Pagination