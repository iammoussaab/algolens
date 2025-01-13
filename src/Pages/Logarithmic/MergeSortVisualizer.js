import React, { useState } from 'react';
import './MergeSortVisualizer.css';

const mergeSort = async (array, setArray, delay) => {
	if (array.length <= 1) return array;

	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	const sortedLeft = await mergeSort(left, setArray, delay);
	const sortedRight = await mergeSort(right, setArray, delay);

	return await merge(sortedLeft, sortedRight, setArray, delay);
};

const merge = async (left, right, setArray, delay) => {
	let resultArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			resultArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			resultArray.push(right[rightIndex]);
			rightIndex++;
		}
		setArray([...resultArray, ...left.slice(leftIndex), ...right.slice(rightIndex)]);
		await new Promise(resolve => setTimeout(resolve, delay));
	}

	resultArray = [...resultArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
	setArray(resultArray);
	return resultArray;
};

const MergeSortVisualizer = () => {
	const [array, setArray] = useState([]);

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

	const startSort = () => {
		const delay = parseInt(document.getElementById('speed').value, 10);
		mergeSort(array, setArray, delay);
	};

	return (
		<div className="merge-sort-visualizer">
			<div className="controls">
				<label>
					Array Size:
					<input type="number" id="arraySize" defaultValue={10} />
				</label>
				<label>
					Min Value:
					<input type="number" id="minValue" defaultValue={1} />
				</label>
				<label>
					Max Value:
					<input type="number" id="maxValue" defaultValue={100} />
				</label>
				<label>
					Sorting Speed:
					<input type="range" id="speed" min="10" max="1000" defaultValue={100} />
				</label>
				<button id="generateArray" onClick={generateArray}>Generate Array</button>
				<button id="startSort" onClick={startSort}>Start Sort</button>
			</div>
			<div id="sort-container">
				{array.map((value, index) => (
					<div
						key={index}
						className="element"
						style={{
							left: `${(index / array.length) * 100}%`,
							width: `${100 / array.length}%`,
							height: `${(value / Math.max(...array)) * 100}%`
						}}
					></div>
				))}
			</div>
		</div>
	);
};

export default MergeSortVisualizer;
