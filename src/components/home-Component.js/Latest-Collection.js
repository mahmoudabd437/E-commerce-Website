import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/product-slice";
import ProductDetails from "../Product-details";
import { Link } from "react-router-dom";

function LatestCollection() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //   const productList =

  return (
    <>
      <section className="text-center pt-5 latest">
        <h2 className="me-auto d-flex align-items-center gap-2 justify-content-center">
          <span>Latest</span> Collection <span className="dash"></span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
        <div className="container">
          <div className="row text-start">
            {products.map(
              (product) =>
                product.price < 36 && (
                  <Link
                    key={product._id}
                    to={`/product-details/${product._id}`}
                    className="col-lg-3 col-md-4 col-sm-6 cards text-black text-decoration-none"
                  >
                    <div className="image  overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <h5 className="fs-6 pt-2">{product.name}</h5>
                    <p className="fw-bold">${product.price}</p>
                  </Link>
                )
            )}
          </div>
        </div>
      </section>
      <section className="text-center pt-5 best">
        <h2 className="me-auto d-flex align-items-center gap-2 justify-content-center">
          <span>Best</span> Collection <span className="dash"></span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
        <div className="container">
          <div className="row text-start">
            {products.map(
              (product) =>
                product.bestseller === true && (
                  <Link
                    to={`/product-details/${product._id}`}
                    key={product._id}
                    className="col-lg-3 col-md-4 col-sm-6 cards text-black text-decoration-none"
                    onClick={() => {
                      <ProductDetails product={product} />;
                    }}
                  >
                    <div className="image  overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <h5 className="fs-6 pt-2">{product.name}</h5>
                    <p className="fw-bold">${product.price}</p>
                  </Link>
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default LatestCollection;
