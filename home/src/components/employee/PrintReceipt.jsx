import React from "react";
import "./PrintReceipt.css"
const PrintReceipt = () => {
  
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
            <h1>Ahmed Traders</h1>
            <p className="print_description">
              Satellite Town Block A Satellite Town, Naya Shehar Chakwal Punjab
              38000
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
              <td>Ali Asad</td>
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
                <td className="print_w-30"> Rs. 999999</td>
              </tr>
              <tr>
                <th className="print_w-70 print_t-right">Discount:</th>
                <td> Rs. 000000</td>
              </tr>
              <tr>
                <th className="print_w-70 print_t-right">Total:</th>
                <td> Rupees 999999</td>
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
