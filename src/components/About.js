import Subscribe from "./Subscribe";

function About() {
  return (
    <>
      <div className="pt-5">
        <h2 className="me-auto d-flex align-items-center gap-2 justify-content-center">
          <span>About</span> Us <span className="dash"></span>
        </h2>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-5">
              <img
                src="/Assets/images/about.png"
                alt="about"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-7 d-flex flex-column justify-content-center align-items-center p-5">
              <p>
                Forever was born out of a passion for innovation and a desire to
                revolutionize the way people shop online. Our journey began with
                a simple idea: to provide a platform where customers can easily
                discover, explore, and purchase a wide range of products from
                the comfort of their homes.
              </p>
              <p>
                Since our inception, we've worked tirelessly to curate a diverse
                selection of high-quality products that cater to every taste and
                preference. From fashion and beauty to electronics and home
                essentials, we offer an extensive collection sourced from
                trusted brands and suppliers.
              </p>
              <p className="text-black fw-bold text-start me-auto">
                Our mission
              </p>
              <p>
                Our mission at Forever is to empower customers with choice,
                convenience, and confidence. We're dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <h4 className="me-auto d-flex align-items-center gap-2 ">
          <span>Why</span> CHOOSE US <span className="dash"></span>
        </h4>
        <div className="row pt-5">
          <div className="col-lg-4 col-md-6 p-5 card">
            <p className="text-black">Quality Assurance:</p>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 p-5 card">
            <p className="text-black">Convenience:</p>
            <p>
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 p-5 card">
            <p className="text-black">Exceptional Customer Service:</p>
            <p>
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

export default About;
