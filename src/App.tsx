import React from "react";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
    return (
      <div className="flex mt-[80px]">
        <Outlet />
      </div>
    );
  };

export default App;
