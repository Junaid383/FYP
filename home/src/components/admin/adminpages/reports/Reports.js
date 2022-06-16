import "./reports.css";
import React from "react";
import C1 from "./cht1";

function Reports() {
  return (
    <div className="reports">
      
      <div class="alert-message" id="page-alert">
        <div class="success" id="page-alert-success"></div>
        <div class="error" id="page-alert-error"></div>
      </div>
      <div class="section-title d-flex-sp">
        <h1>Reports</h1>
        <div class="section-controls">
          <button id="reports-today" class="btn btn-reports">
            Today
          </button>
          <button id="reports-yesterday" class="btn btn-reports">
            Yesterday
          </button>
          <button id="reports-month" class="btn btn-reports">
            Last Month
          </button>
          <button id="reports-all" class="btn btn-reports">
            All Time
          </button>
          {/* <input type="date" name="reports-date" id="reports-date"></input> */}
        </div>
      </div>
      {/* <div id='the-graphs' class="my-graphs d-flex">
                    </div>

                    <div class="products-sold-title d-flex-sp">
                        <h2>Products Sold </h2>
                      <button class='btn btn-reports'>Export Data</button>
                    </div>
                    <div id="products-sold-div" class='products-sold scrollableDiv scrollableDiv600 tableDivBkg'>
                    </div> */}
    </div>
  );
}

export default Reports;
