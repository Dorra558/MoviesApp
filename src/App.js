import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";



function App() {


  return (
    <div className="App">

    <BrowserRouter>
      
    <Switch>
      <Route path="/admin"> <AdminLayout/> </Route>
      <Redirect from="/" to="/admin/dashboard" />
      
    </Switch>
   
    </BrowserRouter>

    </div>
  );
}

export default App
