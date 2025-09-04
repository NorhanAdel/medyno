import React from 'react'
import { specialOffers } from '../../Data/spicalOffer';
import Offer from './Offer';
import "./SpicalOffer.css"
function SpicalOffer() {
  return (
    <div className="spicalOffer">
      <h1 className="spicalOffer_title">
        عروض كبيره لليوم
        <span>ل24 ساعه ⏲ فقط</span>
      </h1>
      <div className="spcial-offer-wrpper">
        {specialOffers.map((offer) => {
          return <Offer key={offer.id} offer={offer} />;
        })}
      </div>
    </div>
  );
}

export default SpicalOffer