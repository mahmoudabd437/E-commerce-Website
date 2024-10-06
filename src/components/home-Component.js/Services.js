import {
  faHeadset,
  faCircleCheck,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subscribe from "../Subscribe";

function Services() {
  return (
    <>
      <div className="container services ">
        <div className="row text-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <FontAwesomeIcon icon={faArrowsRotate} style={{ width: "60px" }} />
            <p className="text-black fw-bold m-0">Easy Exchange Policy</p>
            <p className="text-black-50 m-0">
              We offer hassle free exchange policy
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <FontAwesomeIcon icon={faCircleCheck} style={{ width: "60px" }} />
            <p className="text-black fw-bold m-0">7 Days Return Policy</p>
            <p className="text-black-50 m-0">
              We provide 7 days free return policy
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <FontAwesomeIcon icon={faHeadset} style={{ width: "60px" }} />
            <p className="text-black fw-bold m-0">Best customer support</p>
            <p className="text-black-50 m-0">
              we provide 24/7 customer support
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
export default Services;
