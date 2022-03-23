import React from 'react'
import "./workFlow.css";
import { Link } from "react-router-dom";


export default function WorkFlow() {
  
  return (
    <div className="widgetLg">

        <div className="userTitleContainer">
            <h3 className="widgetLgTitle">Employees Workflow</h3>
            <Link to="/addWorkFlow">
            <button className="userAddButton">Add</button>
            </Link>
        </div>

      <table className="widgetLgTable">

      <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Task Name</th>
          <th className="widgetLgTh">Assigned To</th>
          <th className="widgetLgTh">Start Date</th>
          <th className="widgetLgTh">End Date</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        </thead>

        <tbody>

        <tr className="email">
          <td className="emaill">
            <span className="">Welcome Email</span>
          </td>
          <td className="widgetLgDate">williams</td>
          <td className="widgetLgAmount">Due on hire day</td>
          <td className="widgetLgAmount">1/2/2021</td>
          <td className="widgetLgAmount">3/4/2022</td>

          <div>
          <td className="widgetLgStatus">
          <Link to="/editWorkFlow">
          <button className="widgetLgButton">Edit</button>
          </Link>
          </td>
          <td className="widgetLgStatus">
          <button className="widgetLgButton">Delete</button>
          </td>
          </div>

        </tr>

        <tr className="widgetLgTr">
          <td className="email">
            <span className="emaill">Welcome Email</span>
          </td>
          <td className="widgetLgDate">williams</td>
          <td className="widgetLgAmount">Due on hire day</td>
          <td className="widgetLgAmount">1/2/2021</td>
          <td className="widgetLgAmount">3/4/2022</td>

          <div>
          <td className="widgetLgStatus">
          <Link to="/editWorkFlow">
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