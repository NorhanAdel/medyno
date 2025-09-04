import { useParams } from "react-router-dom";
import { products } from "../../Data/product";
import Rating from "../../components/Rating/Rating";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import "./SingleProduct.css"
const SingleProduct = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === +id);
    const { title, image, price, rating, reviews } = product;
    return (
      <>
        <div className="singleproduct">
          <div className="product-wrapper">
            <div className="product-imge-wrapper">
              <img src={image} alt={title} />
            </div>
            <div>
              <h1 className="product-title">{title}</h1>
              <Rating rating={rating} reviews={reviews} />
              <div className="product-price">${price}</div>
              <div className="spacial-offer-add-cart">
                <div>الكميه</div>
                <input type="number" min="1" max="10" />
                <button className="spacial-offer-add-cart-btn">
                  اضف الى عربه التسوق
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProductDescription />
      </>
    );
}
export default SingleProduct;