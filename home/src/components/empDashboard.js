import React from "react";

// import Topbar from "./emp/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
