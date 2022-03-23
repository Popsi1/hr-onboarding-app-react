import React, { Component } from 'react'
import "./resetPassword.css";

export default class ResetPassword extends Component {
    render() {
        return (
            <div className="newUser">

                <h1 className="newUserTitle">Reset Password</h1>

                <form className="Form">

                <div className="newUserItem">
                    <label>Old Password</label>
                    <input type="text" placeholder="old password" />
                </div>

                <div className="newUserItem">
                    <label>New Password</label>
                    <input type="text" placeholder="new password" />
                </div>

                <div className="newUserItem">
                    <label>Confirm New Pasword</label>
                    <input type="text" placeholder="confirm new password" />
                </div>

                </form>

                <button className="newUserButton">Update</button>
          
            </div>
        )
    }
}