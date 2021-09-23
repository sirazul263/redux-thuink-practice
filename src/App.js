import React from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <ProductListing></ProductListing>
        </Route>
        <Route path="/product/:productId">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path="/*">404 Not Found</Route>
      </Switch>
    </div>
  );
};

export default App;
