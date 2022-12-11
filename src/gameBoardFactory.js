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

    function createShip(length, x, y, axis) {
        ships[length] = new shipFactory(length);
        if (x > 9 || y > 9)
            return false;

        if (axis == "x-axis") {
            if (y + length > 10) return false;
            for (let i = y; i < y + length; i++)
                board[x][i] = length;
        } else {
            if (x + length > 10) return false;
            for (let i = x; i < x + length; i++)
                board[i][y] = length;
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