import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/product-slice";
import { Link } from "react-router-dom";

function Collection() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleType = (e) => {
    if (type.includes(e.target.value)) {
      setType((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setType((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const applyFilter = () => {
      let productCopy = products.slice();
      console.log(productCopy);

      if (category.length > 0) {
        productCopy = productCopy.filter((item) =>
          category.includes(item.category)
        );
      }

      if (type.length > 0) {
        productCopy = productCopy.filter((item) =>
          type.includes(item.subCategory)
        );
      }

      if (searchTerm) {
        productCopy = productCopy.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredProducts(productCopy);
    };
    applyFilter();
  }, [category, type, searchTerm, products]);
  const showFilter = () => {
    document.querySelector(".show").classList.toggle("d-none");
    // document.querySelector(".category").classList.toggle("d-none");
  };
  return (
    <>
      {/* Search Bar */}
      <div
        className="container d-flex justify-content-center pt-5"
        id="input-field"
      >
        <input
          type="text"
          placeholder="Search"
          className="p-3"
          style={{
            borderRadius: "30px",
            border: "1px solid #414141",
            height: "35px",
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="p-2"
          style={{ marginLeft: "-35px" }}
        />
        <FontAwesomeIcon
          icon={faXmark}
          className="p-2"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            document.getElementById("input-field").classList.add("d-none");
          }}
        />
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="filter col-md-3">
            <h3 onClick={showFilter} style={{ cursor: "pointer" }}>
              FILTERS
            </h3>
            <div className="show">
              <div
                className="type"
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  height: "200px",
                }}
              >
                <p>Categories</p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      style={{ width: "15px" }}
                      onChange={toggleCategory}
                      value={"Men"}
                    />
                    <label>Men</label>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      style={{ width: "15px" }}
                      onChange={toggleCategory}
                      value={"Women"}
                    />
                    <label>Women</label>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      style={{ width: "15px" }}
                      onChange={toggleCategory}
                      value={"Kids"}
                    />
                    <label>Kids</label>
                  </li>
                </ul>
              </div>
              <div
                className="category"
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  height: "200px",
                  marginTop: "20px",
                }}
              >
                <p>Type</p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      style={{ width: "15px" }}
                      value={"Topwear"}
                      onChange={toggleType}
                    />
                    <label>Topwear</label>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      style={{ width: "15px" }}
                      value={"Bottomwear"}
                      onChange={toggleType}
                    />
                    <label>Bottomwear</label>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      style={{ width: "15px" }}
                      value={"Winterwear"}
                      onChange={toggleType}
                    />
                    <label>Winterwear</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="container">
              <h2 className="me-auto d-flex align-items-center gap-2 text-black">
                <span>ALL</span> COLLECTIONS<span className="dash"></span>
              </h2>
              <div className="row text-start collection">
                {filteredProducts.map((product) => (
                  <Link
                    key={product._id}
                    to={`/product-details/${product._id}`}
                    className="col-lg-3 col-md-4 col-sm-6 cards text-white"
                  >
                    <div className="image  overflow-hidden">
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <h5 className="fs-6 pt-2 text-black-50">{product.name}</h5>
                    <p className="fw-bold text-black-50">${product.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
