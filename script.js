const gameBoard = document.getElementById('gameBoard');
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let direction = 'right';
let score = 0;

// Render snake and food
function renderGame() {
  gameBoard.innerHTML = '';
  // Render snake
  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.left = `${segment.x * 20}px`;
    snakeElement.style.top = `${segment.y * 20}px`;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });

  // Render food
  const foodElement = document.createElement('div');
  foodElement.style.left = `${food.x * 20}px`;
  foodElement.style.top = `${food.y * 20}px`;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

// Place food randomly
function placeFood() {
  food.x = Math.floor(Math.random() * 20);
  food.y = Math.floor(Math.random() * 20);
}

// Move snake
function updateGame() {
  const head = { ...snake[0] };
  if (direction === 'right') head.x++;
  else if (direction === 'left') head.x--;
  else if (direction === 'up') head.y--;
  else if (direction === 'down') head.y++;

  snake.unshift(head);

  // Check for food collision
  if (head.x === food.x && head.y === food.y) {
    score++;
    placeFood();
  } else {
    snake.pop();
  }

  renderGame();
}

// Change direction based on key presses
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' && direction !== 'down') direction = 'up';
  else if (e.key === 'ArrowDown' && direction !== 'up') direction = 'down';
  else if (e.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
  else if (e.key === 'ArrowRight' && direction !== 'left') direction = 'right';
});

// Change direction based on button clicks
function changeDirection(newDirection) {
  if (newDirection === 'up' && direction !== 'down') direction = 'up';
  else if (newDirection === 'down' && direction !== 'up') direction = 'down';
  else if (newDirection === 'left' && direction !== 'right') direction = 'left';
  else if (newDirection === 'right' && direction !== 'left') direction = 'right';
}

// Game loop
setInterval(updateGame, 200);