import React, { useState } from 'react';
import '../../css/QuickSortVisualizer.css';

const quickSort = async (array, left, right, setArray, delay) => {
	if (left >= right) return;

	const pivotIndex = await partition(array, left, right, setArray, delay);
	await quickSort(array, left, pivotIndex - 1, setArray, delay);
	await quickSort(array, pivotIndex + 1, right, setArray, delay);
};

const partition = async (array, left, right, setArray, delay) => {
	const pivotValue = array[right];
	let pivotIndex = left;

	for (let i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			[array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
			pivotIndex++;
		}
		setArray([...array]);
		await new Promise(resolve => setTimeout(resolve, delay));
	}

	[array[pivotIndex], array[right]] = [array[right], array[pivotIndex]];
	setArray([...array]);
	await new Promise(resolve => setTimeout(resolve, delay));

	return pivotIndex;
};

const QuickSortVisualizer = () => {
	const [array, setArray] = useState([]);
	const [running, setRunning] = useState(false);

	// Generate a random array
	const generateArray = () => {
		const arraySize = parseInt(document.getElementById('arraySize').value, 10);
		const minValue = parseInt(document.getElementById('minValue').value, 10);
		const maxValue = parseInt(document.getElementById('maxValue').value, 10);

		if (isNaN(arraySize) || arraySize <= 0 || minValue > maxValue) {
			alert("Please enter valid input values.");
			return;
		}

		const newArray = Array.from({ length: arraySize }, () =>
			Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
		);

		setArray(newArray);
	};

	// Start the Quick Sort
	const startSort = () => {
		setRunning(true);
		const delay = parseInt(document.getElementById('speed').value, 10);
		quickSort([...array], 0, array.length - 1, setArray, delay).then(() => {
			setRunning(false);
		});
	};

	return (
		<div className="quick-sort-container">
			<h1>Quick Sort Visualizer</h1>
			<div className="controls">
				<label>
					Array Size:
					<input type="number" id="arraySize" defaultValue={10} min="5" max="100" />
				</label>
				<label>
					Min Value:
					<input type="number" id="minValue" defaultValue={1} min="1" max="100" />
				</label>
				<label>
					Max Value:
					<input type="number" id="maxValue" defaultValue={100} min="10" max="1000" />
				</label>
				<label>
					Sorting Speed:
					<input type="range" id="speed" min="10" max="1000" defaultValue={100} />
				</label>
				<button onClick={generateArray} disabled={running}>
					Generate New Array
				</button>
				<button onClick={startSort} disabled={running}>
					{running ? "Sorting..." : "Start Quick Sort"}
				</button>
			</div>

			<div className="bars-container">
				{array.map((value, index) => (
					<div
						key={index}
						className="bar"
						style={{
							height: `${(value / Math.max(...array)) * 100}%`,
							width: `${100 / array.length}%`,
							left: `${(index / array.length) * 100}%`,
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default QuickSortVisualizer;
