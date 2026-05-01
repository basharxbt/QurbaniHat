import React from "react";
import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <HashLoader color="#c9a420" />
    </div>
  );
};

export default loading;
