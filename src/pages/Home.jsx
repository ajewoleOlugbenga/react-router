import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>This is my Home Page.</div>
      <p>
        Go to the 
        <Link to="/products"> product page</Link>
      </p>
    </>
  );
};

export default Home;
