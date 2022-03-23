import React, { Component } from 'react'
import "./promotion.css";

export default class Promotion extends Component {
    render() {
        return (
            <div className="newUser">

                <h1 className="newUserTitle">Employee Promotion</h1>

                <form className="Form">

                <div className="newUserItem">
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
                  <label>Role</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="none">none</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="Line Manager">Line Manager</option>
                        <option value="Member">Member</option>
                    </select>
                </div>

                <div className="newUserItem">
                  <label>Salary</label>
                  <input type="text" placeholder="salary" />
                </div>
                </form>

                <button className="newUserButton">Create</button>
          
            </div>
        )
    }
}