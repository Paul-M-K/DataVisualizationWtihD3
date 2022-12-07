const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
    const xScale = d3.scaleLinear();
    
    svg.selectAll('rect').data(data)
        .enter().append('rect')
            .attr('width', 300)
            .attr('height', 300);
};

d3.csv('data.csv').then(data => {
    data.forEach(d => {
        d.population = +d.population * 1000;
    })
    render(data);
});






