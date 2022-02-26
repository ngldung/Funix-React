import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishDetailComponent";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const Menu = (props) => {
const [selectedDish, setSelectedDish] = useState(null);
const selectDishHandler = (dishId) => {
    setSelectedDish(dishId)
}

  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={() => selectDishHandler(dish.id)} />
      </div>
    );
  });

  return (
    <div>
      <div className="row">{menu}</div>
      <DishDetail dish={props.dishes.filter((dish) => dish.id === selectedDish)[0]} />
    </div>
  );
};

export default Menu;
