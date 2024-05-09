import checkAnswer from '../bin/index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = () => {
  let scoreCounter = 0;
  let isPlay = true;
  while (isPlay) {
    const randomNumber = Math.round(Math.random() * 100);
    const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    isPlay = checkAnswer(answer, scoreCounter);
    scoreCounter += 1;
  }
};

export default isEven;
