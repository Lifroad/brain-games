import checkAnswer from '../../bin/index.js';

console.log('What number is missing in the progression?');
const progression = () => {
  let scoreCounter = 0;
  let isPlay = true;
  while (isPlay) {
    const numbers = [Math.round(Math.random() * 10)];
    const progressionStep = Math.round(Math.random() * 10);
    for (let i = 1; i < 10; i += 1) {
      numbers.push(numbers[i - 1] + progressionStep);
    }
    const pickStep = Math.round(Math.random() * 9);
    const answer = numbers[pickStep];
    numbers[pickStep] = '..';
    console.log(`Question: ${numbers.join(' ')}`);
    isPlay = checkAnswer(answer, scoreCounter);
    scoreCounter += 1;
  }
};

export default progression;
