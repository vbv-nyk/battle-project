export function shipFactory(count) {
	const ship = {
		hitCount: 0,
		isSunk: false,
		length: count,
	};

	const hit = function () {
		ship.hitCount++;
		if (ship.hitCount == ship.length) {
			ship.isSunk = true;
		}
	}

	return { ship, hit };
}
