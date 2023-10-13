import SideBars from "../../components/sidebars/SideBars"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingswrapper">
          <div className="settingstitle">
            <span className="settingsupdatetitle">
              Update Account
            </span>
            <span className="settingsdeletetitle">
              Delete Account
            </span>
          </div>
          <form action="" className="settingsform">
            <label >Profile Picture</label>
            <div className="settingsprofilepicture">
              <img className="profilepicture" src="https://images.pexels.com/photos/3933250/pexels-photo-3933250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <label htmlFor="fileinput">
              <i class=" settingsprofilepictureicon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id="fileinput" style= {{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Safak" />

            <label>Email</label>
            <input type="Email" placeholder="Safak@gmail.com" />

            <label>Password</label>
            <input type="password" />

            <button className="settingssubmit"> Update</button>
          </form>

        </div>
        <SideBars/>
    </div>
  )
}
