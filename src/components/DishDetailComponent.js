import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const renderDish = (dish) => {
  if (dish != null)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
};

const DishDetail = (props) => {
  const dish = props.dish;
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">{renderDish(dish)}</div>

      {dish && (<div className="col-12 col-md-5 m-1">
        <Card>
          <h1>Comments</h1>
          {dish.comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <p>{`${comment.author}, ${comment.date}`}</p>
            </div>
          ))}
        </Card>
      </div>)}
    </div>
  );
};

export default DishDetail;
