import React from "react";
import ReactDOM from "react-dom";

import App from "src/components/App";

// redux & saga & router
import { Provider } from "react-redux";
import createNewStore from "./redux/createNewStore";
import { BrowserRouter, Route } from "react-router-dom";

// create store
const store = createNewStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
