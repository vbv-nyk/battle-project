import { shipFactory } from "./shipFactory";

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

    function createShip(x, y, axis) {
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
            for (let i = y; i < y + count; i++)
                board[x][i] = count;
            count++;
        } else {
            if (x + count > 10) return false;
            for (let i = x; i < x + count; i++) {
                if (board[i][y] >= 1) {
                    return false;
                }
            }
            for (let i = x; i < x + count; i++)
                board[i][y] = count;
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


    let hitCord = function (x, y) {
        if (board[x][y] != 0) {
            if (board[x][y] === true) {
                board[x][y] = 0;
            } else {
                ships[board[x][y]].ship.hitCount++;
                board[x][y] = 0;
            }
            return true;
        } else {
            return false;
        }
    }

    return { boardInnit, hitCord, clearBoard, createShip, board, checkBoard, ships };

}