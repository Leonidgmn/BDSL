import React from 'react';
import Maps from './maps';

const Contacts = () => {
    return (
        <div className='conteiner-contacts'>
             <div className='contacts-item'>
                <h3>Адреса:</h3>
                <h4>Адреса: м. Львів, вул. Лемківська, 15, “Bachata Dance School Lviv”</h4>
                <h3>Телефон:</h3>
                <h4>+38 097 758 12 55</h4>
                <h3>E-mail:</h3>
                <h4>bdslviv@gmail.com</h4>
             </div>
             <div className="map-containers">
             <Maps className='maps'/>
             </div>
            
        </div>
    );
};

export default Contacts;