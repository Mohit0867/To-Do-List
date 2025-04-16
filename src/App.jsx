import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <div className="page-wrapper">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};
export default App;
