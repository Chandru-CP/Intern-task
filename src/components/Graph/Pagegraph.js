import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './graph.css';

const Pagegraph = ({ dataArray, width, height }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!dataArray) return;

    const svg = d3.select(svgRef.current);
    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.selectAll('*').remove();

    const graph = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain(d3.extent(dataArray, d => d.x))
      .range([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(dataArray, d => d.y + 10)])
      .range([innerHeight, 0]);

    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y));

    // Create linear gradient for line
    const lineGradient = graph.append("defs")
      .append("linearGradient")
      .attr("id", "line-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("y1",0).attr("x1", x(0))
      .attr("y2", 0).attr("x2", x(d3.max(dataArray, d => d.x - 100)));

    lineGradient.append("stop").attr("offset", "0%").attr("stop-color", "red");
    lineGradient.append("stop").attr("offset", "100%").attr("stop-color", "white");

    // Append line path with linear gradient
    graph.append('path')
      .datum(dataArray)
      .attr('fill', 'none')
      .attr('stroke', 'url(#line-gradient)') // Apply linear gradient to stroke
      .attr('stroke-width', 1.5)
      .attr('d', line);

    // Create linear gradient for area fill
    const areaGradient = graph.append("defs")
      .append("linearGradient")
      .attr("id", "area-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(d3.max(dataArray, d => d.y +10))); // Gradient extends to the bottom of the graph area

    areaGradient.append("stop").attr("offset", "0%").attr("stop-color", "white");
    areaGradient.append("stop").attr("offset", "100%").attr("stop-color", "red");

    const area = d3.area()
      .x(d => x(d.x))
      .y0(innerHeight)
      .y1(d => y(d.y));

    // Append area path with linear gradient
    graph.append('path')
      .datum(dataArray)
      .attr('fill', 'url(#area-gradient)') // Apply linear gradient to fill
      .attr('d', area);

  }, [dataArray, width, height]);

  return (
    <svg ref={svgRef}  style={{width:'70px', height:'14px', borderRadius:'0',boxShadow:'none'}}></svg>
  );
};

export default Pagegraph;
