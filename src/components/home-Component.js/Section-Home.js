import "./Section.css";
function SectionHome() {
  return (
    <section className="first">
      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center flex-column">
            <p className="text-uppercase d-flex align-items-center gap-2">
              <span className="dash"></span> Our bestsellers
            </p>
            <h1>Latest Arrivals</h1>
            <p className="text-uppercase d-flex align-items-center gap-2">
              Shop Now<span className="dash"></span>
            </p>
          </div>
          <div className="col p-0">
            <img
              style={{ width: "100%" }}
              src="/Assets/images/hero_img-DOCOb6wn.png"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHome;
