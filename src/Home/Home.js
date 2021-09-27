import React from "react";
import "./Home.css";
import LoginForm from "./HomeRender";
import { useHistory } from "react-router-dom";

function Home(props) {
  const {onChangeLogin,onChangeInterest,Interest,loginData}=props ;
  const updateLoginData = (event) =>
    onChangeLogin({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  const updateInterest = (e) => {
    onChangeInterest({
      ...Interest,
      [e.target.id]: e.target.checked,
    });
  };
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify(loginData));
    localStorage.setItem("Interest", JSON.stringify(Interest));
    history.push("/mentor");
  };

  return (
    <div className="Home">
    <div className="containt">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-3 description">
          <h1>Hey Buddy</h1>
          <h5>
            Welcome to the Senior junior interaction app. Fill out the form to
            contact your interest specialist.
          </h5>
        </div>
        <div className="col-lg-3"></div>
        <div className="col-lg-4 form">
          <LoginForm
            loginData={loginData}
            Interest={Interest}
            handleSubmit={handleSubmit}
            updateLoginData={updateLoginData}
            updateInterest={updateInterest}
          />
        </div>
      </div>
    </div>
    </div>
  );
}
export default Home;
