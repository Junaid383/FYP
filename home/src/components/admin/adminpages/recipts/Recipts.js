import "./recipts.css";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import ConfirmDelete from "../../Modals/ConfirmDelete";

import { useState } from "react";

function Recipts() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [showModal,setShowModal]=useState(false);


 

  const domainURL = "http://localhost:5000";
  const fetchProducts = async () => {
    const response = await fetch(`${domainURL}/admin/recepits`);
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

  const searchHandler = async (event) => {
    const response = await fetch(`/admin/recepits`);
    const getData = await response.json();

    // console.log(getData);
    // console.log(event.target.value);
    const keyword = event.target.value;
    console.log(keyword);

    if (keyword !== "") {
      const results = getData.filter((user) => {
        return String(user.orderID).includes(String(keyword));
      });
      console.log("Filtered Data");
      console.log(results);
      setData(results);
    } else {
      setData(getData);
    }

    setName(keyword);
  };
  const updateProductsTable =(id)=>{
    const updatedArray = data.filter(obj=>obj._id!==id)
    setData(updatedArray)
  }

  const delUser =async (id)=>{
    const res = await fetch("/admin/recepit/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       id
      }),
    });
    if(res.ok){
    const deletedEmp = await res.json();
    // console.log(deletedEmp.emp._id)
    updateProductsTable(deletedEmp.emp._id)
    }
    }

  return (
    <div className="recipts">
      <div className="widgetLgg">
        <h3 className="widgetLgggTitle">Recipts</h3>
        <input
          onChange={searchHandler}
          type="text"
          name="search-products"
          placeholder="Search for an item"
        />
        <div
          id="receipts-table-div"
          class="receipts-table scrollableDiv scrollableDiv600 tableDivBkg"
        >
          <table className="widgetLggTable" id="table-main-receipts">
            <thead>
              <tr className="">
                <th className="widgetLggTh">Order ID</th>

                <th className="widgetLggTh">Employee</th>
                <th className="widgetLggTh">Date</th>
                <th className="widgetLggTh">Time</th>

                <th className="widgetLggTh">Amount</th>
                <th className="widgetLggTh">Status</th>
              </tr>
            </thead>

            <tbody>
              {data.map((cell, idx) => {
                return (
                  <tr className="widgetLggTr" key={cell._id}>
                    <td className="widgetLggTr">{cell.orderID}</td>
                    <td className="widgetLggUser">
                      <img
                        src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                        alt=""
                        className="widgetLggImg"
                      />
                      <span className="widgetLggName">
                        {cell.loggedInUserName}
                      </span>
                    </td>
                    <td className="widgetLggDate">{cell.completeData}</td>
                    <td className="widgetLggDate">{cell.completeTime}</td>

                    <td className="widgetLggAmount">Rs. {cell.total} </td>
                    <td className="widgetLggStatus">
                      <Link to={`/admin/viewreceipt/${cell._id}`}>
                        {/* <Button type="Approved" /> */}
                        <button className="reciptView">View</button>
                      </Link>

                      {/* <button onClick={()=> delUser(cell._id)} className="delButtonUser">
                      <DeleteOutline className="productListDelete" />
                    </button> */}

                    
                    <button onClick={()=>setShowModal(true)} className="delButtonUser">
                      <DeleteOutline className="productListDelete" />
                    </button>
                    {showModal?<ConfirmDelete close={()=>setShowModal(false)} onConfirm={()=>delUser(cell._id)}/>:null}



                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* </table> */}
      </div>
    </div>
  );
}

export default Recipts;
