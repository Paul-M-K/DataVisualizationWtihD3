// Delcare SVG and its Color
const svg = d3.select('svg');
svg.style('background-color', '#212529');

//Declare constanst.
const barColor = '#272B2F';
const barCorner = 10

const width = +svg.attr('width');
const height = +svg.attr('height');

//create group for background
const background = svg.append('g')

const makeSquares = type => ({ type })

const squares = d3.range(4)
    .map(()=>makeSquares('square'));

background.selectAll('rect').data(squares)
    .enter().append('rect')
        .attr('x',(d,i) => i*360 + 170)
        .attr('y', 150)
        .attr('rx',barCorner)
        .attr('ry',barCorner)
        .attr('width',width/5)
        .attr('height',width/5)
        .attr('fill', barColor)

const test = svg.append('g')

const makeRectangles = type => ({ type })

const rectangles = d3.range(2)
    .map(()=>makeRectangles('rectangles'));

console.log(rectangles);
    
test.selectAll('rect').data(rectangles)
    .enter().append('rect')
        .attr('x',(d,i) => i*700 + 170)
        .attr('y', height/1.8)
        .attr('rx',barCorner)
        .attr('ry',barCorner)
        .attr('width',width/2.4)
        .attr('height',width/4.2)
        .attr('fill', barColor)


//create left navigation bar.
const leftBar = background.append('rect');
leftBar
    .attr('width',width/12)
    .attr('height',height)
    .attr('fill', barColor);

// //Create firstBar 
// const firstBar = background.append('rect');
// firstBar
//     .attr('x',180)
//     .attr('y',220)
//     .attr('rx',barCorner)
//     .attr('ry',barCorner)
//     .attr('width',width/5)
//     .attr('height',width/5)
//     .attr('fill', barColor);









