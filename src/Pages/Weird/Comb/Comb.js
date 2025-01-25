import codesComb from "../../codeImp/codesComb";
import Implementation from "../../codeImp/CodesImplementation";
import CombSortVisualizer from "./CombSortVisualizer";

const Comb = () => {

	return (
		<>
			<div>
				<CombSortVisualizer />
			</div>
			<div>
				<h1>Comb Sort</h1>
				<p>
					Comb Sort is a sorting algorithm really similar to <a href="/bubblesort">Bubble Sort</a>. It highly improves its performances by removing the "turtles", that is the small elements placed near the end of the data structure that slows down
					a lot the performances of Bubble Sort.
				</p>
				<p>
					Bubble Sort is based on comparing adjacent elements, so with a distance of 1. Comb Sort increases this distance using a shrink factor <var>k</var> (usually with a value of 1.3).
					Initially, the distance has a value of <var>n</var>. For each iteration, a Bubble Sort gets executed using the new distance value instead of 1. The distance gets progressively divided by the shrink factor <var>k</var>.
				</p>
				<p>
					This procedure gets executed until the distance reaches the value of 1. At this point, the algorithm is a regular Bubble Sort, but the majority of the "turtles" already got removed.
				</p>
				<p>
					Its average time complexity depends, in addition to the number of elements of the data structure, by a value  <var>p</var>, representing the number of divisions carried out.
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
							<td>Worst</td>
							<td>O(n<sup>2</sup>)</td>
						</tr>
						<tr>
							<td>Best</td>
							<td>O(n log n)</td>
						</tr>
						<tr>
							<td>Average</td>
							<td>O(n<sup>2</sup> / p)</td>
						</tr>
						<tr>
							<td>Space Complexity</td>
							<td>O(1)</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<Implementation codes={codesComb} />
			</div>
		</>
	);
};
export default Comb;
