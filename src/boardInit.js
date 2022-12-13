import { gameboard1, gameboard2 } from './init';
import { playGame } from './mainGame';
import './styles.css';
const body = document.querySelector("body");
const boardsContainer = document.createElement("div");

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
                } else {
                    gameboard2.hitCord(i, j, e.target.dataset.num);
                }
            });
            boardContainer.append(box);
            cur++;
        }
    }
    boardsContainer.append(boardContainer);
}

let boardInit = function () {
    boardsContainer.classList.add("boards-container");
    body.append(boardsContainer);
    createBoard(1);
    createBoard(2);
}();

export { boardInit };