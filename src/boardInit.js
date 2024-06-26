import { gameboard1, gameboard2 } from './init';
import './styles.css';
const body = document.querySelector("body");
const boardsContainer = document.querySelector(".boards-container");

function createBoard(num) {
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");
    let cur = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const box = document.createElement("div");
            box.classList.add("board-item");
            box.classList.add(`board-${num}`);
            box.setAttribute("data-num", cur);
            box.addEventListener("click", (e) => {
                if (num === 1) {
                    gameboard1.hitCord(i, j, e.target.dataset.num);
                } else if (num === 2) {
                    gameboard2.hitCord(i, j, e.target.dataset.num);
                }
                if (gameboard1.checkBoard())
                    gameboard1.displayWinner();
                else if (gameboard2.checkBoard())
                    gameboard2.displayWinner();
            });
            boardContainer.append(box);
            cur++;
        }
    }
    boardsContainer.append(boardContainer);
}

export function resetBoard() {
    const boardItems = document.querySelectorAll(".board-item");
    for (let boardItem of boardItems) {
        boardItem.textContent = "";
    }
}

let boardInit = function () {
    boardsContainer.classList.add("boards-container");
    body.append(boardsContainer);
    createBoard(1);
    createBoard(2);
}();

export { boardInit };