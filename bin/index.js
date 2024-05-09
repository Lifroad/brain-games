import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const checkAnswer = (answer, scoreCounter) => {
  const userAnswer = readlineSync.question('Your answer: ');
  let isPlay = true;
  if (String(userAnswer) === String(answer)) {
    if (scoreCounter === 2) {
      isPlay = false;
      console.log(`Congratulations, ${userName}!`);
    } else {
      console.log('Correct!');
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${userName}!`);
    isPlay = false;
  }
  return isPlay;
};

export default checkAnswer;
