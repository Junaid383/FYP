import React , { useEffect } from "react";
import { useState } from "react";


import "./widgetLg.css"

export default function WidgetLg() {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`/admin/receiptData`);
    const prods = await response.json();

    setData(prods);
    console.log(prods);
    // createReceiptsTable(prods)
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);







  const Button = ({ type }) => {
    return (
      <button className={"widgetLgButton " + type}> {type}</button>
    )
  }

  return <div className="widgetLg">
    <h3 className="widgetLgTitle">Latest Transactions</h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">Employee</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">Amount</th>
        <th className="widgetLgTh">Status</th>
      </tr>

     {data.map((cell, idx) => {
       return(
      <tr className="widgetLgTr" key={cell._id}>
        <td className="widgetLgUser">
          <img src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png" alt="" className="widgetLgImg" />
          <span className="widgetLgName">{cell.loggedInUserName}</span>
        </td>
        <td className="widgetLgDate">{cell.completeData}</td>
        <td className="widgetLgAmount">Rs.{(cell.total).toLocaleString("hi-IN")}</td>
        {/* <td className="widgetLgStatus"><Button type="Approved" /></td> */}
        <td className="widgetLgStatus"> {cell.status}</td>



      </tr>
     )}
     )}

    

      
    </table>
  </div>;
}