import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishDetail';

const Menu = props => {
    const [selectDish, setSelectDish] = useState(null);

    const onDishSelectHandler = (dish) => {
        setSelectDish(dish);
    }

    const menu = props.dishes.map((dish) => {
        return (
          <div  className="col-12 col-md-5 m-1">
            <Card key={dish.id} onClick={() => {onDishSelectHandler(dish)}}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <DishDetail dish={selectDish}/>
        </div>
    );
    
}


export default Menu;