import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { v4 } from "uuid";
//
import "./App.css";
//
import TextEditor from "./TextEditor";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/doc/${v4()}`} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/doc/:id">
          <TextEditor />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
