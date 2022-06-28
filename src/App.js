import "./App.css";
import React from "react";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./components/Upload/Upload";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
