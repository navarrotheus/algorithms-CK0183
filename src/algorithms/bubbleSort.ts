export default function (V: number[]): { sortedArray: number[]; time: number } {
	const array = V;

	const inicio = performance.now();
	for (let k = 0; k < array.length - 1; k += 1) {
		for (let i = 0; i < array.length - 1 - k; i += 1) {
			if (array[i] > array[i + 1]) {
				const aux = array[i];
				array[i] = array[i + 1];
				array[i + 1] = aux;
			}
		}
	}
	const fim = performance.now();

	const time = fim - inicio;

	return { sortedArray: array, time };
}
