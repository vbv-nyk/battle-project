import { boardInit, boardInnit } from "./boardInnit";
import { GameBoardFactory } from "./gameBoardFactory";
import { playGame } from "./mainGame";

boardInit;

let gameboard1 = new GameBoardFactory();
let gameboard2 = new GameBoardFactory();


playGame(gameboard1, gameboard2);
