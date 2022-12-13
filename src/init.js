import { boardInit } from "./boardInit";
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

boardInit;

let gameboard1 = new GameBoardFactory(1);
let gameboard2 = new GameBoardFactory(2);
gameboard1.enabled = false;

computer();
axis.textContent = "x-axis";
export { gameboard1, gameboard2 };