let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);
    if (gameBoard[index] === '' && !checkWinner()) {
        cell.textContent = currentPlayer;
        gameBoard[index] = currentPlayer;
        if (checkWinner()) {
            document.getElementById('winner').textContent = `Nyertél! A győztes: ${currentPlayer}`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    document.getElementById('winner').textContent = '';
}

resetGame(); // Kezdeti állapot beállítása
