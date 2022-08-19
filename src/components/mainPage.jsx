import React from 'react';
import bachata from "../img/bachata.jpg";
import lsalsa from "../img/salsaLatina.jpg";
import ksalsa from "../img/salsaCubana.jpg";
import zuk from "../img/zuk.jpg";
import kizomba from "../img/kizomba.jpg";

import CarouselMainPage from './carouselMainPage.jsx';

const MainPage = () => {
    return (
        <CarouselMainPage>
            <div className="content" >
                <div className='main-page' >
                    <div><span className='hashtag'>#BDSLviv</span>
                        <h1> <span>B</span>ACHATA <br /><span>D</span>ANCE <br /><span>S</span>CHOOL <br /><span>L</span>VIV</h1></div>

                    <p>Танці, що <br />прив'язують</p>
                </div>
            </div>
        </CarouselMainPage>
    );
};

export default MainPage;