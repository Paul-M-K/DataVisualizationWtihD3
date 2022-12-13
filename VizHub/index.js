// Delcare SVG and its Color
const svg = d3.select('svg');
svg.style('background-color', '#212529');

//Declare constanst.
const barColor = '#272B2F';
const barCorner = 15;

const width = +svg.attr('width');
const height = +svg.attr('height');

// =======================================//
// create group for background squares
// svg in order to create background squares
const backgroundSquars = svg.append('g')

// Here is where the 4 squares are created in the
// middle of the dashboard
const makeSquares = type => ({ type })

// 4 squares are created here
const squares = d3.range(4)
    .map(()=>makeSquares('square'));

// add the 4 squares to the background.
// here a the hights and widths are defined by the
// size of the svg in order to adapt with different
// sized monitors / resolutions
backgroundSquars.selectAll('rect').data(squares)
    .enter().append('rect')
        .attr('x', (d,i) => i*width/4.42 + width/10.5)
        .attr('y', height/10)
        .attr('rx', barCorner)
        .attr('ry', barCorner)
        .attr('width', width/4.65)
        .attr('height', width/5)
        .attr('fill', barColor);

// =======================================//
// creation of lower rectangles 
// first create the svg object
const backgroundRect  = svg.append('g')

const makeRectangles = type => ({ type })

const rectangles = d3.range(2)
    .map(()=>makeRectangles('rectangles'));
    
backgroundRect.selectAll('rect').data(rectangles)
    .enter().append('rect')
        .attr('x', (d,i) => i*width/2.21 + width/10.5)
        .attr('y', height / 2.1 )
        .attr('rx', barCorner)
        .attr('ry', barCorner)
        .attr('width', width/2.27)
        .attr('height', height/1.98)
        .attr('fill', barColor)


//create left navigation bar.
const leftBar = backgroundSquars.append('rect')
    .attr('width', width/12)
    .attr('height', height)
    .attr('fill', barColor);

const title = backgroundSquars.append('text')
    .attr('class', 'itma-title')
    .attr('x', width/10.5)
    .attr('y', height/18)
    .text('Personnel Overview')
    .style('font-size', height/18);




const render = data => {
    //gather like terms, set to const to simplify code
    //now code is not limited to a dataset. 
    //change these two Value(s) to get desiered bar charts.
    const xValue = d => d.jobtitle;
    const yValue = d => d.user_cnt;

    //Set the dimensions and margins of the graph
    var margin = { top: height/2, right: width/2.1, bottom: height/15, left: width/7},
        innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    const dashbaord = svg.append('g')
        .attr('class','bar-chart')
        .attr('transform',`translate(${margin.left},${margin.top})`);
    
    dashbaord.attr('height', 100);

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
        .attr('class','xAxis');
    dashbaord.append('g').call(d3.axisBottom(xScaleBC))
        .attr('transform',`translate(0,${innerHeight})`);
    
    //Append barchart to the svg object to the body of the page
    
    dashbaord.selectAll('rect').data(data)
        .enter().append('rect')
            .attr('x', d=> xScaleBC(xValue(d)))
            .attr('y', d => yScaleBC(yValue(d)))
            .attr('width', xScaleBC.bandwidth())
            .attr('height', d => innerHeight - yScaleBC(yValue(d)));
};

// const schools 

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









