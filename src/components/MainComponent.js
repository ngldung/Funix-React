import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";

const Main = () => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    console.log(dish);
    setSelectedDish(dish);
  };

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu
        dishes={DISHES}
        onClick={(dishId) => onDishSelect(dishId)}
        selectedDish={selectedDish}
      />
    </div>
  );
};

export default Main;
