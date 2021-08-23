import React, { useState } from "react";
import Button from "@material-ui/core/button";
import "./Home.css";
function Home() {
  const [loginData ,setLoginData] = useState({
    Name: "",
    Branch: "",
    RollNumber:"" ,
    Whatsapp :"",
    Interest:"" ,
  });
  const { Name,Branch,RollNumber,Whatsapp,Interest} = loginData;
  const updateLoginData = (event) =>
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify(loginData));
  };
  return (
    <div>  
      <div className="App">Senior-Junior Interaction App</div>
      <div className="welcome">{"Hey Buddy :)"}</div>
      <form onSubmit={handleSubmit}>
        <div className="welcomePage">
          <div className="name_input login_div">
            <label for="enter-your-name" className="name_label ">
              Enter Your Name
            </label>
            <input
              type="text"
              class="input_name "
              placeholder="Ex: jitendra meena"
              onChange={updateLoginData}
              name="Name"
              value={Name}
              required
            ></input>
          </div>
          <div className="branch login_div">
            <label for="enter-your-branch" className="name_label">
              Enter Your Branch
            </label>
            <input
              type="text"
              class="input_name"
              onChange={updateLoginData}
              placeholder="Ex: Electrical Engineering"
              name="Branch"
              value={Branch}
              required
            ></input>
          </div>
          <div className="rollno login_div">
            <label for="enter-your-roll-number" className="name_label">
              Enter Your Roll Number
            </label>
            <input
              type="text"
              class="input_name"
              onChange={updateLoginData}
              placeholder="Ex: 18085052"
              name="RollNumber"
              value={RollNumber}
              required
            ></input>
          </div>
          <div className="wa_number login_div">
            <label for="enter-your-wa-number" className="name_label">
              Enter Your Whatsapp Number
            </label>
            <input
              type="text"
              class="input_name"
              onChange={updateLoginData}
              placeholder="Ex: 0123456789"
              name="Whatsapp"
              value={Whatsapp}
              required
            ></input>
          </div>
          <div className="user_interest  login_div" placeholder="Ex: Web Development">
            <label for="enter-your-interest" className="name_label">
              Area Of Interest
            </label>
            <input
              type="text"
              class="input_name"
              onChange={updateLoginData}
              placeholder=""
              name="Interest"
              value={Interest}
              required
            ></input>
          </div>
          {/* <button type='submit' className='submit' >
              Submit
            </button> */}
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            className="submit"
            disabled={false}
            // style={{ margin: 20 }}
            style={{Width: '30px', Height: '30px'}}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Home;
