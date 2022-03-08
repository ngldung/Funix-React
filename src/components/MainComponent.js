import React from "react";
import Menu from "./MenuComponent";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import Home from "./HomeComponet";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import { useSelector } from "react-redux";
import About from "./AboutComponent";

const Main = () => {
const dishes = useSelector(state => state.dishes);
const promotions = useSelector(state => state.promotions);
const comments = useSelector(state => state.comments);
const leaders = useSelector(state => state.leaders);

  const HomePage = () => {
    return(
        <Home 
            dish={dishes.filter((dish) => dish.featured)[0]}
            promotion={promotions.filter((promo) => promo.featured)[0]}
            leader={leaders.filter((leader) => leader.featured)[0]}
        />
    );
  }

  const DishWithId = ({match}) => {
    return(
        <DishDetail dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
  };

  return (
    <div>
        <Header />
        <div>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/aboutus' component={() => <About leaders={leaders} />} />
              <Route exact path='/menu' component={() => <Menu dishes={dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact} />
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
  );
};

export default Main;
