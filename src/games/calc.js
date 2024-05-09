import checkAnswer from '../../bin/index.js';

console.log('What is the result of the expression?');
const calc = () => {
  let scoreCounter = 0;
  let isPlay = true;
  while (isPlay) {
    const firstNumber = Math.round(Math.random() * 100);
    const secondNumber = Math.round(Math.random() * 100);
    const operandNumber = ['+', '-', '*'][Math.round(Math.random() * 2)];
    let answer = 0;
    switch (operandNumber) {
      case '+':
        console.log(`Question: ${firstNumber} + ${secondNumber}`);
        answer = firstNumber + secondNumber;
        break;
      case '-':
        console.log(`Question: ${firstNumber} - ${secondNumber}`);
        answer = firstNumber - secondNumber;
        break;
      case '*':
        console.log(`Question: ${firstNumber} * ${secondNumber}`);
        answer = firstNumber * secondNumber;
        break;
      default:
        console.log('Wrong operand');
    }
    isPlay = checkAnswer(answer, scoreCounter);
    scoreCounter += 1;
  }
};

export default calc;
