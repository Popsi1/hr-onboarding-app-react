import React, { Component } from 'react'
import "./timeOffSettings.css";


export default function TimeOffSettings() {
  
  return (
    <div className="widgetLg">

        <div className="userTitleContainer">
            <h3 className="widgetLgTitle">Time Off</h3>
        </div>

      <table className="widgetLgTable">

      <thead>
        
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Date</th>    
          <th className="widgetLgTh">Time Off Type</th>
          <th className="widgetLgTh">Duration</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Comment</th>
        </tr>

        </thead>

        <tbody>

        <tr className="widgetLgTr">

          <td className="widgetLgDate">2/2/2022</td>

          <td className="widgetLgDate">vacation</td>

          <td className="widgetLgAmount">2 days</td>

          <td className="widgetLgAmount">pending</td>

          <td className="widgetLgAmount">i have to attend my brother wedding </td>

          <div>
          <td className="widgetLgStatus">
          <button className="widgetLgButton">Approve</button>
          </td>

          <td className="widgetLgStatus">
          <button className="widgetLgButton">Decline</button>
          </td>

          </div>

        </tr>
       
        </tbody>

      </table>

    </div>
  );
}