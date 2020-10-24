import ShoppingCart from "./component/ShoppingCart";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutConfirmation from "./component/CheckoutConfirmation";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <ShoppingCart />
          </Route>
          <Route path={"/checkoutSuccess"}>
            <CheckoutConfirmation />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
