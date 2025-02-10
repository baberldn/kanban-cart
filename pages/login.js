"use client";
import React from "react";
import Sidebar from "./siderbar";
import Boards from "./boards";


const Home = () => {
  return (
  
    <div className="flex">
      <Sidebar />
      <Boards />
    </div>

  );
};

export default Home;
