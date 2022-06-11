import "./adfeaturedinfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from 'react';


function featuredinfo() {



    
  return <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Total Revenue</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">Rs. 550</span>
                            <span className="featuredMoneyRate">-20.5<ArrowDownward className="featuredIcon negative" /> </span>
                        </div>
                        <span className="featuredSub">Compared Last Month</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Total Orders</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">56</span>
                            <span className="featuredMoneyRate"> +20.5<ArrowUpward className="featuredIcon"/> </span>
                        </div>
                        <span className="featuredSub">Compared Last Month</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Total Sales</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">Rs. 245</span>
                            <span className="featuredMoneyRate">-10.5<ArrowDownward className="featuredIcon negative"/> </span>
                        </div>
                        <span className="featuredSub">Compared Last Month</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Total Profit</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">Rs. 325</span>
                            <span className="featuredMoneyRate"> +20.5<ArrowUpward className="featuredIcon"/> </span>
                        </div>
                        <span className="featuredSub">Compared Last Month</span>
                </div>
               
  </div>;
}

export default featuredinfo;
