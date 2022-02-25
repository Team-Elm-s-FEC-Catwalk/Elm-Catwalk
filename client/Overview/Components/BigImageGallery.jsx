/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context.js';
import Carousel, { CarouselItem } from "../richardCarousel.jsx";
import VerticalCarousel, { VerticalCarouselItem } from "../richardVerticalCarousel.jsx";
import MainImageThumbnail from './SubComponents/MainImageThumbnail.jsx';



const BigGallery = () => {
  const { currentStyle, currentStylePhoto, setCurrentStylePhoto, currentStyleThumbnails, activeIndex, setActiveIndex, bigGallery, setBigGallery } = useContext(AppContext);

  const handleClick = () => {
    // console.log('hi');
    setBigGallery(false);

  }



  return (
    <div className="big-image-gallery" >
      <div className="rl-big-carousel-holder" >
      <button className="rl-expand-view-button" onClick={() => handleClick()}><i className="fa-solid fa-compress"></i></button>

        <Carousel>
          {currentStyle.photos?.map((image, key) => (
            <CarouselItem key={key}>{image.url}</CarouselItem>
          ))}

        </Carousel>
        <VerticalCarousel>

          {currentStyleThumbnails?.map((style, key) => (
            (key === activeIndex) ? <div className="active-thumbnail" key={key} onClick={() => setActiveIndex(key)}>
            <VerticalCarouselItem >{style.thumbnail_url}</VerticalCarouselItem>
            </div> :
            <div className="vertical-thumbnail" key={key} onClick={() => setActiveIndex(key)}>
            <VerticalCarouselItem >{style.thumbnail_url}</VerticalCarouselItem>
            </div>
          ))}

        </VerticalCarousel>


        {/* <img  src={currentStylePhoto} height="515" width="470" id="mainImage" alt='frick'/> */}
      </div>

      {/* <ul id="mainImageThumbs">
        {currentStyleThumbnails.map((style, key) => {
          return <MainImageThumbnail style={style} key={key}/>

        })}

        </ul> */}





    </div>
  )


}




export default BigGallery;