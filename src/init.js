import { boardInit, resetBoard } from "./boardInit";
import { computer } from "./computerBoard";
import { GameBoardFactory } from "./gameBoardFactory";
const axis = document.querySelector(".axis");

axis.addEventListener("click", () => {
    if (axis.textContent == "x-axis") {
        axis.textContent = "y-axis";
    } else {
        axis.textContent = "x-axis";
    }
})
let gameboard1 = new GameBoardFactory(1);
let gameboard2 = new GameBoardFactory(2);
export function resetGame() {
    resetBoard();
    gameboard1 = new GameBoardFactory(1);
    gameboard1.enabled = false;
    gameboard2 = new GameBoardFactory(2);
    computer();
    axis.textContent = "x-axis";
}

resetGame();
boardInit;


export { gameboard1, gameboard2 };