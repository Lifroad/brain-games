import checkAnswer from '../../bin/index.js';

console.log('Find the greatest common divisor of given numbers.');
const gcd = () => {
  let scoreCounter = 0;
  let isPlay = true;
  while (isPlay) {
    let firstNumber = Math.round(Math.random() * 100);
    let secondNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${firstNumber}  ${secondNumber}`);
    while (firstNumber && secondNumber) {
      if (firstNumber > secondNumber) {
        firstNumber %= secondNumber;
      } else {
        secondNumber %= firstNumber;
      }
    }
    const answer = firstNumber || secondNumber;
    isPlay = checkAnswer(answer, scoreCounter);
    scoreCounter += 1;
  }
};

export default gcd;
