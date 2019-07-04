import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./const/routes";

function App() {
  return (
    <Router>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));