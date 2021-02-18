import {
    select,
    scaleLinear,
    max,
    scaleBand,
    axisLeft,
    axisBottom,
    format,
    csv
} from 'd3';

import './BarGraph.css';

function Bargraph(){
    // set the dimensions and margins of the graph
    var margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = select("svg")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Parse the Data
    var data=[["IDFA",25],["GAID",20],["Cookie",15],["Others",5]];
    
    

        // X axis
        var x = scaleBand()
        .range([ 0, width ])
        .domain(data.map(function(d) { return d[0]; }))
        .padding(0.2);
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(axisBottom(x))
        .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Add Y axis
        var y = scaleLinear()
        .domain([0, 30])
        .range([ height, 0]);
        svg.append("g")
        .call(axisLeft(y));

       
        data.map((d)=>{   
            
            // console.log("Hello World")

            // Bars
            svg.selectAll("mybar")
            .data(data)
            .enter()
            .append("rect")
                .attr("x", function(d) { return x(d[0]); })
                .attr("y", function(d) { return y(d[1]); })
                .attr("width", x.bandwidth())
                .attr("height", function(d) { return height - y(d[1]); })
                .attr("fill", "#6495ED")
        
    });
    
    return <svg width="600" height="600"></svg>

}


export default Bargraph;