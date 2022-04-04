
import FeaturedInfo from "../../featuredinfo/Featuredinfo";
import styles from "./home.module.css";
import {userData} from "../../dummyData"
import Chart from "../../../admin/chart/Chart"

import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";


function Home() {
  return <div className={styles.home}>
      <FeaturedInfo/>
      <Chart data= {userData} name = "Sales Analytics" />
      <div className={styles.homeWidgets}>        
        <WidgetSm />
        <WidgetLg/>
      </div>
  </div>;
}
export default Home;

