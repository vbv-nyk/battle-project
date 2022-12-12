function playerPlays(gameboard2) {
    if (gameboard2.checkGame()) {
        return 3;
    } else {
        return 0;
    }
}

function computerPlays(gameboard1) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (gameboard1.board[i][j]) {
                +``
                gameboard1.hitCord(i, j);
                if (gameboard1.checkGame()) {
                    return 3;
                } else {
                    return 1;
                }
            }
        }
    }
}

export function playGame(gameboard1, gameboard2) {
    let turn = 1;
    while (turn != 3) {
        if (turn == 1) {
            turn = playerPlays(gameboard2);
        } else if (turn == 0) {
            turn = computerPlays(gameboard1);
        }
    }
}