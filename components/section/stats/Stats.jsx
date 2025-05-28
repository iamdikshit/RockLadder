import React from "react";
import Matrices from "./Matrices";
const Stats = () => {
  return (
    <div className="Stats section section-container   my-8">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center">
        <Matrices title={"100+"} description={"clients served"} />
        <Matrices title={"50+"} description={"projects completed"} />
        <Matrices title={"24/7"} description={"support available"} />
      </div>
    </div>
  );
};

export default Stats;
