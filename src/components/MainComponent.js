import React, { useState } from "react";
import Menu from "./MenuComponent";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import Home from "./HomeComponet";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotion";
import { LEADERS } from "../shared/leaders";

const Main = () => {

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/home">
            <Home
              dish={DISHES.filter((dish) => dish.featured)[0]}
              leader={LEADERS.filter((leader) => leader.featured)[0]}
              promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
            />
          </Route>
          <Route path="/menu">
            <Menu dishes={DISHES} />
          </Route>
          <Route path="/contactus">
            <Contact />
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
