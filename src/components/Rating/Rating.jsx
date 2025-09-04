import React from 'react'
import "./Rating.css"
function Rating({ reviews, rating }) {
  return (
    <div className="rating_wrapper">
      <b className="rating"> ⭐{rating} </b>
      <span> تقيمات:{reviews}  </span>
    </div>
  );
}

export default Rating