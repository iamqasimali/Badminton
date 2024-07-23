import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import EventDetail from "./EventDetail";
import Hero from "./Hero";

const Index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <EventDetail />
      <Footer />
    </div>
  );
};

export default Index;
