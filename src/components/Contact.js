import Subscribe from "./Subscribe";

function Contact() {
  return (
    <>
      <h2 className="me-auto d-flex align-items-center gap-2 justify-content-center pt-5">
        <span>Contact</span> Us <span className="dash"></span>
      </h2>
      <div className="container p-5 contact">
        <div className="row ">
          <div className="col">
            <img
              src="/Assets/images/contact.png"
              alt="contact"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col  p-5">
            <h3 className="mb-4">Our Store</h3>
            <p className="mb-0">54709 Willms Station</p>
            <p className="mb-4">Suite 350, Washington, USA</p>
            <p className="mb-0">Tel: (415) 555-0132</p>
            <p className="mb-4">Email: admin@forever.com</p>
            <h3 className="mb-4">Careers at Forever</h3>
            <p>Learn more about our teams and job openings.</p>
            <button
              className="bg-white text-black contact-btn btn"
              style={{ border: "1px solid #414141", padding: "15px 25px" }}
            >
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
export default Contact;
