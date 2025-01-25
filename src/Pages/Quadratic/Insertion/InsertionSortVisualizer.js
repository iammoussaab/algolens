import React, { useState, useEffect } from 'react';

const InsertionSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);

	const generateRandomArray = () => {
		const array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
		setElements(array);
	};

	const insertionSort = async () => {
		setRunning(true);
		const arr = [...elements];
		const length = arr.length;

		for (let i = 1; i < length; i++) {
			let key = arr[i];
			let j = i - 1;

			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j = j - 1;
				setElements([...arr]);
				await new Promise(resolve => setTimeout(resolve, 100)); // Adjust delay as needed
			}
			arr[j + 1] = key;
			setElements([...arr]);
			await new Promise(resolve => setTimeout(resolve, 100)); // Adjust delay as needed
		}

		setRunning(false);
	};

	useEffect(() => {
		generateRandomArray();
	}, []);

	return (
		<>
			<div className="insertion-sort-container">
				<h1>Insertion Sort Visualizer</h1>
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
					<button onClick={insertionSort} disabled={running}>
						{running ? "Sorting..." : "Start Insertion Sort"}
					</button>
					<button onClick={generateRandomArray} disabled={running}>
						Generate New Array
					</button>
				</div>
			</div>
		</>
	);
};

export default InsertionSortVisualizer;
