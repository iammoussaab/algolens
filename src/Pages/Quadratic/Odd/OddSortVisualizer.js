import React, { useState, useEffect } from 'react';
import '../../css/OddSortVisualizer.css'; // Add some basic styles

const OddSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);
	const [speed, setSpeed] = useState(50); // Speed in milliseconds

	// Generate a random array
	const generateRandomArray = () => {
		const array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
		setElements(array);
	};

	// Compare two elements
	const compare = (arr, i, j) => {
		return arr[i] > arr[j];
	};

	// Swap two elements with a delay
	const swap = async (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
		// Update the state to trigger a re-render
		setElements([...arr]);
		// Add a delay to visualize the swap
		await new Promise(resolve => setTimeout(resolve, speed));
	};

	// Odd-Even Sort algorithm
	const oddEvenSort = async (arr) => {
		let sorted = false;
		while (!sorted) {
			sorted = true;

			// Odd phase
			for (let i = 1; i < arr.length - 1; i += 2) {
				if (!running) return; // Stop if sorting is interrupted
				if (compare(arr, i, i + 1)) {
					await swap(arr, i, i + 1);
					sorted = false;
				}
			}

			// Even phase
			for (let i = 0; i < arr.length - 1; i += 2) {
				if (!running) return; // Stop if sorting is interrupted
				if (compare(arr, i, i + 1)) {
					await swap(arr, i, i + 1);
					sorted = false;
				}
			}
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
			oddEvenSort(sortedArray);
		}
	}, [running]);

	// Generate a random array on component mount
	useEffect(() => {
		generateRandomArray();
	}, []);

	return (
		<div className="odd-sort-container">
			<h1>Odd-Even Sort Visualizer</h1>
			<div className="bars-container">
				{elements.map((value, index) => (
					<div
						key={index}
						className="bar"
						style={{
							height: `${value * 3}px`, // Make the bar height proportional to the value
							backgroundColor: index % 2 === 0 ? 'blue' : 'red',
						}}
					/>
				))}
			</div>
			<div className="controls-container">
				<button onClick={run} disabled={running}>
					{running ? 'Sorting...' : 'Start Odd-Even Sort'}
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

export default OddSortVisualizer;
