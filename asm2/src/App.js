import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Department from "./pages/Department";
import Salary from "./pages/Salary";
import StaffDetail from "./pages/StaffDetail";
import StaffList from "./pages/StaffList";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/staffs" />
        </Route>
        <Route path="/staffs" exact>
          <StaffList />
        </Route>
        <Route path="/staffs/:staffId">
          <StaffDetail />
        </Route>
        <Route path="/dept">
          <Department />
        </Route>
        <Route path="/salary">
          <Salary />
        </Route>
           <Route path="*">
          <h1>Page Not Found!!!!!</h1>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
