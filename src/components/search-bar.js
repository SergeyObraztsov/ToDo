import React from 'react';
const SearchBar = () => {
    const searchText = 'Type here to search',
    searchStyle = {
        fontSize: '20px'
    };
    return <input 
    style={searchStyle}
    placeholder={searchText} />;
};

export default SearchBar;