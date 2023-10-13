import "./login.css"
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="logintitle">LOGIN</span>
      <form action="" className="loginform">
        <label>Email</label>
        <input type="text" placeholder="Enter Your Email...." />
        <label>Password</label>
        <input type="password" placeholder="Enter Your Password...." />
        <button className="loginformbutton">Continue</button>
      </form>

      <button className="loginregisterbutton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}