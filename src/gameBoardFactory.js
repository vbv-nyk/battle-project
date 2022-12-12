import { shipFactory } from "./shipFactory";
const axis = document.querySelector(".axis");
export function GameBoardFactory() {
    let count = 2;
    let ships = [];
    let board = [];

    function clearBoard() {
        for (let i = 0; i < 10; i++) {
            board[i] = [];
            for (let j = 0; j < 10; j++) {
                board[i][j] = false;
            }
        }
        return board;
    };

    function createShip(x, y, axis, e) {
        ships[count] = new shipFactory(count);
        if (x > 9 || y > 9)
            return false;

        if (axis == "x-axis") {
            if (y + count > 10) return false;
            for (let i = y; i < y + count; i++) {
                if (board[x][i] >= 1) {
                    return false;
                }
            }
            for (let i = y; i < y + count; i++) {
                board[x][i] = count;
                const curBox = document.querySelector(`.board-item[data-num="${Number(e.target.dataset.num) + (i - y)}"]`)
                curBox.textContent = count;
            }
            count++;
        } else {
            if (x + count > 10) return false;
            for (let i = x; i < x + count; i++) {
                if (board[i][y] >= 1) {
                    return false;
                }
            }
            for (let i = x; i < x + count; i++) {
                board[i][y] = count;
                const curBox = document.querySelector(`.board-item[data-num="${Number(e.target.dataset.num) + (i - x) * 10}"]`)
                curBox.textContent = count;
            }
            count++;
        }
        return board;
    }

    function checkBoard() {
        let gameOver = board.every(function (row) {
            return row.every(function (item) {
                return item == false;
            });
        });
        return gameOver;
    }

    function initializeShips() {
        clearBoard();
    }

    let boardInnit = function () {
        clearBoard();
        initializeShips();
    }()


    function hitCord(x, y, e) {
        if (count == 6) {
            if (board[x][y] !== 0) {
                if (board[x][y] == false) {
                    board[x][y] = 0;
                    e.target.textContent = "0";
                } else {
                    ships[board[x][y]].hit();
                    board[x][y] = 0;
                    e.target.textContent = "0";
                }
                return true;
            } else {
                return false;
            }
        } else {
            createShip(x, y, axis.textContent, e);
        }
    }

    return { boardInnit, hitCord, clearBoard, createShip, board, checkBoard, ships };

}