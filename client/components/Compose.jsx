import React, { Component } from 'react';

const Compose = (props) => (
  <div className="Section3-compose-review">
    <div className="user-wrapper"><img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1f2e356daa5c/writeareview/empty_profile.png"></img></div>
    <div className="review-wrapper">
      <div className="island">
        <div className="star-choose">
          <div className="i-stars--large-0 i-stars"></div>
        </div>
        <div className="start-review">
          <a>Start your review of {props.bizName}</a>
        </div>
      </div>
    </div>
  </div>
);

export default Compose;