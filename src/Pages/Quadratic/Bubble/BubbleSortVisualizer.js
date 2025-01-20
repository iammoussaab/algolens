import React, { useState, useEffect, useCallback } from "react";
import "./BubbleSortVisualizer.css";

const BubbleSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);

	// Generate a new random array
	const generateRandomArray = useCallback(() => {
		if (running) return;
		const randomArray = Array.from({ length: 50 }, () =>
			Math.floor(Math.random() * 100)
		);
		setElements(randomArray);
	}, [running]);

	useEffect(() => {
		generateRandomArray();
	}, [generateRandomArray]);

	const swap = async (arr, i, j) => {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		setElements([...arr]);
		await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust speed here
	};

	const bubbleSort = async () => {
		setRunning(true);
		let arr = [...elements];
		const length = arr.length;

		for (let i = 0; i < length - 1; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					await swap(arr, j, j + 1);
				}
			}
		}

		setRunning(false);
	};

	return (
		<div className="bubble-sort-container">
			<h1>Bubble Sort Visualizer</h1>
			<div className="bars-container">
				{elements.map((value, index) => (
					<div
						key={index}
						className="bar"
						style={{ height: `${value * 3}px` }} />
				))}
			</div>
			<div className="buttons-container">
				<button onClick={bubbleSort} disabled={running}>
					{running ? "Sorting..." : "Start Bubble Sort"}
				</button>
				<button onClick={generateRandomArray} disabled={running}>
					Generate New Array
				</button>
			</div>
		</div>
	);
};

export default BubbleSortVisualizer;
