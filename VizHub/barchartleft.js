// Delcare SVG and its Color
const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
    //gather like terms, set to const to simplify code
    //now code is not limited to a dataset. 
    //change these two Value(s) to get desiered bar charts.
    const xValue = d => d.jobtitle;
    const yValue = d => d.user_cnt;
   
    //Set the dimensions and margins of the graph
    var margin = { top: height/2, right: width/100, bottom: height/10, left: width/8},
        innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const dashbaord = svg.append('g')
        .attr('class','bar-chart')
        .attr('transform',`translate(${margin.left},${margin.top})`);

    dashbaord.node().scrollBy(100, 0);
    //X scale
    const xScaleBC = d3.scaleBand()
        .domain(data.map(xValue))
        .range([0,innerWidth])
        .padding(0.15);
    
    //x axis
    const xAxis = d3.axisBottom(xScaleBC);

    //Y axis
    const yScaleBC = d3.scaleLinear()
        .domain([0, d3.max(data, yValue)])
        .range([innerHeight,0]);

    dashbaord.append('g').call(d3.axisLeft(yScaleBC))
        .attr('class','yAxis');
    dashbaord.append('g')
        .attr('transform',`translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScaleBC))
        .selectAll('text')
            .attr('transform',`translate(-10,3)rotate(-45)`)
            .style('text-anchor','end')
            .style('font-size', 10);
    
    //Append barchart to the svg object to the body of the page
    
    dashbaord.selectAll('rect').data(data)
        .enter().append('rect')
            .attr('x', d=> xScaleBC(xValue(d)))
            .attr('y', d => yScaleBC(yValue(d)))
            .attr('width', xScaleBC.bandwidth())
            .attr('height', d => innerHeight - yScaleBC(yValue(d)));
};

// load in data
d3.csv('data.csv').then(data => {
    //convert strings to integer values with +d....
    data.forEach(d => {
        d.air_cnt = +d.air_cnt;
        d.army_cnt = +d.army_cnt;
        d.caawc_cnt = +d.caawc_cnt;
        d.cateu_cnt = +d.cateu_cnt;
        d.cfsce_cnt = +d.cfsce_cnt;
        d.cfsme_cnt = +d.cfsme_cnt;
        d.ctchq_cnt = +d.ctchq_cnt;
        d.english_cnt = +d.english_cnt;
        d.female_cnt = +d.female_cnt;
        d.french_cnt = +d.french_cnt;
        d.inf_cnt = +d.inf_cnt;
        d.male_cnt = +d.male_cnt;
        d.navy_cnt = +d.navy_cnt;
        d.ncm_cnt = +d.ncm_cnt;
        d.officer_cnt = +d.officer_cnt;
        d.rca_cnt = +d.rca_cnt;
        d.rcacs_cnt = +d.rcacs_cnt;
        d.rcemes_cnt = +d.rcemes_cnt;
        d.tac_school_cnt = +d.tac_school_cnt;
        d.user_cnt = +d.user_cnt;
    });
    //sort data using this line
    let sortedData = data.slice().sort((a, b) => d3.descending(a.user_cnt, b.user_cnt));
    console.log(data);
    render(sortedData);
});









