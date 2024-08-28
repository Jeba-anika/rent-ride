import { Link } from "react-router-dom";
import RedLight from "../assets/redLight.jpg";
import RRButton from "../components/common/RRButton";
const ErrorPage = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${RedLight})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="text-rrSkyBlue text-5xl bg-white p-4 rounded mb-4 border border-rrSkyBlue">
          Oops! Page Not Found!
        </div>
        <div className="text-center">
          <RRButton styles="px-12 py-4 ">
            <Link to="/" className="text-xl">
              Go to Home
            </Link>
          </RRButton>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
