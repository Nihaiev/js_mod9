/**
 * 
 *  Метод setInterval (callback, delay, args) 
 * 
 */

const logger = time => console.log(`Лог кожні ${time}ms - ${Date.now()}`);

// console.log('До виклику setInterval');
// setInterval(logger, 2000, 2000);
// console.log('Після виклику setInterval');

/**
 * Щоб очистити інтервал у нас є clearInterval(intervalID)
 */

const intervalID = setInterval(logger, 2000, 2000)
const shouldCancelInterval = Math.random() > 0.3;
console.log(shouldCancelInterval);

if (shouldCancelInterval) {
    clearInterval(intervalID)
}