import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

import mainImg from "../../img/PeopleTrial.jpg";
import mainImg1 from "../../img/main-photo-1.jpg";
import mainImg2 from "../../img/main-photo-2.jpg";


const renderCarouselItem = (image) => {

    return (
        <div style={{
            background: `url('${image}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
            backgroundPosition: 'top center',
            height: '90vh'
        }}>
        </div>
    )
}


const CarouselMainPage = ({children, ...props}) => {
    return (
        <section id='mainPage'>
            <Carousel
                autoPlay={true}
                showThumbs={false}
                showStatus={false}
                interval={3000}
                stopOnHover={false}
                infiniteLoop={true}
                showIndicators={false}
                showArrows={false}>

                {renderCarouselItem(mainImg)}
                {renderCarouselItem(mainImg1)}
                {renderCarouselItem(mainImg2)}

            </Carousel>

            {children}
        </section>
    )
}

export default CarouselMainPage;