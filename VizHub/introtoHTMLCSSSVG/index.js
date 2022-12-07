import { getCars } from 'getCars';
// import cars from 'cars.js';
import { generateReport } from 'generateReport';

getCars().then(cars => {
    const message = generateReport(cars, 2000);
    document.getElementById('message-element').textContent = message;
});





