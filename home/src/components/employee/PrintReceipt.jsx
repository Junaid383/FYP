import React , { useEffect } from "react";
import { useState } from "react";

import "./PrintReceipt.css"
const PrintReceipt = () => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`/printreceipt`);
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





  function printReceipt(e) {
    // document.getElementById("prnt-btn").style.display = "none";
    window.print();
    // document.getElementById("prnt-btn").style.display = "block";
    // window.close();
  }
  return (
    <div>
      <div className="print_main-page">
        <div className="print_header">
          <div className="print_shop-title">
            <h1>BITF18-Morning Traders</h1>
            <p className="print_description">
             Punjab University of Information Technology-Lahore
            </p>
          </div>
          <div className="print_order-id">
            <h1>Order Id # 9999</h1>
          </div>
        </div>
      </div>
      <div className="print_info-card">
        <div className="print_info-data">
          <table>
            <tr>
              <th>Customer-Id:</th>
              <td>9999</td>
            </tr>
            <tr>
              <th>Sold by: </th>
              <td>{data.loggedInUserName}</td>
            </tr>
            <tr>
              <th>Date Time: </th>
              <td>06-06-2022 13:01</td>
            </tr>
            <tr>
              <th>Status: </th>

              <td className="print_status print_paid">Paid</td>

              {/* <td className="print_status print_unpaid"></td> */}
            </tr>
          </table>
        </div>
        <div className="print_prnt-btn-div">
          <button onClick={printReceipt}>
            <i className="print_fas print_fa-print"></i> Print Receipt
          </button>{" "}
        </div>
      </div>

      <div className="print_product-details">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="print_t-left print_w-70">Water 500ML</td>
              <td> Rs. 999999</td>
              <td>9999</td>
              <td> Rs. 999999</td>
            </tr>

            <table>
              <tr>
                <th className="print_w-70 print_t-right">Sub Total:</th>
                <td className="print_w-30">Rs. {data.subTotal}</td>
              </tr>
              <tr>
                <th className="print_w-70 print_t-right">Discount:</th>
                <td> Rs. {data.discountedAmount}</td>
              </tr>
              <tr>
                <th className="print_w-70 print_t-right">Total:</th>
                <td> Rupees {data.total}</td>
              </tr>
            </table>
          </tbody>
        </table>
      </div>
      <div className="print_thankyou-message">
        <h3>Shukriya!</h3>
      </div>
      <h1>Message</h1>
    </div>
  );
};
export default PrintReceipt;
