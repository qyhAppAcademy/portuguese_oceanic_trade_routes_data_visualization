export function getBarChart() {
    const data = [40, 80, 150, 160, 230, 420];
    const width = 800;

    const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => console.log(d))])
            .range([0, width]);

    const y = d3.scaleBand()
            .domain(d3.map(d => d.name))
            .range([0, 20 * data.length]);

    const barChartSVG = d3.select("#bar-chart")
                        .append("svg")
                        .attr("width", width)
                        .attr("height", y.range()[1])
                        .attr("font-family", "sans-serif")
                        .attr("font-size", "10")
                        .attr("text-anchor", "end");
    
    const bar = barChartSVG.selectAll("g")
        .data(data)
        .join("g")
            .attr("transform", d => `translate(0, ${y(d.name)})`);
        
    bar.append("rect")
        .attr("fill", "steelblue")
        .attr("width", d => x(d.value))
        .attr("height", y.bandwidth() - 1);

    bar.append("text")
        .attr("fill", "white")
        .attr("x", d => x(d.value) - 3)
        .attr("y", (y.bandwidth() - 1) / 2)
        .attr("dy", "0.35em")
        .text(d => d.value);

    // d3.select("#bar-chart")
    //     .data(data)
    //     .join("div")
    //     .style("background", "steelblue")
    //     .style("padding", "3px")
    //     .style("margin", "1px")
    //     .style("width", d => `${x(d)}px`)
    //     .text(d => d);
}
