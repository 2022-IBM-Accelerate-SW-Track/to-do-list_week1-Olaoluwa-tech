import React, { Component } from 'react';
import "./About.css";
import <profile_pic_name> from ;"../assets/profile_pic_name.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>Olaoluwa Olalumade</p> 
        <div class="split left">
          <div className="centered">
            <img 
              className="Olalumade Olaoluwa-IBM Accelerate Headshot"
              // Image goes here
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="Olaoluwa Olalumade">Your Name</div>
            <div className="I am from Houston,Texas. I love sports and any physical activity.  ">
              // Details about you goes here
            </div>
          </div>
        </div>
      </div>
    )
  }
}