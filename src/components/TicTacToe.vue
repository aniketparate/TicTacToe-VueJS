<template>
  <div class="tictactoe">
    <h1>Tic Tac Toe</h1>
    <div class="board">
      <div
        v-for="(cell, index) in cells"
        :key="index"
        class="cell"
        @click="makeMove(index)"
      >
        {{ cell }}
      </div>
    </div>
    <div class="info">
      <p>Current Player: {{ currentPlayer }}</p>
      <p>Winner: {{ winner ? winner : 'None' }}</p>
      <button v-if="winner || isDraw" @click="resetGame" class="reset-btn">
        Play Again
      </button>
    </div>
    <div class="scoreboard">
      <h2>Scoreboard</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X</td>
            <td>{{ scores.X }}</td>
          </tr>
          <tr>
            <td>O</td>
            <td>{{ scores.O }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicTacToe',
  data() {
    return {
      cells: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      scores: {
        X: 0,
        O: 0,
      },
      isDraw: false,
    };
  },
  methods: {
    makeMove(index) {
      if (this.cells[index] === null && !this.winner) {
        this.$set(this.cells, index, this.currentPlayer);
        if (this.checkWin()) {
          this.winner = this.currentPlayer;
          this.scores[this.currentPlayer]++;
        } else if (this.cells.every(cell => cell !== null)) {
          this.winner = 'Draw';
        } else {
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    },
    checkWin() {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c];
      });
    },
    resetGame() {
      this.cells = Array(9).fill(null);
      this.currentPlayer = 'X';
      this.winner = null;
      this.isDraw = false;
    },
  },
}
</script>

<style scoped>
.tictactoe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #a2c2e6, #b9d8f5);
  color: #fff;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
}

.cell {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: 2px solid #fff;
  border-radius: 10px;
  background: linear-gradient(135deg, #ffffff30, #ffffff10);
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.cell:hover {
  background: linear-gradient(135deg, #ffffff50, #ffffff20);
  transform: scale(1.05);
}

.info {
  margin: 20px;
}

.scoreboard {
  margin-top: 20px;
}

.scoreboard table {
  margin: 0 auto;
  border-collapse: collapse;
}

.scoreboard th,
.scoreboard td {
  padding: 10px;
  border: 1px solid #fff;
}

.scoreboard th {
  background: #6fb1fc;
}

.scoreboard td {
  background: #ffffff20;
}

.reset-btn {
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background: linear-gradient(135deg, #6fb1fc, #1e3a8a);
  color: #fff;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.reset-btn:hover {
  background: linear-gradient(135deg, #1e3a8a, #6fb1fc);
  transform: scale(1.05);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
  