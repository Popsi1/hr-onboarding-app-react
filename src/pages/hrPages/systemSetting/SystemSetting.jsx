import React from "react";
import { Publish } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./systemSetting.css";
  
  export default function SystemSetting() {
    return (
        <div className="user">

            <div className="userTitleContainer">
                <h1 className="userTitle">Settings</h1>
            </div>

            <div className="userContainer">

                <div className="userShow">
                    <table className="buttonss">
                        <tr>
                            <Link to="/resetPassword" className="link">
                            <td><button className="buttonee">Reset Password </button></td>
                            </Link>
                            <Link to="/employeesSettings" className="link">
                            <td><button className="buttonee">Employees Settings</button></td>
                            </Link>
                        </tr>
                    </table>
                </div>

                <div className="userUpdate">

                    <span className="userUpdateTitle">Edit Profile</span>

                    <form className="userUpdateForm">

                    <div className="userUpdateLeft">

                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="annabeck99" className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder="+1 123 456 67" className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder="+1 123 456 67" className="userUpdateInput" />
                        </div>

                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                        </div>

                    </div>


                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className="userUpdateImg" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            <label htmlFor="file">
                                <Publish className="userUpdateIcon" />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>

                        <button className="userUpdateButton">Update</button>
                    </div>

                    </form>

                </div>
            </div>
        </div>
    );
  }