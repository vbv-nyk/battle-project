import { gameboard1, gameboard2 } from "./init";
const axis = document.querySelector(".axis");

axis.addEventListener("click", () => {
    if (axis.textContent = "x-axis") {
        axis.textContent = "y-axis";
    } else {
        axis.textContent = "x-axis";
    }
})
function playerPlays(gameboard2) {
    if (gameboard2.checkBoard()) {
        return 3;
    } else {
        return 0;
    }
}

function computerPlays(gameboard1) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (gameboard1.board[i][j]) {
                gameboard1.hitCord(i, j);
                if (gameboard1.checkBoard()) {
                    return 3;
                } else {
                    return 1;
                }
            }
        }
    }
}

export function playGame() {
    let turn = 1;
    while (turn != 3) {
        if (turn == 1) {
            turn = playerPlays(gameboard2);
        } else if (turn == 0) {
            turn = computerPlays(gameboard1);
        }
    }
    return { turn };
}