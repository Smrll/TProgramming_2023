function isSolved(board) {
    for (let player = 1; player <= 2; player++) {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
                return player;
            }
            if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
                return player;
            }
        }
        if (
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)
        ) {
        return player;
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
            return -1; 
        }
        }
    }
    return 0; 
}