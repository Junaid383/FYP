import "./userList.css";
import React, { useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const domainURL = "http://localhost:5000";
  const fetchProducts = async () => {
    const response = await fetch(`${domainURL}/admin/users`);
    const prods = await response.json();

    setData(prods);
    // createReceiptsTable(prods)
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  var newTable;
  function createReceiptsTable(arraysOfArrays) {
    var t_cols = 8;
    let tableElement = document.createElement("tablee");
    tableElement.id = "table-main-receipts";

    document.getElementById("receipts-table-div").appendChild(tableElement);
    var row;
    newTable = document.getElementById("table-main-receipts");
    //Inserting New Row
    for (let i = 0; i < arraysOfArrays.length; i++) {
      row = newTable.insertRow();
      for (let j = 0; j < t_cols; j++) row.insertCell();
    }
    //creating table head
    var tablehead = newTable.createTHead();
    // tablehead.classList.add("sticky");
    row = tablehead.insertRow();
    let ths = [
      "Order Id",
      "Datetime",
      "Amount",
      "Sold by",
      "Sold to",
      "Status",
      "Action",
      "Manage",
    ];
    for (let i = 0; i < t_cols; i++) row.append(document.createElement("th"));
    for (let i = 0; i < t_cols; i++)
      tablehead.rows[0].cells[i].innerHTML = ths[i];

    var dataTable;
    //populating the table
  }


//==================== Handling Update FUnction ==============================




  















  return (
    <div className="userList">
      <div className="userTitleContainer">
        <h1 className="userTitle"> Employee List</h1>
        <Link to="/admin/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div
        id="receipts-table-div"
        class="receipts-table scrollableDiv scrollableDiv600 tableDivBkg"
      >
        <table id="table-main-receipts">
          <thead>
            <tr>
              <th className="trHead">ID</th>
              <th className="trHead">Name</th>
              <th className="trHead">EMAIL</th>
              <th className="trHead">PHONE</th>
              <th className="trHead">ADDRESS</th>
              <th className="trHead">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cell, idx) => {
              return (
                <tr key={cell._id}>
                  <td className="trData">{idx + 1}</td>
                  <td className="trData">{cell.name}</td>
                  <td className="trData">{cell.email}</td>
                  <td className="trData">{cell.phone}</td>
                  <td className="trData">{cell.address}</td>

                  <td className="trData">
                    <Link to={`/admin/user/${cell._id}`}>
                      <button  className="productListEdit">
                        Edit
                      </button>
                      {/*  onClick={PostData} */}
                    </Link>
                    <DeleteOutline className="productListDelete" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
