import React from 'react';
import './SearchBar.css';


function SearchBar({ input, inputChangeHandler, inputSubmitHandler }) {
    return (
        <div className="mx-auto mt-4 mb-4" style={{ width: '287px' }}>
            <input
                id="input"
                placeholder="Search for a character"
                value={input}
                onChange={inputChangeHandler}
            />
            <button className="btn btn-primary searchbar-btn" onClick={inputSubmitHandler}>Search</button>
        </div>
    )
}

export default SearchBar;