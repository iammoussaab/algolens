import './SortAlgorithm.css'; // Assuming you'll create this CSS file for styling

const SortAlgorithm = () => {
	return (
		<>
			<div className="sort-algorithm-container">
				<h1>What is a Sorting Algorithm?</h1>
				<div className="sort-algorithm-info">
					<p>
						A sorting algorithm is a method for organizing a list of items in a particular order, such as ascending or descending. Sorting algorithms are essential in computer science for optimizing the efficiency of other algorithms that require sorted data.
					</p>
					<h2>Types of Sorting Algorithms</h2>
					<ul>
						<li><strong>Bubble Sort:</strong> A simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</li>
						<li><strong>Quick Sort:</strong> An efficient divide-and-conquer algorithm that selects a pivot element and partitions the array into two sub-arrays, which are then sorted independently.</li>
						<li><strong>Merge Sort:</strong> A stable, comparison-based algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves.</li>
						<li><strong>Insertion Sort:</strong> A simple algorithm that builds the final sorted array one item at a time by repeatedly picking the next item and inserting it into the correct position.</li>
						<li><strong>Heap Sort:</strong> A comparison-based algorithm that uses a binary heap data structure to sort elements.</li>
					</ul>
					<h2>Why Sorting Algorithms Matter</h2>
					<p>
						Sorting algorithms are crucial for optimizing the performance of other algorithms that require sorted data, such as search algorithms and data analysis techniques. Efficient sorting can significantly reduce the time complexity of these operations.
					</p>
				</div>
			</div>
		</>
	);
};

export default SortAlgorithm;
