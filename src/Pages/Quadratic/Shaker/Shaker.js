import Implementation from "../../codeImp/CodesImplementation";
import codesShaker from "../../codeImp/codesShaker";
import ShakerSortVisualizer from "./ShakerSortVisualizer";

const Shaker = () => {
	return (
		<>
			<div>
				<ShakerSortVisualizer />
			</div>
			<div>
				<h1>Shaker Sort</h1>
				<p>
					Shaker Sort, also called Cocktail Shaker Sort, is an extension of the <a href="/bubblesort">Bubble Sort</a>.
					Unlike the Bubble Sort, which puts the bigger element to the end of the non-ordered sublist at each cycle,
					the Shaker Sort alternates between bringing the bigger element of the unsorted sublist to the end of the ordered part
					and leading the smaller elements of the unsorted sublist at the beginning of the sorted sublist.
				</p>
				<p>
					Shaker Sort alternates two Bubble Sorts, the first one that sorts the structure
					starting from the largest element ordering the elements down to the smallest,
					and the second one, that starts from the smallest element and sorts the elements up to the largest.
				</p>
				<p>
					Although this algorithm is an extension of the Bubble Sort and at first glance it might seem much more efficient,
					the performance increase is minimal and the complexity is the same.
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
				<Implementation codes={codesShaker} />
			</div>
		</>
	);
}
export default Shaker;
