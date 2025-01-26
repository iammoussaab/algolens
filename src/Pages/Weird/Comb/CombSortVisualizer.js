import React, { useState, useEffect } from 'react';
import '../../css/CombSortVisualizer.css'; // Add some basic styles

const CombSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);
	const [speed, setSpeed] = useState(100); // Speed in milliseconds

	// Generate a random array
	const generateRandomArray = () => {
		const array = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
		setElements(array);
	};

	// Comb Sort algorithm
	const combSort = async (arr) => {
		let n = arr.length;
		let gap = n;
		let shrink = 1.3; // Shrink factor
		let sorted = false;

		while (!sorted) {
			if (!running) return; // Stop if sorting is interrupted

			// Update the gap
			gap = Math.floor(gap / shrink);
			if (gap <= 1) {
				gap = 1;
				sorted = true; // Final pass
			}

			// Compare elements that are `gap` apart
			for (let i = 0; i + gap < n; i++) {
				if (!running) return; // Stop if sorting is interrupted

				if (arr[i] > arr[i + gap]) {
					// Swap elements
					[arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
					sorted = false; // Array is not fully sorted yet

					// Update the state to trigger a re-render
					setElements([...arr]);
					// Add a delay to visualize the swap
					await new Promise(resolve => setTimeout(resolve, speed));
				}
			}
		}
		setRunning(false); // Reset running state after sorting is complete
	};

	// Run the sorting algorithm
	const run = () => {
		if (running) return; // Prevent multiple clicks
		setRunning(true);
	};

	// Trigger sorting when running state changes
	useEffect(() => {
		if (running) {
			const sortedArray = [...elements]; // Create a copy of the array
			combSort(sortedArray);
		}
	}, [running]);

	// Generate a random array on component mount
	useEffect(() => {
		generateRandomArray();
	}, []);

	return (
		<div className="comb-sort-container">
			<h1>Comb Sort Visualizer</h1>
			<div className="bars-container">
				{elements.map((value, index) => (
					<div
						key={index}
						className="bar"
						style={{
							height: `${value * 3}px`, // Make the bar height proportional to the value
							backgroundColor: `hsl(${value * 3}, 70%, 50%)`, // Color based on value
						}}
					/>
				))}
			</div>
			<div className="controls-container">
				<button onClick={run} disabled={running}>
					{running ? 'Sorting...' : 'Start Comb Sort'}
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

export default CombSortVisualizer;
