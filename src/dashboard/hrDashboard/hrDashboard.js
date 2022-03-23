import React from "react";
import Topbar from "../../components/hrComponent/topbar/Topbar";
import Sidebar from "../../components/hrComponent/sidebar/Sidebar";
import Profile from "../../pages/hrPages/profile/Profile";
import JobOffering from "../../pages/hrPages/jobOffering/JobOffering";
import AddJobOffering from "../../pages/hrPages/addJobOffering/AddJobOffering";
import EditJobOffering from "../../pages/hrPages/editJobOffering/EditJobOffering";
import Onboarding from "../../pages/hrPages/onboarding/Onboarding";
import AddOnboarding from "../../pages/hrPages/addOnboarding/AddOnboarding";
import EditOnboarding from "../../pages/hrPages/editOnboarding/EditOnboarding";
import WorkFlow from "../../pages/hrPages/workFlow/WorkFlow";
import AddWorkFlow from "../../pages/hrPages/addWorkFlow/AddWorkFlow";
import EditWorkFlow from "../../pages/hrPages/editWorkFlow/EditWorkFlow";
import AddEmployees from "../../pages/hrPages/addEmployees/AddEmployees";
import Mail from "../../pages/hrPages/mail/Mail";
import Employees from "../../pages/hrPages/employees/Employees";
import SystemSetting from "../../pages/hrPages/systemSetting/SystemSetting";
import ResetPassword from '../../pages/hrPages/resetPassword/ResetPassword';
import EmployeesSettings from '../../pages/hrPages/employeesSettings/EmployeesSettings';
import ProfileSettings from '../../pages/hrPages/profileSettings/ProfileSettings';
// import ViewDocument from '../../pages/employeesPages/viewDocument/ViewDocument';
import TrainingSettings from '../../pages/hrPages/trainingSettings/TrainingSettings';
import JobSettings from "../../pages/hrPages/jobSettings/JobSettings";
import EditJob from "../../pages/hrPages/editJob/EditJob";
import AddJob from "../../pages/hrPages/addJob/AddJob";
import AddTraining from '../../pages/hrPages/addTraining/AddTraining';
import EditTraining from "../../pages/hrPages/editTraining/EditTraining";
import TimeOffSettings from '../../pages/hrPages/timeOffSetting/TimeOffSettings';
import Promotion from '../../pages/hrPages/promotion/Promotion';
import "./hrDashboard.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function hrDashboard() {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/jobOffering">
              <JobOffering />
            </Route>
            <Route path="/addJobOffering">
              <AddJobOffering />
            </Route>
            <Route path="/editJobOffering">
              <EditJobOffering />
            </Route>
            <Route path="/onboarding">
              <Onboarding />
            </Route>
            <Route path="/addOnboarding">
              <AddOnboarding />
            </Route>
            <Route path="/editOnboarding">
              <EditOnboarding />
            </Route>
            <Route path="/workFlow">
              <WorkFlow />
            </Route>
            <Route path="/addWorkFlow">
              <AddWorkFlow />
            </Route>
            <Route path="/editWorkFlow">
              <EditWorkFlow />
            </Route>
            <Route path="/employees">
              <Employees />
            </Route>
            <Route path="/addEmployees">
              <AddEmployees />
            </Route>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/systemSetting">
          <SystemSetting />
          </Route>
          <Route path="/resetPassword">
          <ResetPassword />
          </Route>
          <Route path="/employeesSettings">
          <EmployeesSettings />
          </Route>
          <Route path="/profileSettings">
          <ProfileSettings />
          </Route>
          {/* <Route path="/viewDocument">
          <ViewDocument />
          </Route> */}
          <Route path="/trainingSettings">
          <TrainingSettings />
          </Route>
          <Route path="/jobSettings">
          <JobSettings />
          </Route>
          <Route path="/editJob">
          <EditJob />
          </Route>
          <Route path="/addJob">
          <AddJob />
          </Route>
          <Route path="/addTraining">
          <AddTraining />
          </Route>
          <Route path="/editTraining">
          <EditTraining />
          </Route>
          <Route path="/timeOffSettings">
          <TimeOffSettings />
          </Route>
          <Route path="/promotion">
          <Promotion />
          </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default hrDashboard;
