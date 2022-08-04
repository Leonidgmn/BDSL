import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { MenuData } from './menuData';

function PagesNavigation() {
//taking array from MenuData and display menu items List. So we can add more menu 
//items to file MenuData.js to create more menu items. We use method map and callback function. And we put information in props.
  return (
    <>             
            {MenuData.map((item, index) => {  
              return (
                <li key={index} 
                      className={item.cName}>
                      <Link to={item.path}>
                    
                      <span>{item.title}</span>
                      </Link>
                </li>
              );
            })};
        
    </>
  );
}

export default PagesNavigation;