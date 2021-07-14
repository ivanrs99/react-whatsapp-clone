import React from 'react';
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Search = () => {
    return (
        <div className="search-container">
            <button>
                <SearchIcon className="btnSearch"/>
                <ArrowBackIcon className="btnBack"/>
            </button>
            <label className="lblText"></label>
            <div className="textChat">Busca un chat o inicia uno nuevo</div>
        </div>
    )
}

export default Search;