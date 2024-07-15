import React from "react";
import Index from "../Dashboard/Index";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Dashboard = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <Index />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
