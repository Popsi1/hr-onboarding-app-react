import React, { Component } from 'react'
import "./trainingSettings.css";
import { Link } from "react-router-dom";


export default function trainingSettings() {
  
  return (
    <div className="widgetLg">

        <div className="userTitleContainer">
            <h3 className="widgetLgTitle">Job Trainings</h3>
            <Link to="/addTraining">
            <button className="userAddButton">Add</button>
            </Link>
        </div>

      <table className="widgetLgTable">

      <thead>
        
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Title</th>    
          <th className="widgetLgTh">Start Date</th>
          <th className="widgetLgTh">End date</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        </thead>

        <tbody>

        <tr className="widgetLgTr">

          <td className="widgetLgDate">instrumentation</td>

          <td className="widgetLgDate">2/2/2022</td>

          <td className="widgetLgAmount">3/3/2022</td>

          <td className="widgetLgAmount">in progress</td>
          

          <div>
          <td className="widgetLgStatus">
          <Link to="/editTraining">
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