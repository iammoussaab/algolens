import React, { useState, useEffect } from 'react';

const SelectionSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);

	const generateRandomArray = () => {
		const array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
		setElements(array);
	};

	const swap = async (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
		setElements([...arr]);
		await new Promise(resolve => setTimeout(resolve, 100)); // Adjust delay as needed
	};

	const selectionSort = async () => {
		setRunning(true);
		const arr = [...elements];
		const length = arr.length;

		for (let i = 0; i < length - 1; i++) {
			let minIndex = i;
			for (let j = i + 1; j < length; j++) {
				if (arr[j] < arr[minIndex]) {
					minIndex = j;
				}
			}
			if (minIndex !== i) {
				await swap(arr, i, minIndex);
			}
		}

		setRunning(false);
	};

	useEffect(() => {
		generateRandomArray();
	}, []);

	return (
		<div className="selection-sort-container">
			<h1>Selection Sort Visualizer</h1>
			<div className="bars-container">
				{elements.map((value, index) => (
					<div
						key={index}
						className="bar"
						style={{ height: `${value * 3}px` }}
					/>
				))}
			</div>
			<div className="buttons-container">
				<button onClick={selectionSort} disabled={running}>
					{running ? "Sorting..." : "Start Selection Sort"}
				</button>
				<button onClick={generateRandomArray} disabled={running}>
					Generate New Array
				</button>
			</div>
		</div>
	);
};

export default SelectionSortVisualizer;
