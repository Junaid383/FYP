

// import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../featuredinfo/Featuredinfo";
import "./home.css"
// import {userData} from "../../dummyData"
import Chart from "../../chart/Chart"
import {productData} from "../../dummyData"

import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";


function Home() {
  return <div className="home">
      <FeaturedInfo/>
      <div className="homeWidgets">        
        <WidgetSm/>
        <WidgetLg/>
      </div>
  </div>;
}

export default Home;
