import React, { useState, useEffect } from 'react';
import '../../css/BitonicSortVisualizer.css'; // Add some basic styles

const BitonicSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);
	const [speed, setSpeed] = useState(100); // Speed in milliseconds

	// Generate a random array
	const generateRandomArray = () => {
		const array = Array.from({ length: 32 }, () => Math.floor(Math.random() * 100));
		setElements(array);
	};

	// Swap two elements with a delay
	const swap = async (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
		// Update the state to trigger a re-render
		setElements([...arr]);
		// Add a delay to visualize the swap
		await new Promise(resolve => setTimeout(resolve, speed));
	};

	// Compare and swap elements in a bitonic sequence
	const compareAndSwap = async (arr, i, j, dir) => {
		if ((arr[i] > arr[j] && dir === 1) || (arr[i] < arr[j] && dir === 0)) {
			await swap(arr, i, j);
		}
	};

	// Bitonic merge
	const bitonicMerge = async (arr, low, cnt, dir) => {
		if (cnt > 1) {
			const k = Math.floor(cnt / 2);
			for (let i = low; i < low + k; i++) {
				await compareAndSwap(arr, i, i + k, dir);
			}
			await bitonicMerge(arr, low, k, dir);
			await bitonicMerge(arr, low + k, k, dir);
		}
	};

	// Bitonic sort
	const bitonicSort = async (arr, low, cnt, dir) => {
		if (cnt > 1) {
			const k = Math.floor(cnt / 2);
			await bitonicSort(arr, low, k, 1); // Sort first half in ascending order
			await bitonicSort(arr, low + k, k, 0); // Sort second half in descending order
			await bitonicMerge(arr, low, cnt, dir); // Merge the two halves
		}
	};

	// Run the sorting algorithm
	const run = async () => {
		if (running) return; // Prevent multiple clicks
		setRunning(true);

		const sortedArray = [...elements]; // Create a copy of the array
		await bitonicSort(sortedArray, 0, sortedArray.length, 1); // Sort in ascending order

		setRunning(false); // Reset running state after sorting is complete
	};

	// Generate a random array on component mount
	useEffect(() => {
		generateRandomArray();
	}, []);

	return (
		<div className="bitonic-sort-container">
			<h1>Bitonic Sort Visualizer</h1>
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
					{running ? 'Sorting...' : 'Start Bitonic Sort'}
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

export default BitonicSortVisualizer;
