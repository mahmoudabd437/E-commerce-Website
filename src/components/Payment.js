import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Payment() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="container pt-5 payment">
        <div className="row ">
          <div className="col-lg-6 col-sm-12 pt-5">
            <h2 className="me-auto d-flex align-items-center gap-2 text-black">
              <span>DELIVERY</span> INFORMATION<span className="dash"></span>
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="d-flex flex-column gap-3"
            >
              <div className="d-flex gap-2">
                <input
                  type="text"
                  placeholder="First name"
                  style={{ width: "49%" }}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  style={{ width: "49%" }}
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-100"
              />
              <input type="text" placeholder="Street" className="w-100" />
              <div className="d-flex gap-2">
                <input
                  type="text"
                  placeholder="City"
                  style={{ width: "49%" }}
                />
                <input
                  type="text"
                  placeholder="State"
                  style={{ width: "49%" }}
                />
              </div>
              <div className="d-flex gap-2">
                <input
                  type="text"
                  placeholder="Zipcode"
                  style={{ width: "49%" }}
                />
                <input
                  type="text"
                  placeholder="Country"
                  style={{ width: "49%" }}
                />
              </div>
              <input type="text" placeholder="Phone" className="w-100" />
            </form>
          </div>
          <div
            className="col-lg-6 col-sm-12 position-relative"
            style={{ height: "250px" }}
          >
            <div
              className="position-absolute payment-right"
              style={{ right: "0", width: "97%", bottom: "0%" }}
            >
              <h2 className="me-auto d-flex align-items-center gap-2 text-black">
                <span>CART</span> TOTAL<span className="dash"></span>
              </h2>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ borderBottom: "1px solid #ddd" }}
              >
                <p>Subtotal</p>
                <p>
                  $
                  {cart.reduce(
                    (acc, product) => acc + product.price * product.quantity,
                    0
                  )}
                </p>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ borderBottom: "1px solid #ddd" }}
              >
                <p>Shipping Fee</p>
                <p>$10</p>
              </div>
              <div className="d-flex justify-content-between align-items-center fw-bold">
                <p className="text-black">Total</p>
                <p className="text-black">
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
        </div>
      </div>
    </>
  );
}
export default Payment;
