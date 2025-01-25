import React, { useState } from 'react';

const GnomeSortVisualizer = () => {
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

	const gnomeSort = async () => {
		setRunning(true);
		const arr = [...elements];
		const length = arr.length;
		let i = 0;
		while (i < length) {
			if (i === 0) i++;
			if (arr[i] >= arr[i - 1]) i++;
			else {
				await swap(arr, i, i - 1);
				i--;
			}
		}
		setRunning(false);
	};

	return (
		<div className="gnome-sort-container">
			<h1>Gnome Sort Visualizer</h1>
			<div className="bars-container">
				{elements.map((value, index) => (
					<div
						key={index}
						className="bar"
						style={{ height: `${value * 3}px` }}
					/>
				))}
				<button onClick={gnomeSort} disabled={running}>
					{running ? "Sorting..." : "Start Gnome Sort"}
				</button>
				<button onClick={generateRandomArray} disabled={running}>
					Generate New Array
				</button>
			</div>
		</div>
	);
}

export default GnomeSortVisualizer;
