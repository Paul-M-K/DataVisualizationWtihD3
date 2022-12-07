(function () {
    'use strict';

    const svg = d3.select('svg');
    
    const height = +svg.attr('height');
    const width = +svg.attr('width');
    const eyeSpacing = 100;
    const eyeYOffSet = 70;
    const eyeRadius = 30;
    const eyebrowWidth = 70;
    const eyebrowHeight = 15;
    const eyebrowYOffSet = -70;
   

    const g = svg
        .append('g')
            .attr('transform',`translate(${width/2}, ${height/2})`);

    const circle = g
        .append('circle')
            .attr('r',height/2)
            .attr('fill','yellow')
            .attr('stroke','black');

    const eyesG = g
        .append('g')
            .attr('transform',`translate(0,${-eyeYOffSet})`);

    const leftEye = eyesG
        .append('circle')
            .attr('r',eyeRadius)
            .attr('cx', - eyeSpacing);

    const rightEye = eyesG
        .append('circle')
            .attr('r',eyeRadius)
            .attr('cx', + eyeSpacing);

    
    const eyesbrowsG = eyesG
        .append('g')
            .attr('transform',`translate(0,${eyebrowYOffSet})`);
    
    eyesbrowsG
        .transition().duration(2000)
            .attr('transform',`translate(0,${eyebrowYOffSet - 50}`)
        .transition().duration(2000)
            .attr('transform',`translate(0,${eyebrowYOffSet}`);

    const leftEyebrow = eyesbrowsG
        .append('rect')
            .attr('x', -eyeSpacing - eyebrowWidth /2)
            .attr('width',eyebrowWidth)
            .attr('height',eyebrowHeight);
    
    const rightEyebrow = eyesbrowsG
        .append('rect')
            .attr('x', +eyeSpacing - eyebrowWidth /2)
            .attr('width',eyebrowWidth)
            .attr('height',eyebrowHeight)


    const mouth = g
    .append('path')
        .attr('d',d3.arc()({
            innerRadius: 150,
            outerRadius: 170,
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 1.5
          }));

}(d3));