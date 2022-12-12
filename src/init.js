import { boardInit } from "./boardInit";
import { GameBoardFactory } from "./gameBoardFactory";
import { playGame } from "./mainGame";

boardInit;

let gameboard1 = new GameBoardFactory();
let gameboard2 = new GameBoardFactory();

playGame();

export { gameboard1, gameboard2 };