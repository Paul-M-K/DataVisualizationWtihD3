import { select, arc } from 'd3';

const svg = select('svg');
    
const height = +svg.attr('height');
const width = +svg.attr('width');
const eyeSpacing = 100;
const eyeYOffSet = 70;

const circle = svg.append('circle')
    .attr('r',height/2)
    .attr('cx',width/2)
    .attr('cy',height/2)
    .attr('fill','yellow')
    .attr('stroke','black');

const leftEye = svg.append('circle')
.attr('r',30)
.attr('cx',width/2 - eyeSpacing)
.attr('cy',height/2 - eyeYOffSet)
.attr('fill','black')
.attr('stroke','black');

const rightEye = svg.append('circle')
.attr('r',30)
.attr('cx',width/2 + eyeSpacing)
.attr('cy',height/2 - eyeYOffSet)
.attr('fill','black')
.attr('stroke','black');

const smile = svg.append('circle')
.attr('r',30)
.attr('cx',width/2 + eyeSpacing)
.attr('cy',height/2 - eyeYOffSet)
.attr('fill','black')
.attr('stroke','black');







