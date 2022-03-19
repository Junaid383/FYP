import React from 'react'
import './employee.css'

function employee() {
    return (
        
        <div>

            <span class="account-options">
                <div class="dropdown">
                    <button class="dropbtn b-s-none" id='emp-name'>Emp
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Settings</a>
                        <a href="logout" id='emp-logout'>Logout</a>
                    </div>
                </div>

            </span>
            <div class="container">
            </div>
            <div id="message-block-selling" class='error-notify-block'>
                <div id="error-container-selling" class='error-info-container'>
                    <p id='errorMsg-selling' class='error-info'></p>
                </div>
            </div>
            <div id="message-block-success-emp" class='success-notify-block'>
                <div id="success-container-emp" class='success-info-container'>
                    <p id='successMsg-emp' class='success-info'></p>
                </div>
            </div>
            <div class="main d-flex">
                <div class="last-receipts-container">
                    <div class="section-title-bkg">
                        <h1>Recent Orders</h1>
                    </div>
                    <div class="section-wraper">

                        <div id='last-receipts-by-emp'>
                            <div id="nothingrecent" class='nothing'>
                                <h2>Nothing to see here --- yet</h2>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="search-area-emp" id='search-available-products'>
                    <div class="section-title-bkg">
                        <h1>Search Products</h1>
                    </div>
                    <div class="section-wraper">

                        <div class="search-bar-selling">
                            <span id='search-sell-inventory-logo' for='search-products'> <i
                                class="fas fa-search"></i></span><input type="text" name="search-products"
                                    id="search-sell-inventory" placeholder='Search for an item' />

                        </div>
                        <div id="nothing-search" class='nothing nothing-search-item'>
                            <h1>Nothing to see here --- yet</h1>
                            <h3>Search for an item</h3>

                        </div>
                        <div id="theFoundTableDiv" class='scrollableDiv scrollableDiv600'>

                        </div>
                    </div>

                </div>
                <div class="current-order-box">
                    <div class="section-title-bkg">
                        <h1>Current Order</h1>
                    </div>
                    <div class="section-wraper">
                        <div class="select-wrap">
                            <div class="select-customer-div d-flex-sp">
                                <label for="select-customer">Select Customer:</label>
                                <select name="select-customer" id="select-existing-customers" class='select-input'>
                                    <option id='order-cust-0000'>None/Walk-in</option>
                                </select>

                            </div>
                        </div>
                        <div id="nothing-cart" class='nothing nothing-cart-item'>
                            <h1>No Items in Order</h1>
                            <h3>Search and Add to order </h3>

                        </div>
                        <div id="theCartTable" class='scrollableDiv'>

                        </div>
                        <br></br>

                            <div class="calculationDivs">
                                <div class="subtotal-div d-flex-sp">
                                    <h2>Subtotal:</h2>
                                    <p id='subTotal-text' class='to-right'>0 Rs.</p>
                                </div>
                                <div class="add-discount-div d-flex-sp">
                                    <label for='add-discount'>Add Discount</label>
                                    <div class="discount-input to-right">
                                        <input type="number" value='0' name="add-discount" id="current-order-add-discount"
                                            min="0" disabled /><span>Rs. </span>
                                    </div>
                                </div>
                                <div class="total-div d-flex-sp">
                                    <h1>Total bill:</h1>
                                    <h2 id='order-total-text' class='to-right'>0 Rupees</h2>
                                </div>
                                <div class="status-of-payment-div d-flex-sp">
                                    <button onclick="paidORunpaid(event)" class='btn order-status-btn'>Change Pay
                                        Status</button>
                                    <div id="status-text" class="paid-status-text">
                                        <h2>Unpaid</h2>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                                <button id='save-print-btn' disabled class='btn save-btn'>Save & Print Receipt</button>
                            </div>
                    </div>

                </div>

            </div>
            )
}

            export default employee