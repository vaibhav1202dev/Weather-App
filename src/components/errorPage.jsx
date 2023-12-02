import { Link } from "react-router-dom";
import Errorimg from "../images/error/error-img.png";
import "../styles/errorPage.css";
const Error = () => {
  return (
    <>
      <div className="Error-page">
        <div className="error-img">
          <img src={Errorimg} alt="Error-img" />
        </div>
        <div>
          <button className="btn">
            {/* Return to Home Page */}
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/"
              style={{ color: "black", textUnderlineOffset: "10px" }}
            >
              back to home page &nbsp;
              <i class="fa-solid fa-car-side fa-beat"></i>&nbsp;
            </Link>
          </button>
        </div>
      </div>
    </>
   );
 };

export default Error;
