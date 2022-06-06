import React from "react";

const PrintReceipt = () => {
  return (
    <>
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
            <h1>Order Id # </h1>
          </div>
        </div>
      </div>
      <div className="print_info-card">
        <div className="print_info-data">
          <table>
            <tr>
              <th>Customer-Id: </th>
              <td></td>
            </tr>
            <tr>
              <th>Sold by: </th>
              <td></td>
            </tr>
            <tr>
              <th>Date Time: </th>
              <td></td>
            </tr>
            <tr>
              <th>Status: </th>

              <td className="print_status print_paid"></td>

              <td className="print_status print_unpaid"></td>
            </tr>
          </table>
        </div>
        <div className="print_prnt-btn-div">
          <button id="prnt-btn">
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
              <td className="print_t-left print_w-70"></td>
              <td> Rs.</td>
              <td></td>
              <td> Rs.</td>
            </tr>

            <table>
              <tr>
                <th className="print_w-70 print_t-right">Sub Total:</th>
                <td className="print_w-30"> Rs.</td>
              </tr>
              <tr>
                <th className="print_w-70 print_t-right">Discount:</th>
                <td> Rs.</td>
              </tr>
              <tr>
                <th className="print_w-70 print_t-right">Total:</th>
                <td> Rupees</td>
              </tr>
            </table>
          </tbody>
        </table>
      </div>
      <div className="print_thankyou-message">
        <h3>Shukriya!</h3>
      </div>
    </>
  );
};
export default PrintReceipt;
