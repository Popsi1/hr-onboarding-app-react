import React, { Component } from 'react'
import "./addJob.css";

export default class AddJob extends Component {
    render() {
        return (
            <div className="newUser">

              <h1 className="newUserTitle">Add Job Details</h1>

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

        {/* <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div> */}

        {/* <div className="newUserItem">
          <label>Date</label>
          <input type="date" placeholder="date" />
        </div> */}

        {/* <div className="newUserItem">
          <label>File</label>
          <input type="file" placeholder="file" />
        </div> */}

        {/* <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        {/* <div className="newUserItem">
                  <label>Department</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="none">none</option>
                        <option value="yes">Accounting</option>
                        <option value="no">Finance</option>
                    </select>
                </div>

                <div className="newUserItem">
                  <label>Designation</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="none">none</option>
                        <option value="yes">Accountant</option>
                        <option value="no">HR</option>
                    </select>
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
                </div> */}
