import React from 'react'
import { brands } from '../../Data/barnd'
import "./Brand.css"
function Brand() {
  return (
      <div className="brand-wrpper">
          {
              brands.map((item,i) => {
                  return (
                      <div className="brand" key={item.id}>
                          <img src={ item.image}  />
                      </div>
                  )
              })
          }
    </div>
  )
}

export default Brand