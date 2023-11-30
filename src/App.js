import CurrentLocation from "./components/currentLocation";
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Error from "./components/errorPage";

function App() {
  return (
    <>
      {/* <div className="container">{<CurrentLocation />}</div> */}
      <Routes>
        <Route index path="/" element={<CurrentLocation />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
