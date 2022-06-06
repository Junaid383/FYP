import Sidebar from "./emp/sidebar/Sidebar";
import React from "react";

// import Topbar from "./emp/topbar/Topbar";
import Home from "./emp/emppages/emphome/EmpHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserList from "./emp/emppages/userList/UserList";
import User from "./emp/emppages/user/User";
import NewUser from "./emp/emppages/newUser/newUser";
import ProductList from "./emp/emppages/ProductList/ProductList";
import Product from "./emp/emppages/Product/Product";
import NewProduct from "./emp/emppages/newProduct/NewProduct";
import Employee from "./employee/employee";
import PrintReceipt from "./employee/PrintReceipt"


function empDashboard() {
  return (
    <Router>
      <Switch>
       
     
        <Route path="/employee" exact>
          <Employee />
        </Route>

        <Route path="/employee/printreceipt">
          <PrintReceipt />
        </Route>
     
     
     
      </Switch>
    </Router>
  );
}

export default empDashboard;
