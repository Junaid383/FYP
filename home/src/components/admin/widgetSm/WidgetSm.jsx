import "./widgetSm.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function WidgetSm() {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`/admin/orderData`);
    const order = await response.json();

    setData(order);
    console.log(order);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Recent Orders</span>
      <ul className="widgetSmList">
        {data.map((cell, idx) => {
          return (
            <li className="widgetSmListItem">
              {/* <img src="https://blogs-images.forbes.com/danschawbel/files/2017/12/Dan-Schawbel_avatar_1512422077-400x400.jpg" alt="" className="widgetSmImg" /> */}
              <div className="widgetSmUser">
                <span className="widgetSmUsername">
                  Order ID: {cell.orderID}
                </span>
                <span className="widgetSmUserTitle">
                  Customer ID: {cell.custmerID}
                </span>
              </div>
              <Link to={`/admin/viewreceipt/${cell._id}`}>
                <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
                </button>
                </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
