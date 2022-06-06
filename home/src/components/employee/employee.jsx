import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./employee.module.css";
import CartItem from "./CartItem";
let total = 0;

function employee() {
  const [data, setData] = useState([]); // saari mongo db wali
  const [cartProducts, setCartProducts] = useState([]); // sirf hmari CART wali state
  const [subTotal, setSubTotal] = useState(); // total price ki state after discount
  const [totalAmountAfterDiscount, setTotalAfterDiscount] = useState(); // total ki state before discount
  const [discountedAmount, setDiscount] = useState(0); //  discount ki state.
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const domainURL = "http://localhost:5000";

  const discountRef = useRef(null);

  const fetchProducts = async () => {
    const response = await fetch(`${domainURL}/employee/home`);
    const prods = await response.json();

    setData(prods);
    console.log(prods);
    // createReceiptsTable(prods)
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // useEffect(()=>)
  const searchHandler = (event) => {
    console.log(event.target.value);
  };

  const itemRemoveHandler = (item) => {
    // console.log(item);
    const updatedCartItems = cartProducts.filter(
      (theObj) => theObj._id !== item._id
    );
    setCartProducts(updatedCartItems);

    // total -= item.price;
    setSubTotal(updateTotal(updatedCartItems));
    // setTotalAfterDiscount(total);
  };

  const addToCartHandler = (item) => {
    // console.log(id);`
    const allProducts = [...data];
    const productToAddInCart = allProducts.find(
      (theObj) => theObj._id === item._id
    );
    //console.log(productToAddInCart);
    productToAddInCart.qty = 1;
    // console.log(productToAddInCart);
    // following line is => finding wheather the product that user clicked on from search to add in the cart is already available in the cart not
    const idx = cartProducts.findIndex((x) => x._id === item._id);
    if (idx !== -1) {
      const tempCartProducts = [...cartProducts];
      tempCartProducts[idx] = {
        ...tempCartProducts[idx],
        qty: (tempCartProducts[idx].qty += 1),
      };
      setCartProducts(tempCartProducts);
      setSubTotal(updateTotal(tempCartProducts));
    } else {
      setCartProducts([...cartProducts, productToAddInCart]); // rest operator
      setSubTotal(updateTotal(cartProducts) + productToAddInCart.price);
    }
  };

  const discountHandler = () => {
    // console.log(discountRef.current.value);
    setDiscount(discountRef.current.value);
    setTotalAfterDiscount(
      (pichlaTotal) => pichlaTotal - discountRef.current.value
    );
  };
  const updateTotal = (arr) => {
    let total = 0;
    arr.forEach((cartProd) => {
      total += cartProd.qty * cartProd.price;
    });
    return total;
  };
  return (
    <div>
      <span className={styles.account_options}>
        <div className={styles.dropdown}>
          <button className={`${styles.dropbtn} ${styles.b_s_none}`}>
            EMP
            <i className={`${styles.fa} ${styles.fa_caret_down}`}></i>
          </button>
          <div className={styles.dropdown_content}>
            <a href="#">Settings</a>
            <a href="logout">Logout</a>
          </div>
        </div>
      </span>
      <div className={styles.container}></div>
      <div className={styles.error_notify_block}>
        <div className={styles.error_info_container}>
          <p className={styles.error_info}></p>
        </div>
      </div>
      <div className={styles.success_notify_block}>
        <div className={styles.success_info_container}>
          <p className={styles.success_info}></p>
        </div>
      </div>
      <div className={` ${styles.main} ${styles.d_flex}`}>
        <div className={styles.last_transactions_container}>
          <div className={styles.section_title_bkg}>
            <h1>Recent Orders</h1>
          </div>
          <div className={styles.section_wraper}>
            <div>
              <div className={styles.nothing}>
                <h2>Nothing to see here --- yet</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.search_area_emp}>
          <div className={styles.section_title_bkg}>
            <h1>Search Products</h1>
          </div>
          <div className={styles.section_wraper}>
            <div className={styles.search_bar_selling}>
              <span for="search-products">
                {" "}
                <i className={`${styles.fas} ${styles.fa_search}`}></i>
              </span>
              <input
                onChange={searchHandler}
                type="text"
                name="search-products"
                placeholder="Search for an item"
              />
            </div>
            <div className={`${styles.nothing} ${styles.nothing_search_item}`}>
              {/* <h1>Nothing to see here --- yet</h1>
              <h3>Search for an item</h3> */}
            </div>
            <div
              className={`${styles.scrollableDiv} ${styles.scrollableDiv600}`}
            >
              <div
                id="receipts-table-div"
                class="receipts-table scrollableDiv scrollableDiv600 tableDivBkg"
              >
                <table id="table-main-receipts">
                  <thead>
                    <tr>
                      {/* <th className="trHead">ID</th> */}
                      <th className="trHead">Name</th>
                      <th className="trHead">Price</th>
                      <th className="trHead">Stock</th>
                      <th className="trHead">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((cell) => {
                      return (
                        <tr key={cell._id}>
                          {/* <td className="trData">{idx + 1}</td> */}
                          <td className="trData">{cell.name}</td>
                          <td className="trData">{cell.price}</td>
                          <td className="trData">{cell.stock}</td>
                          <td className="trData">
                            <button
                              className="productListEdit"
                              onClick={() => addToCartHandler(cell)}
                            >
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.current_order_box}>
          <div className={styles.section_title_bkg}>
            <h1>Current Order</h1>
          </div>
          <div className={styles.section_wraper}>
            <div className={styles.select_wrap}>
              <div
                className={`${styles.select_customer_div} ${styles.d_flex_sp}`}
              >
                <label for="select-customer">Select Customer:</label>
                <select name="select-customer" className={styles.select_input}>
                  <option>None</option>
                </select>
              </div>
            </div>
            {cartProducts.length === 0 ? (
              <div className={`${styles.nothing} ${styles.nothing_cart_item}`}>
                <h1>No Items in Order</h1>
                <h3>Search and Add to order </h3>
              </div>
            ) : (
              <div className={styles.scrollableDiv}>
                <table id="current-order-box-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Price</th>

                      <th>Qty</th>
                      <th>Total</th>
                      <th>remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((cartItem, idx) => (
                      <CartItem
                        key={cartItem._id + idx}
                        data={cartItem}
                        idx={idx}
                        itemRemoveHandler={itemRemoveHandler}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <br></br>

            <div className={styles.calculationDivs}>
              <div className={`${styles.subtotal_div}`}>
                <h2>Subtotal:</h2>
                <p className={styles.to_right}>{subTotal} Rs.</p>
              </div>
              <div className={`${styles.add_discount_div} ${styles.d_flex_sp}`}>
                <label htmlFor="add-discount">Add Discount</label>
                <div className={`${styles.discount_input} ${styles.to_right}`}>
                  <input
                    type="number"
                    ref={discountRef}
                    onChange={discountHandler}
                    name="add-discount"
                    min="0"
                    value={discountedAmount}
                  />
                  <span>Rs. </span>
                </div>
              </div>
              <div className={`${styles.total_div} ${styles.d_flex_sp}`}>
                <h1>Total bill:</h1>
                <h2 className={styles.to_right}>
                  {subTotal - discountedAmount} Rs
                </h2>
              </div>
              <div
                className={`${styles.status_of_payment_div} ${styles.d_flex_sp}`}
              >
                <button
                  onclick="paidORunpaid(event)"
                  className={`${styles.btn} ${styles.order_status_btn}`}
                >
                  Change Pay Status
                </button>
                <div className={styles.paid_status_text}>
                  <h2>Paid</h2>
                </div>
              </div>
            </div>
            <br></br>
            <Link to={`/employee/printreceipt`}>
              <button  className={`${styles.save_btn} ${styles.btn}`}>
                Save & Print Receipt
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default employee;
