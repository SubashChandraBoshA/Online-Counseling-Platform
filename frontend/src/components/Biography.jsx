import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          {/* <img src={imageUrl} alt="whoweare" /> */}
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          I am developing this website for counseling appointments for my MERN STACK final project.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
