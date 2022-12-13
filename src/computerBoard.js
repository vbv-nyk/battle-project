import { gameboard2 } from "./init";

export function computer() {
    let cur = 2;
    while (cur <= 5) {
        let count = 0;
        let randomCord = Math.floor(Math.random() * 100);
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