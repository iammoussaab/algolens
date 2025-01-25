import React, { useState, useEffect } from 'react';
import './PancakeSortVisualizer.css';

const PancakeSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);
	const [speed, setSpeed] = useState(100);

	const generateRandomArray = () => {
		const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
		setElements(array);
	};

	const flip = async (arr, k) => {
		let i = 0;
		while (i < k) {
			[arr[i], arr[k]] = [arr[k], arr[i]];
			i++;
			k--;
		}
		setElements([...arr]);
		await new Promise(resolve => setTimeout(resolve, speed));
	};

	const findMaxIndex = (arr, n) => {
		let maxIndex = 0;
		for (let i = 0; i < n; i++) {
			if (arr[i] > arr[maxIndex]) {
				maxIndex = i;
			}
		}
		return maxIndex;
	};

	const pancakeSort = async (arr) => {
		let n = arr.length;
		while (n > 1) {
			if (!running) return;
			const maxIndex = findMaxIndex(arr, n);
			if (maxIndex !== 0) {
				await flip(arr, maxIndex);
			}
			await flip(arr, n - 1);
			n--;
		}
		setRunning(false);
	};

	const run = () => {
		if (running) return;
		setRunning(true);
	};

	useEffect(() => {
		if (running) {
			const sortedArray = [...elements];
			pancakeSort(sortedArray);
		}
	}, [running]);

	useEffect(() => {
		generateRandomArray();
	}, []);

	return (
		<div className="pancake-sort-container">
			<h1>Pancake Sort Visualizer</h1>
			<div className="bars-container">
				{elements.map((value, index) => (
					<div
						key={index}
						className="bar"
						style={{
							height: `${value * 3}px`,
							backgroundColor: `hsl(${value * 3}, 70%, 50%)`,
						}}
					/>
				))}
			</div>
			<div className="controls-container">
				<button onClick={run} disabled={running}>
					{running ? 'Sorting...' : 'Start Pancake Sort'}
				</button>
				<button onClick={generateRandomArray} disabled={running}>
					Generate New Array
				</button>
				<div className="speed-control">
					<label htmlFor="speed">Speed:</label>
					<input
						type="range"
						id="speed"
						min="10"
						max="500"
						value={speed}
						onChange={(e) => setSpeed(Number(e.target.value))}
						disabled={running}
					/>
					<span>{speed} ms</span>
				</div>
			</div>
		</div>
	);
};

export default PancakeSortVisualizer;
