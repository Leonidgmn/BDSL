import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import mainImg from "../img/PeopleTrial.jpg";
import mainImg1 from "../img/main-photo-1.jpg";
import mainImg2 from "../img/main-photo-2.jpg";

const renderCarouselItem = (image) => {
    return (
        <section id='mainPage' style={{
            background: `url('${image}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
            backgroundPosition: 'top center'
        }}>
            <div className="content" >
                <div className='main-page' >
                    <div><span className='hashtag'>#BDSLviv</span>
                        <h1> <span>B</span>ACHATA <br /><span>D</span>ANCE <br /><span>S</span>CHOOL <br /><span>L</span>VIV</h1></div>

                    <p>Танці, що <br />прив'язують</p>
                </div>
            </div>
        </section>
    )
}

const CarouselMainPage = () => {
    return (
        <Carousel autoPlay={true} showThumbs={false} showStatus={false} interval={3000} stopOnHover={false} infiniteLoop={true}>

            {renderCarouselItem(mainImg)}
            {renderCarouselItem(mainImg1)}
            {renderCarouselItem(mainImg2)}

        </Carousel>
    )
}

export default CarouselMainPage;