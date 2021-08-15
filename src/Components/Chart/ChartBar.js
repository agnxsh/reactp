import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
        {/* here the dynamic value is a Javascript object, therefore we the syntax is a double curly brace */}
        {/* we should use the css property names as key-names */}
        {/* here we're supposed to dynamically stylize the chart according to the given values */}
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
// for setting up the style prop element on React we need to replace the dashed stylized properties
// into camelCase property names for the compiler to understand evevrything
