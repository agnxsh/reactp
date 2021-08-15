import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
   const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
   //here dataPointValues is an array
    const totalMaximum = Math.max(...dataPointValues);
  
    return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} //since the label is unique
          //also having an id helps react to render the content more efficiently
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
