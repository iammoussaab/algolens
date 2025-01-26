import React, { useState, useEffect } from "react";
import "../../css/HeapSortVisualizer.css"; // Import the CSS file

const HeapSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);

	useEffect(() => {
		generateRandomArray();
	}, []);

	const generateRandomArray = () => {
		const randomArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
		setElements(randomArray);
	};

	const swap = async (arr, i, j) => {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		setElements([...arr]);
		await new Promise((resolve) => setTimeout(resolve, 100));
	};

	const compare = (a, b) => {
		return a > b;
	};

	const heapify = async (arr, length, i) => {
		let largest = i;
		const left = 2 * i + 1;
		const right = 2 * i + 2;

		if (left < length && compare(arr[left], arr[largest])) {
			largest = left;
		}

		if (right < length && compare(arr[right], arr[largest])) {
			largest = right;
		}

		if (largest !== i) {
			await swap(arr, i, largest);
			await heapify(arr, length, largest);
		}
	};

	const heapSort = async () => {
		setRunning(true);
		let arr = [...elements];
		let length = arr.length;

		for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
			await heapify(arr, length, i);
		}

		for (let i = length - 1; i > 0; i--) {
			await swap(arr, 0, i);
			await heapify(arr, i, 0);
		}

		setRunning(false);
	};

	return (
		<div className="sort-algorithm-container">
			<h1>Heap Sort Visualizer</h1>
			<div className="bars-container">
				{elements.map((value, index) => (
					<div
						key={index}
						className="bar"
						style={{ height: `${value * 3}px` }}
					/>
				))}
			</div>
			<div className="controls-container">
				<button id="start-button" onClick={heapSort} disabled={running}>
					{running ? "Sorting..." : "Start Heap Sort"}
				</button>
				<button onClick={generateRandomArray} disabled={running}>
					Generate New Array
				</button>
			</div>
		</div>
	);
};

export default HeapSortVisualizer;
