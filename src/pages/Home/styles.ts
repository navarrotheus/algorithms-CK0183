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
	height: 600px;

	.array-bar {
		width: 10px;
		background-color: pink;
		display: inline-block;
		margin: 0 1px;
	}
`;

export const Buttons = styled.div`
	display: flex;

	button {
		margin-right: 12px;

		background: white;
		border: none;

		color: #333333;

		padding: 6px 12px;

		&:last-child {
			margin-right: 0;
		}
	}
`;

export const Time = styled.div`
	height: 32px;

	h3 {
		font-size: 24px;
	}

	margin-bottom: 48px;
`;
