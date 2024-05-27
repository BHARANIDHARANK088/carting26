// 37
import React from 'react';
import "./featuredInfo.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className="featuredInfo">
      {/* FeaturedInfo */}

      {/* 38 */}
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyCon">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className="featuredIcon negative"></ArrowDownwardIcon></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyCon">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">-1.4 <ArrowDownwardIcon className="featuredIcon negative"></ArrowDownwardIcon></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyCon">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">+2.4 <ArrowUpwardIcon className="featuredIcon"></ArrowUpwardIcon></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo;