// 31
import React from 'react';
import "./home.css";

// 39
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';

// 47
import Chart from '../../components/chart/Chart.jsx';

// 48
import {userData} from "../../dummyData.js";

// 62
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

const Home = () => {
  return (
    <div className="home">
      {/* Home */}

      {/* 40 */}
      <FeaturedInfo></FeaturedInfo>

      {/* 49 */}
      <Chart data={userData} title="User Analytics" grid datakey="Active User"></Chart>

      {/* 54 */}
      <div className="homeWidgets">
          {/* 63 */}
          <WidgetSm></WidgetSm>
          <WidgetLg></WidgetLg>
      </div>
    </div>
  )
}

export default Home;