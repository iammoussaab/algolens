import Implementation from "../../codeImp/CodesImplementation";
import codesOdd from "../../codeImp/codesOdd";
import OddSortVisualizer from "./OddSortVisualizer";

const Odd = () => {
	return (
		<>
			<div>
				<OddSortVisualizer />
			</div>
			<div>
				<h1>Odd Sort</h1>
				<p>
					Odd Even Sort (also known as Brick Sort) is a sorting in-place algorithm based on comparisons. It splits the data structure in pairs made up of elements with even indeces and
					odd indeces respectively.
				</p>
				<p>
					It compares adjacent pairs and swaps them if they are in the wrong order with an algorithm similar to <a href="/bubblesort">Bubble Sort</a>.
					This procedure continues for every pair, alternating between odd/even and even/odd pairs until the structure is sorted.
				</p>
				<p>
					This algorithm can get executed on paraller processors, but it's not widely used. It can be performant if the data structure is almost sorted, but it's really slow
					if there are small elements near the end of the data structure since they will require many iterations to get moved in the right place.
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
				<Implementation codes={codesOdd} />
			</div>
		</>
	);
}
export default Odd;
