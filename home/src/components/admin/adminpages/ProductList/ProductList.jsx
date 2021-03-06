import "./productList.css";
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import ConfirmDelete from "../../Modals/ConfirmDelete";

import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState({ status: false, id: null });

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

  const searchHandler = async (event) => {
    const response = await fetch(`/admin/products`);
    const getData = await response.json();

    // console.log(getData);
    // console.log(event.target.value);
    const keyword = event.target.value;
    console.log(keyword);

    if (keyword !== "") {
      const results = getData.filter((user) => {
        let userPrice = String(user.price);
        if (
          user.name.toLowerCase().includes(keyword.toLowerCase()) ||
          user.category.toLowerCase().includes(keyword.toLowerCase()) ||
          userPrice.includes(keyword) ||
          user._id.toLowerCase().includes(keyword.toLowerCase())
        ) {
          return user;
        }
      });
      // console.log(results);
      setData(results);
    } else {
      setData(getData);
    }
    setName(keyword);
  };


  // =================DELete Product===================
  const updateProductsTable = (id) => {
    const updatedArray = data.filter((obj) => obj._id !== id);
    setData(updatedArray);
  };

  const delProd = async (id) => {
    const res = await fetch("/admin/product/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    if (res.ok) {
      const deletedPROD = await res.json();
      // console.log(deletedEmp.emp._id)
      updateProductsTable(deletedPROD.emp._id);
    }
  };

  return (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <input
          onChange={searchHandler}
          type="text"
          name="search-products"
          placeholder="Search for an item"
        />
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
              <th className="trHead">Orignal Cost</th>

              <th className="trHead">Stock</th>
              <th className="trHead">Unit</th>
              <th className="trHead">Category</th>

              <th className="trHead">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cell, idx) => {
              return (
                <tr key={cell._id}>
                  <td className="trData">{idx + 1}</td>
                  <td className="trData">{cell.name}</td>
                  <td className="trData">
                    {cell.price.toLocaleString("hi-IN")}
                  </td>
                  <td className="trData">{cell.cost}</td>

                  <td className="trData">{cell.stock}</td>
                  <td className="trData">{cell.unit}</td>
                  <td className="trData">{cell.category}</td>

                  <td className="trData">
                    <Link to={`/admin/product/${cell._id}`}>
                      <button className="productListEdit">Edit</button>
                    </Link>

                    {/* <button
                      onClick={()=> delProd(cell._id)} 
                      className="delButtonUser"
                    >
                      <DeleteOutline className="productListDelete" />
                    </button> */}

                    <button
                      onClick={() =>
                        setShowModal({ status: true, id: cell._id })
                      }
                      className="delButtonUser"
                    >
                      <DeleteOutline className="productListDelete" />
                    </button>
                  </td>
                </tr>
              );
            })}{" "}
            {showModal.status ? (
              <ConfirmDelete
                close={() => setShowModal({ status: false, id: null })}
                onConfirm={() => delProd(showModal.id)}
              />
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
