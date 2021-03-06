/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import ExpandedInfo from './ProductInfoComponents/ExpandedInfo.jsx';
import Socials from './ProductInfoComponents/Socials.jsx';
// import StarRating from './ProductInfoComponents/StarRating.jsx';
import RatingIcon from '../../../client/Ratings&Reviews/RatingIcon.jsx'
import { AppContext } from '../../context.js';

// client/Ratings&Reviews/RatingIcon.jsx
const ProductInfo = () =>  {
  const { average } = useContext(AppContext)

  return (

    <div className="rl-ProductInfo">

      <div className='rl-star-rating'>
        {[...Array(5)].map((item, index) => {
          index += 1
          return (
            <div key={index}>
            <RatingIcon rating={average} index={index}/>
            </div>
            )
          })}
          <a id='read-all-reviews' href="#ReviewAnchor">Read all reviews</a>
      </div>
      <ExpandedInfo />
      <Socials/>




    </div>
  )


}


export default ProductInfo;