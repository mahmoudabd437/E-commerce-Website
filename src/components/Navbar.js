import { Navbar, Container, Nav } from "react-bootstrap";
import {
  faSearch,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarApp() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchCart());
  //   }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand>
          <img
            src="/Assets/images/Logo.png"
            alt="Logo"
            style={{ width: "150px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0" }}>
          <Nav className="text-black fw-bold">
            <Link to="/" className="text-uppercase nav-link">
              Home
            </Link>
            <Link to="/Collection" className="text-uppercase nav-link">
              collection
            </Link>
            <Link to="/About" className="text-uppercase nav-link">
              about
            </Link>
            <Link to="/Contact" className="text-uppercase nav-link">
              contact
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar id="basic-navbar-nav" style={{ flexGrow: "0" }}>
          <Nav>
            <Link to="/Collection" className="nav-link">
              <FontAwesomeIcon
                icon={faSearch}
                onClick={() => {
                  setTimeout(() => {
                    document
                      .getElementById("input-field")
                      .classList.remove("d-none");
                  }, 2000);
                }}
              />
            </Link>
            <Link to="/Login" className="nav-link">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to="/Cart" className="nav-link position-relative">
              <FontAwesomeIcon icon={faBagShopping} />
              <span
                className="position-absolute"
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "black",
                  top: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  right: "-11px",
                }}
              >
                {cart.length}
              </span>
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
