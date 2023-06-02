import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Ads from "./components/Ads";
function MyApp() {
  return (
    <div>
      <Header></Header>
      <Categories></Categories>
      <Ads></Ads>
    </div>
  );
}
export default MyApp;
