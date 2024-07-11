import React from "react";
import { Link } from 'react-router-dom'; 

const Index = () => {

  return (
    <>
    <div>
    <h1>Hello </h1>
      
      <Link to="/welcome" className="text-center text-4xl font-black" >
        Welcome
      </Link>
    </div>
      
    </>
  );
};

export default Index;
