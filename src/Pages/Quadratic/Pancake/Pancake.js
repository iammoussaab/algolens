import Implementation from "../../codeImp/CodesImplementation";
import codesPancake from "../../codeImp/CodesPancake";
import PancakeSortVisualizer from "./PancakeSortVisualizer";

const Pancake = () => {

	return (
		<>
			<div>
				<PancakeSortVisualizer />
			</div>
			<div>

				<h1>Pancake Sort</h1>
				<p>
					Pancake Sort is a sorting algorithm which derives from the pancake problem. The algorithm just executes the flip operation recursively until the data structure is sorted.
					It's similar to <a href="/selectionsort">Selection Sort</a>, without using swaps to sort the structure, but just flips.
				</p>
				<p>
					The data structure gets divided in two parts, a sorted one and one still to sort. For each flip, the maximum elements of the unsorted sublist gets put at the end of the data structure by
					flipping the unsorted part and the sorted sublist gets incremented by one. This procedure gets executed until the unsorted part is made up of just one element.
				</p>
			</div>
			<div>
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
							<td>O(n<sup>2</sup>)</td>
						</tr>
						<tr>
							<td>Worst</td>
							<td>O(n<sup>2</sup>)</td>
						</tr>
						<tr>
							<td>Best</td>
							<td>O(n)</td>
						</tr>
						<tr>
							<td>Space Complexity</td>
							<td>O(1)</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<Implementation codes={codesPancake} />
			</div>
		</>
	);
}
export default Pancake;
