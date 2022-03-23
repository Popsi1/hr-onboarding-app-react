import { Link } from "react-router-dom";
import "./profileSettings.css";
  
  export default function ProfileSettings() {
    return (
      <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit Employee</h1>
            <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
            </div>
        </div>
        <div className="userContainer">
          <div className="userShow">
          <span className="userUpdateTitle">View Employee Details</span>
            <div className="userShowBottom">

              <span className="userShowTitle">First Name</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">steven</span>
              </div>

              <span className="userShowTitle">Middle Name</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">popsi</span>
              </div>

              <span className="userShowTitle">Last Name</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">jesus</span>
              </div>

              <span className="userShowTitle">Gender</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">male</span>
              </div>

              <span className="userShowTitle">Birth Date</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">2/2/2022</span>
              </div>

              <span className="userShowTitle">Email</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">popsi@gmail.com</span>
              </div>

              <span className="userShowTitle">Address</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">11 alafia street cokervillage,lagos,nigeria</span>
              </div>

              <span className="userShowTitle">Phone Number</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">08167868689</span>
              </div>

              <span className="userShowTitle">User Name</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">braincleaner</span>
              </div>

              <span className="userShowTitle">Role</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">hr</span>
              </div>

              <span className="userShowTitle">Department</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">account</span>
              </div>

              <span className="userShowTitle">Designation</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">accountant</span>
              </div>
              
            </div>
          </div>

          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form>
              <div className="userUpdateLeft">

                <div className="userUpdateItem">
                  <label>First Name</label>
                  <input type="text" placeholder="first name" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>Middle Name</label>
                  <input type="text" placeholder="middle name" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <input type="text" placeholder="last name" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>Gender</label>
                  <input type="text" placeholder="gender" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>Birth Date</label>
                  <input type="text" placeholder="date of birth" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="email" placeholder="email" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>Address</label>
                  <input type="text" placeholder="address" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>Phone Number</label>
                  <input type="text" placeholder="phone number" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>User Name</label>
                  <input type="text" placeholder="user name" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>Role</label>
                  <input type="text" placeholder="role" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>Department</label>
                  <input type="text" placeholder="department" className="userUpdateInput" />
                </div>

                <div className="userUpdateItem">
                  <label>Designation</label>
                  <input type="text" placeholder="department" className="userUpdateInput" />
                </div>
                

              </div>
              <div>
                <button className="userUpdateButton">Update</button>
              </div>
              
            </form>
            
          </div>
        </div>
      </div>
    );
  }