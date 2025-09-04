import React from 'react'
import { categories } from '../../Data/Category'
import "./Category.css"
function Category() {
  return (
      <div className="category">
          {categories.map((cat) => {
              return (
                  <div className="category_item">
                      <img src={cat.imge} alt="" className="category_image" />
                      <b className="category_title">
                          {cat.title}
                      </b>
                  </div>
              )
          })}
    </div>
  )
}

export default Category