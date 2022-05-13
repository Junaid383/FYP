import React from 'react'
import styles from "./employee.module.css";

function employee() {
    return (
        
        <div>

            <span className={styles.account_options}>
                <div className={styles.dropdown}>
                    <button className={`${styles.dropbtn} ${styles.b_s_none}`}>Emp
                        <i className={`${styles.fa} ${styles.fa_caret_down}`} ></i>
                    </button>
                    <div className={styles.dropdown_content}>
                        <a href="#">Settings</a>
                        <a href="logout" >Logout</a>
                    </div>
                </div>

            </span>
            <div className={styles.container}>
            </div>
            <div  className={styles.error_notify_block}>
                <div  className={styles.error_info_container}>
                    <p  className={styles.error_info}></p>
                </div>
            </div>
            <div className={styles.success_notify_block}>
                <div  className={styles.success_info_container}>
                    <p  className={styles.success_info}></p>
                </div>
            </div>
            <div className={`${styles.main} ${styles.d_flex}`}>
                <div className={styles.last_receipts_container}>
                    <div className={styles.section_title_bkg}>
                        <h1>Recent Orders</h1>
                    </div>
                    <div className={styles.section_wraper}>

                        <div >
                            <div className={styles.nothing}>
                                <h2>Nothing to see here --- yet</h2>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.search_area_emp} >
                    <div className={styles.section_title_bkg}>
                        <h1>Search Products</h1>
                    </div>
                    <div className={styles.section_wraper}>

                        <div className={styles.search_bar_selling}>
                            <span  for='search-products'> <i
                                className={`${styles.fas} ${styles.fa_search}`}></i></span><input type="text" name="search-products"
                                     placeholder='Search for an item' />

                        </div>
                        <div className={`${styles.nothing} ${styles.nothing_search_item}`}>
                            <h1>Nothing to see here --- yet</h1>
                            <h3>Search for an item</h3>

                        </div>
                        <div  className={`${styles.scrollableDiv} ${styles.scrollableDiv600}`}>

                        </div>
                    </div>

                </div>
                <div className={styles.current_order_box}>
                    <div className={styles.section_title_bkg}>
                        <h1>Current Order</h1>
                    </div>
                    <div className={styles.section_wraper}>
                        <div className={styles.select_wrap}>
                            <div className={`${styles.select_customer_div} ${styles.d_flex_sp}`}>
                                <label for="select-customer">Select Customer:</label>
                                <select name="select-customer"  className={styles.select_input}>
                                    <option >None</option>
                                </select>

                            </div>
                        </div>
                        <div  className={`${styles.nothing} ${styles.nothing_cart_item}`}>
                            <h1>No Items in Order</h1>
                            <h3>Search and Add to order </h3>

                        </div>
                        <div  className={styles.scrollableDiv}>

                        </div>
                        <br></br>

                            <div className={styles.calculationDivs}>
                                <div className={`${styles.subtotal_div} ${styles.d_flex_sp}`}>
                                    <h2>Subtotal:</h2>
                                    <p  className={styles.to_right}>0 Rs.</p>
                                </div>
                                <div className={`${styles.add_discount_div} ${styles.d_flex_sp}`}>
                                    <label for='add-discount'>Add Discount</label>
                                    <div className={`${styles.discount_input} ${styles.to_right}`}>
                                        <input type="number" value='0' name="add-discount" 
                                            min="0" disabled /><span>Rs. </span>
                                    </div>
                                </div>
                                <div className={`${styles.total_div} ${styles.d_flex_sp}`}>
                                    <h1>Total bill:</h1>
                                    <h2  className={styles.to_right}>0 Rupees</h2>
                                </div>
                                <div className={`${styles.status_of_payment_div} ${styles.d_flex_sp}`}>
                                    <button onclick="paidORunpaid(event)" className={`${styles.btn} ${styles.order_status_btn}`}>Change Pay
                                        Status</button>
                                    <div  className={styles.paid_status_text}>
                                        <h2>Unpaid</h2>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                                <button  disabled className={`${styles.btn} ${styles.save_btn}`}>Save & Print Receipt</button>
                            </div>
                    </div>

                </div>

            </div>
            )
}

            export default employee