import React from "react";
import { Card } from "reactstrap";

const DishDetail = (props) => {
  const dish = props.dish;
  console.log(dish);

  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <h1>Comments</h1>
        {dish.comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.comment}</p>
            <p>{`${comment.author}, ${new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}`}</p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default DishDetail;
