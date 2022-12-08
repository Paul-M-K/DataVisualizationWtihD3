import { fruitBowl } from './fruitBowl.js';

const svg = d3.select('svg');

const makeFruit = type => ({
    type,
    id: Math.random()
});

//makes an array of apples
let fruits = d3.range(5)
    .map(() => makeFruit('apple'));

const render = () => {
    fruitBowl(svg,{ 
        fruits,
        height: +svg.attr('height')
     });
}

//Invoce render function
render();

// Eat an apple.
setTimeout(()=> {
    fruits.pop();
    render();
}, 1000);

// Replace apple with Lemon.
setTimeout(()=> {
    fruits[2].type = 'lemon';
    render();
}, 2000);

// Eat an apple.
setTimeout(()=> {
    fruits = fruits.filter((d,i) => i !== 1);
    render();
}, 3000);











