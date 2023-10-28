import React from 'react';

export default function Searchbar() {
    return (
        <>
            <div id="searchbar">
                <i className="fa-solid fa-magnifying-glass" style={{ color: '#808080' }}></i>
                <input type="text" placeholder='Search for products...' />
            </div>
        </>
    );
}
