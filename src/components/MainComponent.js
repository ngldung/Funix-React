import React, { useState } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Main = () => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishId) => {
    console.log(dishId);
    setSelectedDish(dishId);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Menu dishes={DISHES} onClick={(dishId) => onDishSelect(dishId)} />
        <DishDetail
          dish={DISHES.filter((dish) => dish.id === selectedDish)[0]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
