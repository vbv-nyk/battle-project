import { GameBoardFactory } from "./gameBoardFactory"
import { shipFactory } from "./shipFactory";
let board = [];
function clearBoard() {
    for (let i = 0; i < 10; i++) {
        board[i] = [];
        for (let j = 0; j < 10; j++) {
            board[i][j] = false;
        }
    }
};
test("createShip x axis", () => {
    let gameBoard1 = new GameBoardFactory();
    clearBoard();
    board[0][0] = 2;
    board[0][1] = 2;
    expect(gameBoard1.createShip(0, 0, "x-axis")).toEqual(board);
});
test("createShip y axis", () => {
    let gameBoard1 = new GameBoardFactory();
    clearBoard();
    board[0][0] = 2;
    board[1][0] = 2;
    expect(gameBoard1.createShip(0, 0, "y-axis")).toEqual(board);
});
test("createShip out of bounds y axis", () => {
    let gameBoard1 = new GameBoardFactory();
    expect(gameBoard1.createShip(9, 9, "y-axis")).toEqual(false);
});

test("createShip out of bounds x axis", () => {
    let gameBoard1 = new GameBoardFactory();
    expect(gameBoard1.createShip(9, 9, "x-axis")).toEqual(false);
});

test("createShip out of bounds outside board", () => {
    let gameBoard1 = new GameBoardFactory();
    expect(gameBoard1.createShip(50, 50, "x-axis")).toEqual(false);
});

test("createShip where ship exists x-axis", () => {
    let gameBoard1 = new GameBoardFactory();
    gameBoard1.createShip(0, 0, "x-axis");
    expect(gameBoard1.createShip(0, 0, "x-axis")).toBe(false);
});

test("createShip where ship exists y-axis", () => {
    let gameBoard1 = new GameBoardFactory();
    clearBoard();
    board[0][0] = 2;
    board[1][0] = 2;
    expect(gameBoard1.createShip(0, 0, "y-axis")).toEqual(board);
    expect(gameBoard1.createShip(0, 0, "y-axis")).toBe(false);
});

test("checkBoard game not over", () => {
    let gameBoard1 = new GameBoardFactory();
    gameBoard1.board[0][0] = true;
    expect(gameBoard1.checkBoard()).toEqual(false);
});

test("checkBoard game over", () => {
    let gameBoard1 = new GameBoardFactory();
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            gameBoard1.board[i][j] = 0;
        }
    }
    expect(gameBoard1.checkBoard()).toEqual(true);
});

test("clearBoard game not over", () => {
    let gameBoard1 = new GameBoardFactory();
    clearBoard();
    expect(gameBoard1.clearBoard()).toEqual(board);
});

test("hitCords hit pass", () => {
    let gameBoard1 = new GameBoardFactory();
    clearBoard();
    gameBoard1.board[0][0] = true;
    expect(gameBoard1.hitCord(0, 0)).toEqual(true);
});

test("hitCords hit fail", () => {
    let gameBoard1 = new GameBoardFactory();
    clearBoard();
    expect(gameBoard1.hitCord(0, 0)).toEqual(false);
});

test("hitCords hit ship", () => {
    let gameBoard1 = new GameBoardFactory();
    gameBoard1.createShip(0, 0, "y-axis")
    expect(gameBoard1.hitCord(0, 0)).toEqual(true);
});

test("hitCords hit missed", () => {
    let gameBoard1 = new GameBoardFactory();
    gameBoard1.createShip(0, 0, "y-axis")
    expect(gameBoard1.hitCord(1, 1)).toEqual(false);
});
