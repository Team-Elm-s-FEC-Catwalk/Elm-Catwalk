import React, {useState} from 'react';
import ToolTipStarModal from './ToolTipStarModal.jsx'

const StarForModal = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log('ADDSTARRATING', rating)
  // const starValues = ['Poor', 'Fair', 'Average', 'Good', 'Great']
  // const handleStar - ((starValue) => {

  // })
  return (
    <div className="add-star-rating">
      {[...Array(5)].map((star, starIndex) => {
        starIndex += 1;
        return (
          <div className='tooltip' key={starIndex}>
          <button
            id= 'addstar-review'
            type='button'
            className={starIndex <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(starIndex)}
            onMouseEnter={() => setHover(starIndex)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="add-star">&#9733;</span>
          </button>
          <ToolTipStarModal starIndex={starIndex}/>
          </div>

          // <{starValue}
        );
      })}
    </div>
  );
};

export default StarForModal;