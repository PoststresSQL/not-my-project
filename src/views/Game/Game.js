import React, { Component, useState } from 'react';
import { TilesContainer } from '../../containers/Tiles';
import './game.css';

export class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0
		};
	}

	incrementClicks = () => {
		this.setState((previousState) => {
			return {
				clicks: previousState.clicks + 1
			};
		});
	};

	render() {
		return (
			<div className={'game-container'}>
				<TilesContainer
					cols={this.props.cols}
					rows={this.props.rows}
					clicks={this.state.clicks}
					stopTimer={this.props.stopTimer}
					incrementClicks={this.incrementClicks}
				/>
				<span className={'clicks'}>Clicks: {this.state.clicks} </span>
				<span className={'timer'}>
					Timer:
					{` ${this.props.time} s`}
				</span>
			</div>
		);
	}
}

export default Game;

// export const Game = ({ rows, cols, time, stopTimer }) => {
// 	const [clicks, setClicks] = useState(0);
// 	return (
// 		<div className={'game-container'}>
// 			<TilesContainer
// 				cols={cols}
// 				rows={rows}
// 				clicks={clicks}
// 				setClicks={setClicks}
// 				stopTimer={stopTimer}
// 			/>
// 			<span className={'clicks'}>Clicks: {clicks} </span>
// 			<span className={'timer'}>
// 				Timer:
// 				{` ${time} s`}
// 			</span>
// 		</div>
// 	);
// };
