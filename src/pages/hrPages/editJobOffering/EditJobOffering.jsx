import React, { Component } from 'react'
import "./editJobOffering.css";

export default class EditJobOffering extends Component {
    render() {
        return (
          <div className="newUser">

          <h1 className="newUserTitle">Edit Job Offering</h1>

          <form className="newUserForm">

          <div className="newUserItem">
                  <label>First Name</label>
                  <input type="text" placeholder="first name" />
                </div>

                <div className="newUserItem">
                  <label>Middle Name</label>
                  <input type="text" placeholder="middle name" />
                </div>

                <div className="newUserItem">
                  <label>Last Name</label>
                  <input type="text" placeholder="last name" />
                </div>

                <div className="newUserItem">
                  <label>Email</label>
                  <input type="email" placeholder="email" />
                </div>

                <div className="newUserItem">
                  <label>Department</label>
                  <input type="text" placeholder="department" />
                </div>

                <div className="newUserItem">
                  <label>Designation</label>
                  <input type="password" placeholder="Designation" />
                </div>

                <div className="newUserItem">
                  <label>Gender</label>
                  <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                  <label for="other">Other</label>
                  </div>
                </div>
   
          </form>

          <button className="newUserButton">Update</button>

        </div>
    )
  }
}