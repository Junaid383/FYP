import "./adfeaturedinfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";


function featuredinfo() {
  return <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Total Revenue</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$ 550.56</span>
                            <span className="featuredMoneyRate">-20.5<ArrowDownward className="featuredIcon negative" /> </span>
                        </div>
                        <span className="featuredSub">Compared Last Month</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Total Customer</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">5.6k</span>
                            <span className="featuredMoneyRate"> +20.5<ArrowUpward className="featuredIcon"/> </span>
                        </div>
                        <span className="featuredSub">Compared Last Month</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Total Sales</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$ 245.32</span>
                            <span className="featuredMoneyRate">-10.5<ArrowDownward className="featuredIcon negative"/> </span>
                        </div>
                        <span className="featuredSub">Compared Last Month</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Total Profit</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$ 325.9</span>
                            <span className="featuredMoneyRate"> +20.5<ArrowUpward className="featuredIcon"/> </span>
                        </div>
                        <span className="featuredSub">Compared Last Month</span>
                </div>
               
  </div>;
}

export default featuredinfo;
