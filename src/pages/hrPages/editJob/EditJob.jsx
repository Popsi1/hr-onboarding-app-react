import React, { Component } from 'react'
import "./editJob.css";

export default class EditJob extends Component {
    render() {
        return (
          <div className="newUser">

          <h1 className="newUserTitle">Edit Job Details</h1>

          <form className="addemployeeform">

            <div className="newUserItem">
              <label>First Name</label>
              <input type="text" placeholder="full name" />
            </div>

            <div className="newUserItem">
              <label>Employment Status</label>
              <input type="text" placeholder="employee status" />
            </div>

            <div className="newUserItem">
              <label>Department</label>
              <input type="text" placeholder="department" />
            </div>

            <div className="newUserItem">
              <label>Designation</label>
              <input type="text" placeholder="designation" />
            </div>

            <div className="newUserItem">
              <label>Report To</label>
              <input type="text" placeholder="line manager" />
            </div>

            <div className="newUserItem">
              <label>Salary</label>
              <input type="text" placeholder="salary" />
            </div>

            <button className="newUserButton">Create</button>

            </form>
         
        </div>
        
    )
  }
}