import React, { useState } from "react";
//import swal from "sweetalert"
import "./addJobOffering.css";
import agent from "../../../api/Agent";
import swal from "sweetalert";

export default function AddJobOffering() {
  const [disableButton, setDisableButton] = useState(false);
  const [formValues, setFormValues] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    JobType: "",
    Gender: "",
    Email: "",
    Designation: "",
    Department: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisableButton(true);
    if (
      formValues.Department !== "" &&
      formValues.Designation !== "" &&
      formValues.Gender !== ""
    ) {
      try {
        const response = await agent.RavenAccess.AddProbationalUser(formValues);
        setDisableButton(false);
        if (response) {
          swal({
            icon: "success",
            title: "Successfully added",
            timer: 2000,
          });
        }
      } catch (error) {
        setDisableButton(false);
        swal({
          icon: "error",
          title: "Email/user already exist",
        });
      }
    } else {
      alert("Department, designation and gender must be selected.");
    }
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Add Qualified Applicant</h1>

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
          <label>Department</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) =>
              setFormValues({ ...formValues, Department: e.target.value })
            }
            value={formValues.Department}
            required
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
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  Gender: e.target.value,
                })
              }
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  Gender: e.target.value,
                })
              }
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="Other"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  Gender: e.target.value,
                })
              }
              checked
            />
            <label for="other">Other</label>
          </div>
        </div>
        <button
          className="newUserButton"
          type="submit"
          disabled={disableButton}
        >
          Create
        </button>
      </form>
    </div>
  );
}
