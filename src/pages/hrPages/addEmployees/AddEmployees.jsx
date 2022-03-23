import React, { useState } from "react";
import swal from "sweetalert";
import "./addEmployees.css";
import agent from "../../../api/Agent"

export default function AddEmployees() {
  const [formValues, setFormValues] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    JobType: "",
    Role: "",
    Email: "",
    UserName: "",
    Password: "",
    Gender: "",
    Designation: "",
    Department: "",
    Salary: 0,
    StartDate: "",
  });

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('hello');
    
    if(formValues.Department !== '' && formValues.Designation !== '' && formValues.Gender !== '' && formValues.Role !== '')
    {

      
      try{
        const response = await agent.RavenAccess.AccountSetup(formValues); 
        if(response)
        {
              swal({
                icon:"success",
                text:"Account set-up was successful",
                timer:2000,
              })
          }
      }
      catch(error){
        swal({
          icon:"error",
          text:"An error occured while creating the account. User already exist",
          timer:2000,
        })
      }
    }
    else
    {
      alert('Department, designation and gender must be selected.')
    }
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Add Employee</h1>

      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>First Name</label>
          <input
            type="text"
            placeholder="first name"
            onChange={(e) =>
              setFormValues({ ...formValues, FirstName: e.target.value })
            }
            value={formValues.FirstName}
            required
          />
        </div>

        <div className="newUserItem">
          <label>Middle Name</label>
          <input
            type="text"
            placeholder="middle name"
            onChange={(e) =>
              setFormValues({ ...formValues, MiddleName: e.target.value })
            }
            value={formValues.MiddleName}
            required
          />
        </div>

        <div className="newUserItem">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="last name"
            onChange={(e) =>
              setFormValues({ ...formValues, LastName: e.target.value })
            }
            value={formValues.LastName}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Job Type</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) =>
              setFormValues({ ...formValues, JobType: e.target.value })
            }
            value={formValues.JobType}
            required
          >
            <option value="none">none</option>
            <option value="Full Time">Full Time</option>
            <option value="Contract">Contract</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            onChange={(e) =>
              setFormValues({ ...formValues, Email: e.target.value })
            }
            value={formValues.Email}
            required
          />
        </div>

        <div className="newUserItem">
          <label>User Name</label>
          <input
            type="text"
            placeholder="username"
            onChange={(e) =>
              setFormValues({ ...formValues, UserName: e.target.value })
            }
            value={formValues.UserName}
            required
          />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) =>
              setFormValues({ ...formValues, Password: e.target.value })
            }
            value={formValues.Password}
            required
          />
        </div>

        <div className="newUserItem">
          <label>Salary</label>
          <input
            type="text"
            placeholder="salary"
            min="150000"
            onChange={(e) =>
              setFormValues({ ...formValues, Salary: e.target.value })
            }
            value={formValues.Salary}
          />
        </div>

        <div className="newUserItem">
          <label>Department</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) =>
              setFormValues({ ...formValues, Department: e.target.value })
            }
            value={formValues.Department}
          >
            <option value="none">none</option>
            <option value="Accounting">Accounting</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <div className="newUserItem">
          <label>Designation</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) =>
              setFormValues({ ...formValues, Designation: e.target.value })
            }
            value={formValues.Designation}
          >
            <option value="none">none</option>
            <option value="Accountant">Accountant</option>
            <option value="HR">HR</option>
          </select>
        </div>

        <div className="newUserItem">
          <label>Role</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) =>
              setFormValues({ ...formValues, Role: e.target.value })
            }
            value={formValues.Role}
          >
            <option value="none">none</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Line Manager">Line Manager</option>
            <option value="Member">Member</option>
          </select>
        </div>

        <div className="newUserItem">
          <label>Start Date</label>
          <input
            type="date"
            placeholder="start date"
            onChange={(e) =>
              setFormValues({ ...formValues, StartDate: e.target.value })
            }
            value={formValues.StartDate}
            required
          />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              onChange={(e) =>
                setFormValues({ ...formValues, Gender: e.target.value })
              }
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              onChange={(e) =>
                setFormValues({ ...formValues, Gender: e.target.value })
              }
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="Other"
              onChange={(e) =>
                setFormValues({ ...formValues, Gender: e.target.value })
              }
              checked
            />
            <label for="other">Other</label>
          </div>
        </div>
        <button className="newUserButton" type="submit">Create</button>
      </form>
    </div>
  );
}
