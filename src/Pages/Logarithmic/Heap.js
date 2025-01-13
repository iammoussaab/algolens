function HeapSort() {

	return (
		<>
			<div>
				<h1>Heap Sort</h1>
				<p>
					Heap Sort is an in-place iterative sorting algorithm based on auxiliary data structures called heap.
					It's less efficient than algorithm with the same time complexity and it's not suitable for data structures with few elements.
				</p>
				<p>
					The heap is a data structure representable as a binary tree, where each node has a value bigger or equal to its children. Consequently, the root will hold the maximum value.
				</p>
				<p>
					The data structure gets ordered to form the heap initially, and then it gets progressively reordered with an algorithm similar to <a href="/selectionsort">Selection Sort</a>, starting from the bigger elements.
				</p>
			</div>
		</>
	);

}
export default HeapSort;
