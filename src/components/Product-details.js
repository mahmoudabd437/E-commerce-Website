import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../rtk/slices/product-slice";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToCart } from "../rtk/slices/Cart-slice";
function ProductDetails() {
  const getProduct = useSelector((state) => state.product);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="container pt-5 product-details">
        {getProduct.map(
          (product) =>
            product._id === params.productId && (
              <div key={product._id} className="row">
                <div className="col-sm-12 col-md-6">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    // style={{ width: "100%" }}
                  />
                </div>
                <div className="col-sm-12 col-md-6  ">
                  <h3 className="text-black">{product.name}</h3>
                  <div className="rate">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} style={{ opacity: ".5" }} />
                    <span> (120)</span>
                  </div>
                  <h2 className="text-black fw-bold">${product.price}</h2>
                  <p className="text-black-50">{product.description}</p>
                  <p>Available Size </p>
                  <div className="size">
                    {product.sizes.map((size) => (
                      <button
                        className="text-black"
                        key={size}
                        style={{ backgroundColor: "#eee", marginLeft: "5px" }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <button
                    className="btn btn-dark mt-5 mb-4"
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    Add to Cart
                  </button>
                  <hr />
                  <p className="text-black-50 mb-1">100% Original product.</p>
                  <p className="text-black-50 mb-1">
                    Cash on delivery is available on this product.
                  </p>
                  <p className="text-black-50 mb-1">
                    Easy return and exchange policy within 7 days.
                  </p>
                </div>
              </div>
            )
        )}
      </div>
      <div className="container pt-5 pb-5">
        <div>
          <span
            style={{ padding: "10px 20px ", border: "1px solid #ddd" }}
            className="text-black fw-bold"
          >
            Description
          </span>
          <span style={{ padding: "10px 20px ", border: "1px solid #ddd" }}>
            Reviews (122)
          </span>
        </div>
        <div
          className="p-3"
          style={{ border: "1px solid #ddd", marginTop: "5px" }}
        >
          <p className="text-black-50">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="text-black-50">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
