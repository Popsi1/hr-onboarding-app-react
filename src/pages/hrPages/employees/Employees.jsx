import React, { useState, useContext, useEffect } from "react";
import "./employees.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../../../components/shared/images/Loading.gif";
import { GlobalVariables } from "../../../AppContext/Provider";
import agent from "../../../api/Agent";
import Card from "../../../components/shared/card/Card";

function Employees() {
  //DECLARING STATES
  const loading = <img src={Loading} alt="loadingImage"></img>;
  const { employees, setEmployees } = useContext(GlobalVariables);
  const [loadingPage, setLoadingPage] = useState(true);
  const [error, setError] = useState(false);

  // FETCH DATA FROM API
  useEffect(() => {
    async function fetchData() {
      try {
        const employees = await agent.RavenAccess.getAllEmployees(1, 200);
        console.log("employeesdata: ", employees);

        if (employees.data) {
          setEmployees(employees.data.pageItems);
          setLoadingPage(false);
        }
      } catch (error) {
        setEmployees([]);
        setError(true);
        setLoadingPage(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="widgetLg">
      <div className="userTitleContainer">
        <h3 className="widgetLgTitle">Employees</h3>
        <Link to="/addEmployees">
          <button className="userAddButton">+ Add</button>
        </Link>
      </div>
      <div className="employee-card-div">
        {loadingPage && <div className="loading">{loading}</div>}

        {error && (
          <div>
            {swal({
              title: "Oppss",
              icon: "error",
              text: "An error occured while loading the page. try again",
              buttons: "Close",
            })}
          </div>
        )}
        {!error &&
          !loadingPage &&
          employees.map((employee) => (
            <Card
              employee
            />
          ))}
      </div>
    </div>
  );
}

export default Employees;
