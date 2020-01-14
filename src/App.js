import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" component={Footer} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
