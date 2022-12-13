import { gameboard1, gameboard2 } from "./init";

let player = false;
export function updateCurrentPlayer() {
    if (player) {
        gameboard2.enabled = true;
        gameboard1.enabled = false;
        player = false;
    } else {
        gameboard2.enabled = false;
        gameboard1.enabled = true;
        player = true;
    }
}