import codesHeap from "../../codeImp/CodesHeap";
import Implementation from "../../codeImp/CodesImplementation";
import HeapSortVisualizer from "./HeapSortVisualizer";

function HeapSort() {

	return (
		<>
			<HeapSortVisualizer />
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
			<div>
				<h2>Complexity</h2>
				<table>
					<thead>
						<tr>
							<th>Case</th>
							<th>Time Complexity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Average</td>
							<td>O(n × log n)</td>
						</tr>
						<tr>
							<td>Worst</td>
							<td>O(n × log n)</td>
						</tr>
						<tr>
							<td>Best</td>
							<td>O(n × log n)</td>
						</tr>
						<tr>
							<td>Space Complexity</td>
							<td>O(1)</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Implementation codes={codesHeap} />
		</>
	);

}
export default HeapSort;
