import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: stretch;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	button {
		margin-top: 16px;
	}
`;

export const Graph = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;

	.array-bar {
		width: 10px;
		background-color: pink;
		display: inline-block;
		margin: 0 1px;
	}
`;
