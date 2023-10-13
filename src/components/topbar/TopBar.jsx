import "./topbar.css";
import { NavLink } from "react-router-dom";

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topicon fa-brands fa-square-facebook"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-square-pinterest"></i>
        <i className="topicon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topcenter toplist">
        <div className=" toplistitems ">
          <NavLink to="/">HOME</NavLink>
        </div>

        <div className=" toplistitems ">
          <NavLink to="/about">ABOUT</NavLink>
        </div>

        <div className=" toplistitems ">
          <NavLink to="/contact">CONTACT</NavLink>
        </div>

        <div className=" toplistitems ">
          <NavLink to="/write">WRITE</NavLink>
        </div>

        <div className=" toplistitems ">
          <NavLink to="/" end="true">
            {user && "LOGOUT"}
          </NavLink>
        </div>
      </div>

      <div className="topright">
        {user ? (
          <img
            className="topimage"
            src="https://images.unsplash.com/photo-1607692605484-00d334ad0d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          />
        ) : (
          <div className="toplist">
            <div className=" toplistitems   userloginregister">
              <NavLink to="/login">LOGIN</NavLink>
            </div>

            <div className=" toplistitems   userloginregister">
              <NavLink to="/register">REGISTER</NavLink>
            </div>
          </div>
        )}

        <div className="search__bar">
          <form type="text" action="/search" name="search">
            <input type="text" name="searchinput" />
            <button>
              <i className="searchicon fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
