import React from 'react';
import IGLogo from '';
import './SearchBar.css';

const SearchBar = () => {
    return(
        <div className='search-wrapper'>
            <div className='image-wrapper'>
                <img src={IGLogo} className='logo' />
            </div>
            <div>
                <input type='text' placeholder='search' />
            </div>
        </div>
    )
}

export default SearchBar