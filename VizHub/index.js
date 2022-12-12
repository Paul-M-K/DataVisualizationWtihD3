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
    .text('Canadian Forces Personel Overview')
    .style('font-size', height/18);


// load in data
d3.csv('data.csv').then(data => {
    console.log(data);
});









