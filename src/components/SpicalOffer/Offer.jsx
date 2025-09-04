import React from "react";
import { useState } from "react";
import Rating from "../Rating/Rating";
import {Link} from "react-router-dom"
function Offer({ offer }) {
  const { firstImage, title, price, secondImage, discount,id, reviews, rating } =
    offer;
  const CalculstedDiscount = price - (discount * price) / 100;
  const [imgSrc, setImgeSrc] = useState(firstImage);
  return (
    <div className="offer">
      <div className="offer-imge-wrapper">
        <img
          onMouseEnter={() => setImgeSrc(secondImage)}
          onMouseLeave={() => setImgeSrc(firstImage)}
          src={imgSrc}
          alt={title}
          className="offer-imge"
        />
      </div>
      <div className="offer-info">
        <h5 className="offer-title">{title}</h5>
        <Rating rating={rating} reviews={reviews} />
        <div className="rating"></div>
        <div className="offer-price">
          <b className="offer-price-item">{price}$</b>
          <b className="offer-final-item">{CalculstedDiscount}%</b>
        </div>
        <Link to={`/spcialoffer/${id}`} className="offer-see-more">
          شاهد المزيد
        </Link>
        <div className="offer-discount">خضم{CalculstedDiscount}%</div>
      </div>
    </div>
  );
}

export default Offer;
