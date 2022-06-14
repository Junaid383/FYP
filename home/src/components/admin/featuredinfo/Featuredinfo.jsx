import "./adfeaturedinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";

function featuredinfo() {
  const [orderData, setorderData] = useState([]);
  const [receiptData, setreceiptData] = useState([]);
  const [totalSale, settotalSale] = useState(0);

  const [profitData, setprofitData] = useState([]);
  const [totalprofit, settotalprofit] = useState(0);
  const [totalrevenue , setTotalRevenue] = useState(0);



  //============total Order Count===============
  const fetchProducts = async () => {
    const response = await fetch(`/admin/totalorder`);
    const orderCount = await response.json();

    setorderData(orderCount);
    //   console.log(orderCount);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    //   console.log(orderData);
  }, [orderData]);

  //=================total Sale Sum===========

  const sale = async () => {
    const response = await fetch(`/admin/totalsale`);
    const saleCount = await response.json();

    setreceiptData(saleCount);
    // console.log(saleCount);
  };
  useEffect(() => {
    sale();
  }, []);
  useEffect(() => {
    generateTotal(receiptData);
  }, [receiptData]);

  let sum = 0;
  let revenue;
  const generateTotal = (arr) => {
    arr.forEach((obj) => {
      sum += obj.total;
    

    });
    sum = sum.toLocaleString("hi-IN");
    settotalSale(sum);
    // console.log(sum);
  };

  //==============total Profit ===============
  const profit = async () => {
    const response = await fetch(`/admin/profit`);
    const saleCount = await response.json();

    setprofitData(saleCount);
    // console.log(saleCount);
  };
  useEffect(() => {
    profit();
  }, []);
  useEffect(() => {
    generateProfit(profitData);
  }, [profitData]);

  let p = 0;
  const generateProfit = (arr) => {
    arr.forEach((obj) => {
      if (obj.profit > 0) {
        // console.log("PPPP:" + obj.profit);
        p += obj.profit;
       
      }
    });
    p = p.toLocaleString("hi-IN");
    settotalprofit(p);
   
  };

 

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs.{totalSale + totalprofit}</span>
          <span className="featuredMoneyRate">
            -20.5
            <ArrowDownward className="featuredIcon negative" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared Last Month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Total Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{orderData}</span>
          <span className="featuredMoneyRate">
            {" "}
            +20.5
            <ArrowUpward className="featuredIcon" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared Last Month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Total Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs. {totalSale}</span>
          <span className="featuredMoneyRate">
            -10.5
            <ArrowDownward className="featuredIcon negative" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared Last Month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Total Profit</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs.{totalprofit}</span>
          <span className="featuredMoneyRate">
            {" "}
            +20.5
            <ArrowUpward className="featuredIcon" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared Last Month</span>
      </div>
    </div>
  );
}

export default featuredinfo;
