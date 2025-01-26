import React, { useState, useEffect } from 'react';
import '../../css/ShellSortVisualizer.css'; // Add some basic styles

const ShellSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);
	const [speed, setSpeed] = useState(100); // Speed in milliseconds

	// Generate a random array
	const generateRandomArray = () => {
		const array = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
		setElements(array);
	};

	// Shell Sort algorithm
	const shellSort = async (arr) => {
		let n = arr.length;

		// Start with a large gap and reduce it
		for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
			if (!running) return; // Stop if sorting is interrupted

			// Perform insertion sort for this gap
			for (let i = gap; i < n; i++) {
				if (!running) return; // Stop if sorting is interrupted

				let temp = arr[i];
				let j;
				for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
					arr[j] = arr[j - gap];
					// Update the state to trigger a re-render
					setElements([...arr]);
					// Add a delay to visualize the swap
					await new Promise(resolve => setTimeout(resolve, speed));
				}
				arr[j] = temp;
				// Update the state to trigger a re-render
				setElements([...arr]);
				// Add a delay to visualize the swap
				await new Promise(resolve => setTimeout(resolve, speed));
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
			shellSort(sortedArray);
		}
	}, [running]);

	// Generate a random array on component mount
	useEffect(() => {
		generateRandomArray();
	}, []);

	return (
		<div className="shell-sort-container">
			<h1>Shell Sort Visualizer</h1>
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
					{running ? 'Sorting...' : 'Start Shell Sort'}
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

export default ShellSortVisualizer;
