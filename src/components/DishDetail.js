import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


const DishDetail = (props) => {
 const dish = props.dish;
        if (dish != null)
            return(
                <div className='row'>
                    <div  className="col-12 col-md-5 m-1">
                    <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {dish.comments.map(item => (
                            <div key={item.id}>
                            <p>{item.comment}</p>
                            <p>-- {item.author}, {item.date}</p>
                            </div>                            
                            ))}                
                    </div>
                </div>

            );
        else
            return(
                <div></div>
            );
    

}

export default DishDetail;