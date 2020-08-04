function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function (): number[] {
	const array: number[] = [];
	for (let i = 0; i < 100; i += 1) {
		array.push(randomIntFromInterval(5, 600));
	}
	return array;
}
