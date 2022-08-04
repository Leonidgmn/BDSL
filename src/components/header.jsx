import React from 'react';
import mainIcon from "../img/BDSL-logo.jpg";
import { Link } from 'react-router-dom';
import { MenuData } from './menuData';
//taking array from MenuData.js and printing menu items List. So we can add more menu 
    //items to file MenuData.js to create more menu items. We use method map and callback function. And we put information in props.
const Header = () => {
    return (
        <header>
            <div className="content">
                <div className="header">
                    <div>
                        <img src={mainIcon} alt="logo"/>
                    </div>
                    <div className="navigation">
                        <ul>
                        {MenuData.map((item, index) => {
                             return (
                             <li key={index} // https://ru.react.js.org/docs/lists-and-keys.html about keys props!!! important
                             className={item.cName}>
                             <Link to={item.path}>
                             <span>{item.title}</span>
                             </Link>
                             </li> )
                            })}
                            <li> <button> ЗАПИСАТИСЬ</button></li>
                        </ul>
                    </div>
                    <div className="navigation-button">
                        <button><i className="bi bi-list"></i></button>
                    </div>
                </div>

            </div>

        </header>
    );
};

export default Header;