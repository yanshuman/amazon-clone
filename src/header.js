import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import India from './image/india.png';
import "./style/header.css";

function Header() {
    return ( 
    <div className = "header" >
        <img className = "header_logo" src = "https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt = "amazon" / >

        <div className = "header_Search" >
            <select>
                <option value = "all" > All </option>   
                <option value = "appliances" > Appliances </option>   
                <option value = "clothings" > Clothing </option>   
                <option value = "Beauty" > Beauty </option>   
            </select>   

            <input className="header_searchInput" type="text" />
            <SearchIcon className = "header_searchIcon" / >
        </div> 

        <div className="language">
            <img className="lang" src={India} alt="india" />
            <select name = "dropdown">
                <option value="english">English</option>
                <option value="english">Hindi</option>
            </select>
        </div>
        
        </div>
    );
}

export default Header;