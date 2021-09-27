import React  from "react";
import "./Mentor.css";
import WebDev from './MentorComponent/Web' ;
import ApplicationDevop  from "./MentorComponent/Application";
import CompetitiveProgramming from "./MentorComponent/Cp";
import MachineLearning from "./MentorComponent/Ml";
import DeepLearning from "./MentorComponent/Dl" ;


const Mentor = (props) => {
  const {interest}=props ;
  const {Web,App,Ml,Dl,Cp}=interest ;
  console.log("Card",interest) ;
  return (
      <div>
      {(Web) && (<WebDev/>)} 
      {(Cp) && (<CompetitiveProgramming/>)} 
      {(Ml) && (<MachineLearning/>)} 
      {(Dl) && (<DeepLearning/>)} 
      {(App) && (<ApplicationDevop/>)} 
      </div>
  );
};
export default Mentor;
