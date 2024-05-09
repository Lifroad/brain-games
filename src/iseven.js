import readlineSync from 'readline-sync';

const isEven = (name) => {
  let scoreCounter = 0;
  while (scoreCounter < 3) {
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((randomNumber % 2 === 0 && userAnswer === 'yes') || (randomNumber % 2 !== 0 && userAnswer === 'no')) {
      scoreCounter += 1;
      const congrat = scoreCounter === 3 ? `Congratulations, ${name}!` : 'Correct!';
      console.log(congrat);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${userAnswer === 'yes' ? 'no' : 'yes'}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default isEven;
