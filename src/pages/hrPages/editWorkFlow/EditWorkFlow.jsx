import React, { Component } from 'react'
import "./editWorkFlow.css";

export default class EditWorkFlow extends Component {
    render() {
        return (

          <div className="newUser">

          <h1 className="newUserTitle">Edit Task</h1>

          <form className="Form">

            <div className="newUserItem">
              <label>Task Name</label>
              <input type="text" placeholder="task name" />
            </div>

            <div className="newUserItem">
              <label>Assigned To</label>
              <input type="text" placeholder="assigned to" />
            </div>

            <div className="newUserItem">
              <label>Start Date</label>
              <input type="text" placeholder="start date" />
            </div>

            <div className="newUserItem">
              <label>End Date</label>
              <input type="text" placeholder="end date" />
            </div>

          </form>

          <button className="newUserButton">Update</button>
  
        </div>

    )
  }
}