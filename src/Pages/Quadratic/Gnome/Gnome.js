import codesGnome from "../../codeImp/codesGnome";
import Implementation from "../../codeImp/CodesImplementation";
import GnomeSortVisualizer from "./GnomeSortVisualizer";

const Gnome = () => {
	return (
		<>
			<div>
				<GnomeSortVisualizer />
			</div>
			<div>
				<h1>Gnome Sort</h1>
				<p>
					Gnome Sort is a sorting algorithm really similar to <a href="/insertionsort">Insertion sort</a>. Gnome Sort is based on dividing the data structure in two sublists: a sorted one, and an unsorted one.
					For every cycle, the algorithm picks an element of the unsorted sublist and moves it with sequential swaps to the right position in the sorted sublist.
				</p>
				<p>
					The main difference from the Insertion Sort is that the implementation doesn't require nested loops. Like the Insertion Sort, this algorithm is more efficient on small data structures almost sorted.
				</p>
			</div>
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
			<div>
				<Implementation codes={codesGnome} />
			</div>
		</>
	);
}
export default Gnome;
