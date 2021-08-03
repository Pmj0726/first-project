import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return (
    <body>
      <div >
        <div className='App'>
          Senior-Junior Interaction App
        </div>
        <div className='welcome'>
          {"Hey Buddy :)"}
        </div>
        <div className="welcomePage">
          <div className='name_input'>
            <label for='enter-your-name' className='name_label'>Enter Your Name</label>
            <input type='text' class="input_name" placeholder='Ex: jitendra meena' required></input>
          </div>
          <div className='branch'>
            <label for='enter-your-branch' className='name_label'>Enter Your Branch</label>
            <input type='text' class="input_name" placeholder='Ex: Electrical Engineering' required></input>
          </div>
          <div className='rollno'>
            <label for='enter-your-roll-number' className='name_label'>Enter Your Roll Number</label>
            <input type='number' class="input_name" placeholder='Ex: 18085052' required></input>
          </div>
          <div className='wa_number'>
            <label for='enter-your-wa-number' className='name_label'>Enter Your Whatsapp Number</label>
            <input type='number' class="input_name" placeholder='Ex: 0123456789' required></input>
          </div>
          <div className='user_interest' placeholder='Ex: Web Development'>
            <label for='enter-your-interest' className='name_label'>Area Of Interest</label>
          </div>
          <button type='submit' className='submit' onClick={() => setCount(count + 1)}>
            <span className='button_data'>{count}</span>
          </button>
        </div>
      </div>
    </body >
  );
}

export default App;
