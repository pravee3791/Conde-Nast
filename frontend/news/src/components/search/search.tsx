import './search.css'
function Search() {

    return (
        <>
            <div className="wrapper">
                <div className="search-container">
                    <input type="text" className="input" placeholder="What are you looking for?" />
                    <input type="button" value="search" className="close-btn" />
                </div>
            </div>
        </>
    )
}

export default Search;