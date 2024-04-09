import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './graph.css';

const LineGraph = ({ data, width, height,innerdata ,bgcolor1,bgcolor2,textcolor1,textcolor2,linecolor}) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data) return;

    const svg = d3.select(svgRef.current);
    const margin = { top:10, right: 10, bottom: 10, left: 10 };
    const innerWidth = 207.82 ;
    const innerHeight = 134.33;

    svg.selectAll('*').remove();

    const graph = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top},${margin.bottom},${margin.right})`);
    
    // Add background color
    graph.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', innerWidth)
    .attr('height', innerHeight)
    .attr('rx', 10) // Border radius for x-axis
    .attr('ry', 10) // Border radius for y-axis
    .attr('fill', `${bgcolor1}`)


    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.x))
      .range([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y +10)])
      .range([innerHeight, 0]);


    const area = d3.area()
      .x(d => x(d.x))
      .y0(innerHeight)
      .y1(d => y(d.y));

    graph.append('path')
      .datum(data)
      .attr('fill', `${bgcolor2}`) // Color of the covered area
      .attr('d', area);

    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y));

    graph.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', `${linecolor}`) // Color of the line
      .attr('stroke-width', 1.5)
      .attr('d', line);

    // Adding text
    graph.append("text")
      .attr("x", innerWidth / 6)
      .attr("y", margin.top*2)
      .attr("text-anchor", "start")
      .attr('fill', `${textcolor1}`) // Text color
      .attr('font-family', 'Poppins') // Set font family to Poppins
      .attr('font-weight', 600) // Set font weight to 600
      .attr('font-size', '12.64px') // Set font size to 12.64px
      .attr('line-height', '19.75px') // Set line height to 19.75px
      .attr('letter-spacing', '0.4px') // Set letter spacing to 0.4px
      .text(`${innerdata.title}`);

    graph.append("text")
      .attr("x", innerWidth / 6)
      .attr("y", margin.top * 4)
      .attr("text-anchor", "start")
      .attr('fill', `${textcolor2}`) // Text color
      .attr('font-family', 'Poppins') // Set font family to Poppins
      .attr('font-weight', 500) // Set font weight to 600
      .attr('font-size', '9.48px') // Set font size to 12.64px
      .attr('line-height', '11.75px') // Set line height to 19.75px
      .attr('letter-spacing', '0.4px') // Set letter spacing to 0.4px
      .text("lorem Ispsum");
      

    graph.append("text")
      .attr("x", innerWidth / 6)
      .attr("y", margin.top * 8)
      .attr("text-anchor", "start")
      .attr('fill', `${textcolor1}`) // Text color
      .attr('font-family', 'Poppins') // Set font family to Poppins
      .attr('font-weight', 500) // Set font weight to 600
      .attr('font-size', '23.71px') // Set font size to 12.64px
      .attr('line-height', '27.66px') // Set line height to 19.75px
      .attr('letter-spacing', '0.4px') // Set letter spacing to 0.4px
      .text(`${innerdata.value}`);

    graph.append("text")
      .attr("x", innerWidth / 6)
      .attr("y",margin.top * 10)
      .attr("text-anchor", "start")
      .attr('fill', `${textcolor1}`) // Text color
      .attr('font-family', 'Poppins') // Set font family to Poppins
      .attr('font-weight', 500) // Set font weight to 600
      .attr('font-size', '11.06px') // Set font size to 12.64px
      .attr('line-height', '15.06px') // Set line height to 19.75px
      .attr('letter-spacing', '0.4px') // Set letter spacing to 0.4px
      .text(`${innerdata.percent}`);

    graph.append("text")
      .attr("x", innerWidth / 6)
      .attr("y", margin.top * 12)
      .attr("text-anchor", "start")
      .attr('fill', `${textcolor2}`) // Text color
      .attr('font-family', 'Poppins') // Set font family to Poppins
      .attr('font-weight', 600) // Set font weight to 600
      .attr('font-size', '12.64px') // Set font size to 12.64px
      .attr('line-height', '19.75px') // Set line height to 19.75px
      .attr('letter-spacing', '0.4px') // Set letter spacing to 0.4px
      .text(`${innerdata.amount}`);
      
  }, [data, width, height,innerdata ,bgcolor1,bgcolor2,textcolor1,textcolor2,linecolor]);

  return (
    <svg ref={svgRef} width={width} height={height} style={{boxShadow:"0px 0px 4.13px 0px #6D6D6D80", borderRadius:"10px",margin:"10px"}}></svg>
  );
};

export default LineGraph;
