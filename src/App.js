import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';



function App() {
  const dishes = DISHES;
  return (
    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={dishes}/>
      </div>
  );
}

export default App;
