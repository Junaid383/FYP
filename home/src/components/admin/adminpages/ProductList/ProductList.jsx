import "./productList.css";
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ProductList() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const domainURL = "http://localhost:5000";
  const fetchProducts = async () => {
    const response = await fetch(`${domainURL}/admin/products`);
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

  // var data = [];
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

  return (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/admin/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      {
        // data.map(cell => {
        //   return (
        //     <ul>
        //       <li>{cell._id}</li>
        //     </ul>
        //   )
        // })
      }
      <div
        id="receipts-table-div"
        class="receipts-table scrollableDiv scrollableDiv600 tableDivBkg"
      >
        <table id="table-main-receipts">
          <thead>
            <tr>
              <th className="trHead">ID</th>
              <th className="trHead">Name</th>
              <th className="trHead">Price</th>
              <th className="trHead">Stock</th>
              <th className="trHead">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cell, idx) => {
              return (
                <tr key={cell._id}>
                  <td className="trData">{idx + 1}</td>
                  <td className="trData">{cell.name}</td>
                  <td className="trData">{cell.price}</td>
                  <td className="trData">{cell.stock}</td>
                  <td className="trData">
                    <Link to={`/admin/product/${cell._id}`}>
                      <button className="productListEdit">Edit</button>
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
