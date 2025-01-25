import React, { useState, useEffect }
	from 'react';

const ShakerSortVisualizer = () => {
	const [elements, setElements] = useState([]);
	const [running, setRunning] = useState(false);

	const generateRandomArray = () => {
		const array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
		setElements(array);
	};

	const shakerSort = async () => {
		setRunning(true);
		const arr = [...elements];
		let left = 0;
		let right = arr.length - 1;
		let swapped = true;

		while (swapped) {
			swapped = false;
			for (let i = left; i < right; i++) {
				if (arr[i] > arr[i + 1]) {
					[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
					swapped = true;
					setElements([...arr]);
					await new Promise(resolve => setTimeout(resolve, 100)); // Adjust delay as needed
				}
			}
			right--;
			for (let i = right; i > left; i--) {
				if (arr[i] < arr[i - 1]) {
					[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
					swapped = true;
					setElements([...arr]);
					await new Promise(resolve => setTimeout(resolve, 100)); // Adjust delay as needed
				}
			}
			left++;
		}

		setRunning(false);
	};

	useEffect(() => {
		generateRandomArray();
	}, []);

	return (
		<>
			<div className="shaker-sort-container">
				<h1>Shaker Sort Visualizer</h1>
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
					<button onClick={shakerSort} disabled={running}>
						{running ? "Sorting..." : "Start Shaker Sort"}
					</button>
					<button onClick={generateRandomArray} disabled={running}>
						Generate New Array
					</button>
				</div>
			</div>
		</>
	);
};

export default ShakerSortVisualizer;
