import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";

const Main = () => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishId) => {
    console.log(dishId);
    setSelectedDish(dishId);
  };

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <div className="container">
      <Menu dishes={DISHES} onClick={(dishId) => onDishSelect(dishId)} />
      <DishDetail dish={DISHES.filter((dish) => dish.id === selectedDish)[0]} />
      </div>
    </div>
  );
};

export default Main;
