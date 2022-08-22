/**
 * 
 *  Метод setInterval (callback, delay, args) 
 * 
 */

const logger = time => console.log(`Лог кожні ${time}ms - ${Date.now()}`);

console.log('До виклику setInterval');
setInterval(logger, 2000, 2000);
console.log('Після виклику setInterval');

/**
 * Щоб очистити інтервал у нас є clearInterval(intervalID)
 */