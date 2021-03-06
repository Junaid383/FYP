import React from "react";

// import Topbar from "./emp/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Employee from "./employee/employee";
import PrintReceipt from "./employee/PrintReceipt";
import Viewrecepits from "./admin/adminpages/recipts/Viewrecepit";
import EmpSetting from "./employee/EmpSettings"

function empDashboard() {
  return (
    <Router>
      <Switch>
        <Route path="/employee/:empID" exact>
          <Employee />
        </Route>

        <Route path="/printreceipt/:orderID">
          <PrintReceipt />
        </Route>

        <Route path="/viewreceipt/:ID">
          <Viewrecepits />
        </Route>

        <Route path="/employee/setting/:id">
          <EmpSetting />
        </Route>
      
      </Switch>
    </Router>
  );
}

export default empDashboard;
