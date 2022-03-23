import React, { Component } from 'react'
import "./employeesSettings.css";
import { Link } from "react-router-dom";


export default function EmployeesSettings() {
  
  return (
    <div className="widgetLg">

        <div className="userTitleContainer">
            <h3 className="widgetLgTitle">Employees Settings </h3>
            {/* <Link to="/addOnboarding">
            <button className="userAddButton">Add</button>
            </Link> */}
        </div>

      <table className="widgetLgTable">

      <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Full Name</th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Department</th>
          <th className="widgetLgTh">Designation</th>
          <th className="widgetLgTh">Profile</th>
          <th className="widgetLgTh">Documents</th>
          <th className="widgetLgTh">Training</th>
          <th className="widgetLgTh">Job</th>
          <th className="widgetLgTh">Time Off</th>
          <th className="widgetLgTh">Promotion</th>
          <th className="widgetLgTh">Deactivation</th>
          {/* <th className="widgetLgTh">Edit</th>
          <th className="widgetLgTh">Delete</th> */}
        </tr>
        </thead>

        <tbody>

        <tr className="widgetLgTr">

          {/* <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">ebuka</span>
          </td> */}
          
          <td className="widgetLgDate">chukwuebuka enyelu</td>
          <td className="widgetLgDate">bukas@gmail.com</td>
          <td className="widgetLgAmount">Account</td>
          <td className="widgetLgAmount">Accountant</td>
          <td className="widgetLgAmount"><Link to='/profileSettings'>Profile</Link></td>
          <td className="widgetLgAmount"><Link to='/viewDocument'>Documents</Link></td>
          <td className="widgetLgAmount"><Link to='/trainingSettings'>Training</Link></td>
          <td className="widgetLgAmount"><Link to='/jobSettings'>Job</Link></td>
          <td className="widgetLgAmount"><Link to='/timeOffSettings'>Time Off</Link></td>
          <td className="widgetLgAmount"><Link to='/promotion'>Promotion</Link></td>
          <td className="widgetLgAmount"><Link to='/deactivation'>Deactivation</Link></td>
    
          {/* <td className="widgetLgStatus">
          <Link to="/editOnboarding">
          <button className="widgetLgButton">Edit</button>
          </Link>
          </td>
          <td className="widgetLgStatus">
          <button className="widgetLgButton">Delete</button>
          </td> */}

        </tr>
        
        </tbody>

      </table>

    </div>
  );
}