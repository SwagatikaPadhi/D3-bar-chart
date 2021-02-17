import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component {
  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
    const data = [33.2, 48.6, 17.0, 40];
    
	const svg = d3.select('body').append('svg').attr('width', this.props.width).attr('height', this.props.height).style("margin-left", 100).style("margin-top", 100);

	const h = this.props.height;
  
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "#6495ED")
	  
	  svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => "x")
	  .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
}
    
export default BarChart;