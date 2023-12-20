import readlineSync from 'readline-sync';

const random3 = () => Math.floor(Math.random() * 3);

const gameRound = (moves) => {
  // Generate a list of move options for the user
  const moveOptions = moves.map((move, index) => `${index + 1}: ${move}`).join('\n');
  // Ask the user to choose a move
  console.log(`Выберите вашу фигуру:\n${moveOptions}\n`);
  const usersMoveIndex = readlineSync.questionInt('Ваш выбор: ') - 1;
  const usersMove = moves[usersMoveIndex];
  console.log('Вы выбрали:', usersMove, '\n');
  const machinesMove = moves[random3()];
  console.log(`Компьютер выбирает: ${machinesMove} \n`);
  return [usersMove, machinesMove];
};

const evalWinner = (usersMove, machinesMove) => {
  const isEqual = (usersMove === machinesMove)
  if (isEqual) { return 'Результат: Ничья' }
  else if (usersMove === 'Камень' && machinesMove === 'Ножницы') {
    return 'Результат: Вы победили! Камень ломает ножницы. \n'
  }
  else if (usersMove === 'Ножницы' && machinesMove === 'Бумага') {
    return 'Результат: Вы победили! Ножницы режут бумагу. \n'
  }
  else if (usersMove === 'Бумага' && machinesMove === 'Камень') {
    return 'Результат: Вы победили! Бумага накрывает камень. \n'
  }
  else if (machinesMove === 'Камень' && usersMove === 'Ножницы') {
    return 'Результат: Вы проиграли! Камень ломает ножницы. \n'
  }
  else if (machinesMove === 'Ножницы' && usersMove === 'Бумага') {
    return 'Результат: Вы проиграли! Ножницы режут бумагу. \n'
  }
  else if (machinesMove === 'Бумага' && usersMove === 'Камень') {
    return 'Результат: Вы проиграли! Бумага накрывает камень. \n'
  }
};

const spsGame = () => {
  console.log('Добро пожаловать в игру "Камень, ножницы, бумага"!');
  const moves = ['Камень', 'Ножницы', 'Бумага'];
  let shouldContinue = true;
  while (shouldContinue) {
    const [usersMove, machinesMove] = gameRound(moves);
    console.log(evalWinner(usersMove, machinesMove));
    const oneMore = readlineSync.question('Хотите сыграть ещё раз? (да/нет): ').toLowerCase();
    shouldContinue = (oneMore === 'да') ? true : false;
    if (!shouldContinue) {
      console.log('Спасибо за игру! До встречи!')
    }
  }
}

spsGame();
