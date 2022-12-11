import { shipFactory } from "./shipFactory";

export let loadGame = function () {
    let count = 2;
    let ship = [];
    while (count <= 5) {
        ship[count] = new shipFactory(count);
        console.log(ship[count]);
        count++;
    }
}(); 
