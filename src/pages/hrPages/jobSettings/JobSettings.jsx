import React, { Component } from 'react'
import "./jobSettings.css";
import { Link } from "react-router-dom";


export default function Job() {
  
  return (
    <div className="widgetLg">

        <div className="userTitleContainer">
            <h3 className="widgetLgTitle">Job Details</h3>
            <Link to="/addJob">
            <button className="userAddButton">Add</button>
            </Link>
        </div>

      <table className="widgetLgTable">

      <thead>
        
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Full Name</th>
          <th className="widgetLgTh">Employment Status</th>
          <th className="widgetLgTh">Department</th>
          <th className="widgetLgTh">Designation</th>
          <th className="widgetLgTh">Report To</th>
          <th className="widgetLgTh">Salary</th>
        </tr>

        </thead>

        <tbody>

        <tr className="widgetLgTr">

          <td className="widgetLgDate">ebuka belle</td>

          <td className="widgetLgDate">Full Time</td>

          <td className="widgetLgAmount">Account</td>

          <td className="widgetLgAmount">Accountant</td>

          <td className="widgetLgAmount">popsi</td>

          <td className="widgetLgAmount">50000</td>

          <div>
          <td className="widgetLgStatus">
          <Link to="/editJob">
          <button className="widgetLgButton">Edit</button>
          </Link>
          </td>

          <td className="widgetLgStatus">
          <button className="widgetLgButton">Delete</button>
          </td>
          </div>


        </tr>
       
        </tbody>

      </table>

    </div>
  );
}