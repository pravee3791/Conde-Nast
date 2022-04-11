import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchNews } from "../../store/slices/news";

import './search.css'
function Search() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const setSearchText = useCallback((e: any) => {
        setSearchTerm(e.target.value);
    }, []);

    const search = useCallback((e: any) => {
        e.preventDefault();
        dispatch(searchNews(searchTerm));
    }, [searchTerm]);

    const handleKeyPress = useCallback((e: any) => {
        if(e.which === 13) {
            dispatch(searchNews(searchTerm));
        }
    }, [searchTerm]);

    return (
        <>
            <div className="wrapper">
                <div className="search-container">
                    <input type="text" value={searchTerm} onChange={setSearchText} onKeyPress={handleKeyPress} className="input" placeholder="What are you looking for?" />
                    <input type="button" value="search" onClick={search} className="close-btn" />
                </div>
            </div>
        </>
    )
}

export default Search;