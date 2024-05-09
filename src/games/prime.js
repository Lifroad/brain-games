import checkAnswer from '../../bin/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const prime = () => {
  let scoreCounter = 0;
  let isPlay = true;
  while (isPlay) {
    const guesedNumber = Math.round(Math.random() * 100);
    let answer = 'yes';
    for (let i = 1; i < guesedNumber; i += 1) {
      if (guesedNumber % i === 0 && i !== 1) {
        answer = 'no';
        break;
      }
    }
    console.log(`Question: ${guesedNumber}`);
    isPlay = checkAnswer(answer, scoreCounter);
    scoreCounter += 1;
  }
};

export default prime;
