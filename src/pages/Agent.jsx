import React, { useEffect, useRef } from "react";
import AgentsList from "../components/Layout/AgentsList";
import Footer from "../components/Layout/Footer";

const Agent = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className=" bg-silver pt-20" ref={divRef}>
      <AgentsList />
      <Footer />
    </div>
  );
};

export default Agent;
