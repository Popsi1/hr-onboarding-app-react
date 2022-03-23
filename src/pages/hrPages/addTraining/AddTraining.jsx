import React, { Component } from 'react'
import "./addTraining.css";

export default class AddTraining extends Component {
    render() {
        return (
            <div className="newUser">

              <h1 className="newUserTitle">Add Job Training</h1>

              <form className="addemployeeform">

                <div className="newUserItem">
                  <label>Title</label>
                  <input type="text" placeholder="title" />
                </div>

                <div className="newUserItem">
                    <label>Start Date</label>
                    <input type="date" placeholder="start date" />
                </div>

                <div className="newUserItem">
                    <label>End Date</label>
                    <input type="date" placeholder="end date" />
                </div>

                <button className="newUserButton">Create</button>

                </form>
             
            </div>
        )
    }
}
