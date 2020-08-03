export default function (V: number[]): number[] {
	for (let i = 0; i < V.length; i += 1) {
		if (V[i] > V[i + 1]) {
			const aux = V[i];
			V[i] = V[i + 1];
			V[i + 1] = aux;
		}
	}

	return V;
}
