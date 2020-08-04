/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import { Container, Content, Graph, Buttons, Time } from './styles';

import resetArray from '../../utils/functions/resetArray';
import copyArray from '../../utils/functions/copyArray';

import bubbleSort from '../../algorithms/bubbleSort';

const Home: React.FC = () => {
	const [array, setArray] = useState<number[]>([]);
	const [time, setTime] = useState<number>();

	const handleGenerateNewArrayButton = (): void => {
		const newArray = resetArray();
		setArray(newArray);
	};

	const handleBubbleSortButton = (): void => {
		const { sortedArray, time: timeBubblesort } = bubbleSort(copyArray(array));

		setArray(sortedArray);
		setTime(timeBubblesort);
	};

	useEffect(() => {
		const arr = resetArray();
		setArray(arr);
	}, []);

	return (
		<Container>
			<Content>
				<Time>
					<h3>{time && `${time} ms`}</h3>
				</Time>

				<Graph>
					{array.map((value, idx) => (
						<div
							className="array-bar"
							key={idx}
							style={{ height: `${value}px` }}
						/>
					))}
				</Graph>

				<Buttons>
					<button type="button" onClick={handleGenerateNewArrayButton}>
						Gerar novo array
					</button>

					<button type="button" onClick={handleBubbleSortButton}>
						Bubble sort
					</button>
				</Buttons>
			</Content>
		</Container>
	);
};

export default Home;
