import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import "./header.css";

function Header() {
    return(
        <div className="header">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt="amazon"/>

            <div className="header_Search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
        </div>
    );
}

export default Header;