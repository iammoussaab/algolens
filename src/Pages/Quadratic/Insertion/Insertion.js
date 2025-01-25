import InsertionSortVisualizer from "./InsertionSortVisualizer";
import Implementation from "../../codeImp/CodesImplementation";
import codesInsertion from "../../codeImp/CodesInsertion";
const Insertion = () => {
	return (
		<>
			<InsertionSortVisualizer />
			<h1>Insertion Sort</h1>
			<p>
				Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.
				It's less performant than advanced sorting algorithms, but it can still have some advantages: it's really easy to implement and it's efficient on small data structures almost sorted.
			</p>
			<p>
				The algorithm divides the data structure in two sublists: a sorted one, and one still to sort. Initially, the sorted sublist is made up of just one element and it gets progressively filled.
				For every iteration, the algorithm picks an element on the unsorted sublist and inserts it at the right place in the sorted sublist.
				It's available in several variants such as <a href="/gnomesort">Gnome Sort</a>.
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

			<Implementation codes={codesInsertion} />
		</>
	);
}
export default Insertion;
