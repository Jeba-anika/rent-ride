import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import RRButton from "./RRButton";
const Header = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  return (
    <div className="px-20 py-5 shadow flex justify-between items-center ">
      <div className="flex items-center gap-5">
        <Link to="/">
          <img src={Logo} alt="Logo" className="size-12" />
        </Link>
        <h1 className="text-2xl font-bold">Rent Ride</h1>
      </div>
      <div className="flex gap-5 items-center ">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
        {user ? (
          <RRButton styles="px-3 py-1" onClick={() => dispatch(logout())}>
            Logout
          </RRButton>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
