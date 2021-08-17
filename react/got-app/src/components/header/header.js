import React from 'react';
import './header.css';


const Header = () => {
    return (
        <div className="header-block">
            <div className="header-title">
                <a href="#">
                Game of Thrones DB
                </a>
            </div>
            <div className="header-links">
                <li className="li">
                    <a href="#">Characters</a>
                </li>
                <li className="li">
                    <a href="#">Houses</a>
                </li>
                <li className="li"> 
                    <a href="#">Books</a>   
                </li>
            </div>
        </div>
    );
};

export default Header;