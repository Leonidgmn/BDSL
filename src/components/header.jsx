import React, { useState } from "react";
import mainIcon from "../img/BDSL-logo.jpg";
import { Link } from "react-router-dom";
import { MenuData } from "../data/menuData";
import MyButton from "./UI/button/MyButton";
//taking array from MenuData.js and printing menu items List. So we can add more menu
//items to file MenuData.js to create more menu items. We use method map and callback function. And we put information in props.
const Header = ({ setModal }) => {
  //this is hook useState. read in readme file
  const [burgerStatus, setBurger] = useState(true);

  const showMenu = () => {
    setBurger(!burgerStatus);
  };
  const hideMenu = () => {
    setBurger(true);
  };

  return (
    <header>
      <div className="content">
        <div className="header">
          <div>
            <img src={mainIcon} alt="logo" />
          </div>
          <div
            className={burgerStatus ? "navigation" : "navigation-burger-open"}
            onClick = {hideMenu}
          >
            <ul onClick={(event => event.stopPropagation())}>
              {MenuData.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={hideMenu} // https://ru.react.js.org/docs/lists-and-keys.html about keys props!!! important
                    /*className={item.cName}*/
                  >
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li>
                {" "}
                <MyButton onClick={() => setModal(true)}> ЗАПИСАТИСЬ</MyButton>
              </li>
            </ul>
          </div>

          <div className="navigation-button">
            <button onClick={showMenu}>
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
