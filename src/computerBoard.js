import { gameboard2 } from "./init";
const axis = document.querySelector(".axis");

export function computer() {
    let cur = 2;
    while (cur <= 5) {
        let count = 0;
        let randomCord = Math.floor(Math.random() * 100);
        let randomAxis = Math.round(Math.random());
        axis.textContent = randomAxis ? "x-axis" : "y-axis";
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (count == randomCord) {
                    if (gameboard2.hitCord(i, j, randomCord)) {
                        cur++;
                    };
                }
                count++;
            }
        }
    }
}