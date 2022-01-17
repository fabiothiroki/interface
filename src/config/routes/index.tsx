import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default RoutesComponent;
