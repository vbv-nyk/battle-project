export function shipFactory(count) {
	const ship = {
		hitCount: 0,
		isSunk: false,
		length: count,
	};
	return ship;
}
