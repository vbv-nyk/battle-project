import { resetBoard } from "./boardInit";
import { computer, computerPlays } from "./computerBoard";
import { gameboard1, gameboard2, resetGame } from "./init";
import { shipFactory } from "./shipFactory";
const axis = document.querySelector(".axis");
export function GameBoardFactory(name) {
    let count = 2;
    let ships = [];
    let board = [];
    let enabled = true;
    function clearBoard() {
        for (let i = 0; i < 10; i++) {
            board[i] = [];
            for (let j = 0; j < 10; j++) {
                board[i][j] = false;
            }
        }
        return board;
    };

    function createShip(x, y, axis, dataNum) {
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
                const curBox = document.querySelector(`.board-${name}.board-item[data-num="${Number(dataNum) + (i - y)}"]`)
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
                const curBox = document.querySelector(`.board-${name}.board-item[data-num="${Number(dataNum) + (i - x) * 10}"]`)
                curBox.textContent = count;
            }
            count++;
        }
        if (count == 6 && name == "1") {
            gameboard2.enabled = true;
        }
        return true;
    }

    function checkBoard() {
        let gameOver = board.every(function (row) {
            return row.every(function (item) {
                return item == false;
            });
        });
        boardInnit;
        return gameOver;
    }

    function initializeShips() {
        clearBoard();
    }

    let boardInnit = function () {
        clearBoard();
        initializeShips();
    }()


    function hitCord(x, y, dataNum) {
        const chosenBoardItem = document.querySelector(`.board-${name}.board-item[data-num="${dataNum}"]`);
        if (count > 5) {
            if (this.enabled === false) {
                return false;
            }
            if (board[x][y] !== 0) {
                if (board[x][y] == false) {
                    board[x][y] = 0;
                    chosenBoardItem.textContent = "0";
                } else {
                    ships[board[x][y]].hit();
                    board[x][y] = 0;
                    chosenBoardItem.textContent = "X";
                }
                if (checkBoard()) {
                    if (this.name == "1") {
                        alert("Computer won");
                    } else {
                        alert("Player 1 won");
                    }
                    resetGame();
                    return true;
                }
                if (this.name == "1") {
                    return true;
                } else {
                    return computerPlays();
                }
            } else {
                return false;
            }
        } else {
            return createShip(x, y, axis.textContent, dataNum);
        }
    }

    return { boardInnit, hitCord, clearBoard, createShip, board, checkBoard, ships, name, enabled, count };

}