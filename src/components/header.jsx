import React from 'react';
import mainIcon from "../img/BDSL-logo.jpg";

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
                            <li><a href="#">ГОЛОВНА</a></li>
                            <li><a href="#">РОЗКЛАД</a></li>
                            <li><a href="#">ВИКЛАДАЧІ</a></li>
                            <li><a href="#">НОВИНИ</a></li>
                            <li><a href="#">КОНТАКТИ</a></li>
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