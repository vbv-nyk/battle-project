import './styles.css';
const body = document.querySelector("body");
const boardsContainer = document.createElement("div");

function createBoard(num) {
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container", `board-${num}`);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const box = document.createElement("div");
            box.classList.add("board-item");
            boardContainer.append(box);
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