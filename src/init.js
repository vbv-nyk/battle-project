import { shipFactory } from "./shipFactory";
let ships = [];

function loadShips() {
    let count = 2;
    while (count <= 5) {
        ships[count] = new shipFactory(count);
        count++;
    }
}

export let loadGame = function () {
    loadShips();
}(); 
