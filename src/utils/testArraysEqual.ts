export default function (array1: number[], array2: number[]): boolean {
	if (array1.length !== array2.length) return false;

	for (let i = 0; i < array1.length; i += 1) {
		if (array1[i] !== array2[i]) return false;
	}

	return true;
}
