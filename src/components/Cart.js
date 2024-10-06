import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { removeFromCart, updateQuantity } from "../rtk/slices/Cart-slice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <>
      <div className="container pt-5">
        <h2 className="me-auto d-flex align-items-center gap-2 text-black">
          <span>YOUR</span> CART<span className="dash"></span>
        </h2>
        {cart.map((product) => (
          <div key={product._id}>
            <hr />
            <div className="row">
              <div className="col-6 d-flex gap-3 align-items-center">
                <img
                  src={product.image[0]}
                  alt={product._id}
                  style={{ height: "64px" }}
                />
                <div className="info d-flex flex-column ms-3">
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <input
                  type="number"
                  value={product.quantity}
                  style={{ width: "60px", height: "25px" }}
                  onChange={(e) =>
                    handleQuantityChange(
                      product.id,
                      parseInt(e.target.value, 10)
                    )
                  }
                />
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={() => {
                    dispatch(removeFromCart(product));
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="container position-relative" style={{ height: "250px" }}>
        <div className="position-absolute" style={{ right: "0" }}>
          <h2 className="me-auto d-flex align-items-center gap-2 text-black">
            <span>CART</span> TOTAL<span className="dash"></span>
          </h2>
          <div className="d-flex justify-content-between align-items-center">
            <p>Subtotal</p>
            <p>
              $
              {cart.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              )}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>Shipping Fee</p>
            <p>$10</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>Total</p>
            <p>
              $
              {cart.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              ) + 10}
            </p>
          </div>
          <Link to={"/Cart/Payment"} className="btn btn-dark">
            Proceed To Check
          </Link>
        </div>
      </div>
    </>
  );
}
export default Cart;
