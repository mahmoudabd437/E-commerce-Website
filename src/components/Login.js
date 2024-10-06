import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <h2 className="me-auto d-flex align-items-center gap-2 justify-content-center pt-5">
        Login <span className="dash"></span>
      </h2>
      <div className="container pt-5 pb-5 d-flex justify-content-center ">
        <form
          style={{ width: "400px" }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
          />
          <div className="d-flex justify-content-between pb-4">
            <p style={{ cursor: "pointer" }}>Forgot your password?</p>
            <Link to={"/SignUp"} className="text-black text-decoration-none">
              Create account
            </Link>
          </div>
          <button
            className="btn btn-dark login"
            style={{
              padding: "10px 30px ",
              marginLeft: "calc(50% - 50px) ",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
export default Login;
