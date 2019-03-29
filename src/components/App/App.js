import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";
import Home from "src/components/Home";
import Navigation from "src/components/Navigation";
import Wishlist from "src/components/Wishlist";

// Component를 Key값으로 먼저 보여줄 순서를 설정한다. 1 = Navigation 2 = Main Component 3 = Footer
const App = props => [<Navigation key={1} />, <PrviateRoutes key={2} />];

const PrviateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/wishlist" component={Wishlist} />
  </Switch>
);
export default App;
