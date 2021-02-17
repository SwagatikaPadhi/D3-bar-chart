import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component {
  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
    const data = [1200, 500, 200, 600, 900, 100];
    
	const svg = d3.select("body").append("svg").attr("width", 700).attr("height", 300);
  
                  
    svg.selectAll("rect")
	  .data(data)
	  .enter()
	  .append("rect")
	  .attr("x", (d, i) => i * 70)
	  .attr("y", 0)
	  .attr("width", 45)
	  .attr("height", (d, i) => d)
	  .attr("fill", "green");
  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
}
    
export default BarChart;