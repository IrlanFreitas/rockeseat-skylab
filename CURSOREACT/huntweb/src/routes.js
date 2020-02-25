import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";

const Routes = () => (
  <BrowserRouter>
    {/* Define a utilização de rotas através do Browser */}
    <Switch>
      {/* Indicar que uma única rota seja chamada ao mesmo tempo */}
      <Route path="/" component={Main} exact />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes
