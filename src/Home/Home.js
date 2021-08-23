import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/button";
import "./Home.css";
import ReportComboBox from "./Interest";

const InterestOptions = [
  { value: "Web Development", label: "Web Development" },
  { value: "Machine Learning", label: "Machine Learning" },
  { value: "Competitive Programming", label: "Competitive Programming" },
  { value: "App development", label: "App development" },
  { value: "Deep Learning", label: "Deep Learning" },
];

function Home() {
  const [loginData, setLoginData] = useState({
    Name: "",
    Branch: "",
    RollNumber: "",
    Whatsapp: "",
  });
  const [Interest, setInterest] = useState();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data) {
      setLoginData(data);
    }
  }, []);

  const { Name, Branch, RollNumber, Whatsapp } = loginData;
  const updateLoginData = (event) =>
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify(loginData));
  };
  const handleInterestChange = (obj) => {
    setInterest(obj);
    console.log(obj);
  };

  return (
    <div>
      <div className="App">Senior-Junior Interaction App</div>
      <div className="welcome">{"Hey Buddy :)"}</div>
      <form onSubmit={handleSubmit}>
        <div className="welcomePage">
          <div className="name_input login_div">
            <label className="name_label ">Enter Your Name</label>
            <input
              type="text"
              className="input_name "
              placeholder="Ex: jitendra meena"
              onChange={updateLoginData}
              name="Name"
              value={Name}
              required
            ></input>
          </div>
          <div className="branch login_div">
            <label className="name_label">Enter Your Branch</label>
            <input
              type="text"
              className="input_name"
              onChange={updateLoginData}
              placeholder="Ex: Electrical Engineering"
              name="Branch"
              value={Branch}
              required
            ></input>
          </div>
          <div className="rollno login_div">
            <label className="name_label">Enter Your Roll Number</label>
            <input
              type="text"
              className="input_name"
              onChange={updateLoginData}
              placeholder="Ex: 18085052"
              name="RollNumber"
              value={RollNumber}
              required
            ></input>
          </div>
          <div className="wa_number login_div">
            <label className="name_label">Enter Your Whatsapp Number</label>
            <input
              type="text"
              className="input_name"
              onChange={updateLoginData}
              placeholder="Ex: 0123456789"
              name="Whatsapp"
              value={Whatsapp}
              required
            ></input>
          </div>
          <div
            className="user_interest  login_div"
            placeholder="Ex: Web Development"
          >
            <label className="name_label">Area Of Interest</label>
            <div className="input_name ">
              <ReportComboBox
                optionGroups={InterestOptions}
                onChange={handleInterestChange}
                className="interest_select_div"
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="submit"
              disabled={false}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
