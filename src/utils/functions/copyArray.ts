export default function (array: number[]): number[] {
	const copy: number[] = [];

	for (let i = 0; i < array.length; i += 1) {
		copy.push(array[i]);
	}

	return copy;
}
