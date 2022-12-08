const colorScale = d3.scaleOrdinal()
.domain(['apple','lemon'])
.range(['#c11d1d','#eae600']);

const radiusScale = d3.scaleOrdinal()
.domain(['apple','lemon'])
.range([50,30]);

const xPosition = (d,i) => i * 120 + 60;

export const fruitBowl = (selection, props) => {
    const { fruits, height } = props
    
    const circles = selection.selectAll('circle')
        .data(fruits);
    circles
        .enter().append('circle')
            .attr('cx', xPosition)
            .attr('cy',height / 2)
        .merge(circles)
            .attr('r', d => radiusScale(d.type))
            .attr('fill',d => colorScale(d.type));
    circles.exit().remove();

    const text = selection.selectAll('circle')
        .data(fruits);
    circles
        .enter().append('circle')
            .attr('cx', xPosition)
            .attr('cy',height / 2)
        .merge(circles)
            .attr('r', d => radiusScale(d.type))
            .attr('fill',d => colorScale(d.type));
    circles.exit().remove();
}

