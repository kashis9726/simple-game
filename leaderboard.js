const leaderboard = document.getElementById('leaderboard');
const players = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];

function updateLeaderboard() {
  leaderboard.innerHTML = '';
  players.forEach(player => {
    const li = document.createElement('li');
    li.textContent = `${player}: ${Math.floor(Math.random() * 100)}`;
    leaderboard.appendChild(li);
  });
}

setInterval(updateLeaderboard, 5000);