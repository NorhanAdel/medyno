import React, { useState } from "react";
import { useParams } from "react-router-dom"
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import Rating from "../../components/Rating/Rating";
import { specialOffers } from "../../Data/spicalOffer"
import "./SpcialOffer.css";
const SpcialOffer = () => {
    const{id}= useParams()
    const product = specialOffers.find((p) => p.id === +id);
  
    const [imgIndex, setImgeIndex] = useState(0);
    const { images, title, rating, reviews, price, discount } = product;

  const CalculstedDiscount = price - (discount * price) / 100;
    
      
    return (
      <>
        <div className="spicalofferpage">
          <div className="spicaloffer-imge-wrpper">
            <img className="spicaloffer-imge" src={images[imgIndex]} />
            <div className="offer-page-select">
              {images.map((item, i) => {
                return (
                  <img
                    onClick={() => setImgeIndex(i)}
                    src={item}
                    key={i}
                    className="select-imge"
                  />
                );
              })}
            </div>
          </div>
          <div className="spicaloffer-info">
            <h3 className="spicaloffer-info-title">{title}</h3>
            <Rating rating={rating} reviews={reviews} />
            <div className="spcial-offer-price">
              <b className="spacial-offer-price-item">${price}</b>
              <b className="spcial-offer-final-discount">
                خضم{CalculstedDiscount}%
              </b>
            </div>
            <div className="spacial-offer-add-cart">
              <div>الكميه</div>
              <input type="number" min="1" max="10" />
              <button className="spacial-offer-add-cart-btn">
                اضف الى عربه التسوق
              </button>
            </div>
          </div>
            </div>
             <ProductDescription/>
      </>
    );
}
export default SpcialOffer;