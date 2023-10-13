import "./register.css"
import {Link} from "react-router-dom";

export default function Register() {
  return (
    <div className="Register">
      <span className="Registertitle">Register</span>
      <form action="submit" className="Registerform">
        <label>Username</label>
        <input type="text" placeholder="Enter Username..." />
        <label>Email</label>
        <input type="text" placeholder="Enter Email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter Password..." />
        <label>Country</label>
        <input type="text" placeholder="select country..." />
        <label>Phone Number</label>
        <input type="text" placeholder="Enter Phone Number..." />
        <button className="Registerformbutton">Submit</button>
      </form>

  
      
        <button className="Registerloginbutton">
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </button>
    
    </div>
  );
}
