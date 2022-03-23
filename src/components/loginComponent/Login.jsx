import React, { useContext, useState } from "react";
import swal from "sweetalert"
import "./Login.css";
import { useHistory } from "react-router-dom";
import { GlobalVariables } from "../../AppContext/Provider";
import photo from '../shared/images/png-transparent-avatar-blue-avatar-icon-blue-png-material-heroes.png'
import agent from "../../api/Agent";


function Login() {
  let history = useHistory();
  const { loginResponse, setLoginResponse } = useContext(GlobalVariables);
  const [disableButton, setDisableButton]= useState(false);

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  

  const hadleDisableButton = () =>{
    setDisableButton(true);
  } 

  const handleSubmit = async (e) => {
    e.preventDefault(loginCredentials.email);
    hadleDisableButton(true);

    try{
        const response = await agent.RavenAccess.Login(
            loginCredentials.email,
            loginCredentials.password
          );
          setDisableButton(false);
          setLoginResponse(response.data);
          localStorage.setItem("Email",response.data.appUser.email);
          localStorage.setItem("token",response.data.token);
          
          swal({
              icon:"success",
              text:"Login was successful",
              timer:2000
          })

          if (
            response.data.roles[0] === "SuperAdmin" ||
            response.data.roles[0] === "Admin"
          ) {
            history.push("/hrDashboard");
          } else {
            history.push("/login");
          }

        }
    catch{
        setDisableButton(false);
        swal({
            icon:"error",
            text:"An error occured while login in."
        })
    }
  };

   
  return (
    <div>
      <div className="login-inbox-login">
        <img
          src={photo}
          alt="avatar"
          className="avatar-login-login"
        />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                email: e.target.value,
              })
            }
            value={loginCredentials.email}
            required
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                password: e.target.value,
              })
            }
            value={loginCredentials.password}
            required
          />
          <input type="submit" name="submit" value="Login" disabled={disableButton}/>
          <br />
          <a href="#!">Forgot your Password?</a>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Login;