import React, { useState } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import Home from "./HomeComponet";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {



  return (
    <div>
      <Header />
      <div className="container">
    <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/menu">
        <Menu dishes={DISHES} />
        </Route>
        <Route path="/*">
        <Redirect to="/home" />
        </Route>
    </Switch>



      </div>
      <Footer />
    </div>
  );
};

export default Main;
