import Footer from "./Components/Footer";
import PointsToNextLevel from "./Components/pointsToNextLevel";
import TopHeaderBar from "./Components/TopHeaderBar/";

import React from "react";

export default function AdminApp() {
  console.log("App is rendering");
  return (
    <>
      <TopHeaderBar />
      <PointsToNextLevel />
      <Footer />
    </>
  );
}
