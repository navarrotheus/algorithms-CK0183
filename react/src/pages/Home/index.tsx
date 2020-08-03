/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import { Container, Content, Graph } from './styles';

import resetArray from '../../utils/functions/resetArray';
import bubbleSort from '../../algorithms/bubbleSort';

const Home: React.FC = () => {
	const [array, setArray] = useState<number[]>([]);

	const handleGenerateNewArrayButton = (): void => {
		const newArray = resetArray();
		setArray(newArray);
	};

	useEffect(() => {
		const arr = resetArray();
		setArray(arr);
	}, []);

	return (
		<Container>
			<Content>
				<Graph>
					{array.map((value, idx) => (
						<div
							className="array-bar"
							key={idx}
							style={{ height: `${value}px` }}
						/>
					))}
				</Graph>

				<button type="button" onClick={handleGenerateNewArrayButton}>
					Gerar novo array
				</button>
			</Content>
		</Container>
	);
};

export default Home;
