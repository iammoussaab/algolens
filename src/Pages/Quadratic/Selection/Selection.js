import Implementation from "../../codeImp/CodesImplementation";
import SelectionSortVisualizer from "./SelectionSortVisualizer";
import codesSelection from "../../codeImp/codesSelection";
const Selection = () => {
	return (
		<>
			<SelectionSortVisualizer />
			<div>
				<h1>Selection Sort</h1>
				<p>
					Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one.
					The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.
				</p>
				<p>
					It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity.
				</p>
				<p>
					This algorithm has been upgraded and enhanced in several variants such as <a href="/heapsort">Heap Sort</a>.
				</p>
				<table>
					<thead>
						<tr>
							<th>Case</th>
							<th>Time Complexity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Best</td>
							<td>O(n<sup>2</sup>)</td>
						</tr>
						<tr>
							<td>Average</td>
							<td>O(n<sup>2</sup>)</td>
						</tr>
						<tr>
							<td>Worst</td>
							<td>O(n<sup>2</sup>)</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>Space Complexity</td>
							<td>O(1)</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<Implementation codes={codesSelection} />
		</>
	);
}
export default Selection;
