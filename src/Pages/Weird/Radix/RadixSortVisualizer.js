import React, { useState, useEffect, useRef } from 'react';

const RadixSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);
	const [speed, setSpeed] = useState(100);
	const runningRef = useRef(running);

	// Generate a random array of numbers
	const generateRandomArray = () => {
		const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
		setElements(array);
	};

	// Radix Sort implementation with visualization
	const radixBucketSort = async () => {
		if (running) return; // Prevent multiple runs
		setRunning(true);
		runningRef.current = true;

		let delay = speed;
		let maxDigits = Math.max(...elements).toString().length; // Find max digits in the array
		let buckets = Array.from({ length: 10 }, () => []);

		for (let digit = 0; digit < maxDigits; digit++) {
			// Place numbers into buckets based on the current digit
			for (let num of elements) {
				if (!runningRef.current) return;
				const digitValue = Math.floor(num / Math.pow(10, digit)) % 10;
				buckets[digitValue].push(num);
			}

			// Flatten buckets back into the array
			let index = 0;
			for (let i = 0; i < buckets.length; i++) {
				while (buckets[i].length > 0) {
					if (!runningRef.current) return;
					const val = buckets[i].shift();
					elements[index] = val;
					setElements([...elements]); // Trigger re-render for visualization
					index++;
					await new Promise(resolve => setTimeout(resolve, delay)); // Visualization delay
				}
			}
		}

		setRunning(false);
		runningRef.current = false;
	};

	// Start the sorting process
	const run = async () => {
		if (running) return;
		await radixBucketSort();
	};

	// Generate a random array on component mount
	useEffect(() => {
		generateRandomArray();
	}, []);

	return (
		<div className="radix-sort-container">
			<h1>Radix Sort Visualizer</h1>
			<div className="bars-container">
				{elements.map((value, index) => (
					<div
						key={index}
						className="bar"
						style={{
							height: `${value}%`,
							backgroundColor: `hsl(${value * 3.6}, 70%, 50%)`,
						}}
					></div>
				))}
			</div>
			<div className="controls-container">
				<button onClick={run} disabled={running}>
					{running ? 'Sorting...' : 'Start Radix Sort'}
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

export default RadixSortVisualizer;
