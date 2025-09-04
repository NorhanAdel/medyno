import IMG1 from "../../Assets/m1.jpg";
import IMG2 from "../../Assets/m2.jpg";
import "./Cart.css";

const cart = [
  {
    id: 1,
    quntity: 2,
    price: 2500,
    title: "هاتف سامسونج",
    imge: IMG1,
  },
  {
    id: 1,
    quntity: 2,
    
    price: 2500,
    title: "هاتف سامسونج",
    imge:IMG2,
  },
];
const Cart = () => {
    return (
      <div className="cart-page">
        <h1 className="cart-page-title">سلة التسوق</h1>
        <div className="cart-wrapper">
          <div className="cart-items">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img-wrapper">
                    <img
                      className="cart-imge"
                      src={item.imge}
                      alt={item.title}
                    />
                  </div>
                  <div className="info-cart">
                    <div className="cart-info-title">{item.title}</div>
                    <div className="item-quntity">
                      الكميه:
                      <span>{item.quntity}</span>
                    </div>
                    <div className="cart-price">
                      السعر:
                      <span>{item.price * item.quntity}</span>
                    </div>
                    <button>Delet</button>
                  </div>
                </div>
              );
            })}
                </div>
                <div className="cart-summry">
            <div className="cart_summry_text">جزء من طلبك مؤهل للشحن المجانى</div>
            <div className="summry-total">
              المجموع:
              <span>{cart.reduce((acc,cur)=>acc + cur.price * cur.quntity,0 )}$</span>
            </div>
            <button className="cart_summary_btn">اشترى الان </button>
                </div>
        </div>
      </div>
    );
}
export default Cart;