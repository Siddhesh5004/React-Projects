import React from 'react';
import './Main.css';
import { assets } from '../../../assets';

const Main = () => {
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, User</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="compass icon" />
          </div>
          <div className="card">
            <p>Briefly Summarize this concept : urban planning</p>
            <img src={assets.bulb_icon} alt="bulb icon" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="message icon" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="code icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
import './Main.css';
export default Main;
