import React from 'react';
import IGLogo from '../../assets/instagram.png';
import './SearchBar.css';

const SearchBar = () => {
    return(
        <div className='search-wrapper'>
            <div className='image-wrapper'>
                <img src={IGLogo} className='logo' />
            </div>
            <div>
                <input type='search' placeholder='Search' />
            </div>
            <div className='icons-wrapper'>
                <div className='icons'>
                    <i className='far fa-compass' />
                </div>
                <div className='icons'>
                    <i className='far fa-heart' />
                </div>
                <div className='icons'>
                    <i className='far fa-user' />
                </div>
            </div>
        </div>
        
    )
}

export default SearchBar