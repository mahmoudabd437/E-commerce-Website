function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-5" style={{ backgroundColor: "#eee" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="/Assets/images/logo.png"
              alt="logo"
              style={{ width: "150px" }}
            />
            <p className="text-black-50" style={{ maxWidth: "400px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-lg-3">
            <h3 className="text-black">Company</h3>
            <ul className="list-unstyled ">
              <li className="text-black-50">Home</li>
              <li className="text-black-50">About Us</li>
              <li className="text-black-50">Delivery</li>
              <li className="text-black-50">Privacy Policy</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3 className="text-black">Get in Touch</h3>
            <ul className="list-unstyled text-black-50">
              <li className="text-black-50">+20 112 8019 635</li>
              <li className="text-black-50">Mahmoudalngm2004@gmail.com</li>
              <li className="text-black-50">Gmail</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-black text-center">
          Copyright {year} @ MahmoudAbd.dev - All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
