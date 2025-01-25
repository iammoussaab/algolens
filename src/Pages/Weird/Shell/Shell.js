import Implementation from "../../codeImp/CodesImplementation";
import codesShell from "../../codeImp/codesShell";
import ShellSortVisualizer from "./ShellSortVisualizer";

const Shell = () => {
	return (
		<>
			<div>
				<ShellSortVisualizer />
			</div>
			<div>
				<h1>Shell Sort</h1>
				<p>
					Shell Sort is one of the oldest sorting algorithms and it's an extension of the
					<a href="/insertionsort">Insertion Sort</a>
					. This algorithm is fast and easy to implement, but it's hard to measure its performances.
				</p>
				<p>
					Unlike Insertion Sort, Shell Sort starts by comparing the elements distant from each other by a certain gap that gets progressively decreased.
					By starting with the most distant elements, it can optimize performances
					as it's not limited by just comparing two adjacent elements.
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
							<td>Depends on the gap sequence</td>
						</tr>
						<tr>
							<td>Space Complexity</td>
							<td>O(1)</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div>
				<Implementation codes={codesShell} />
			</div>
		</>
	);
};
export default Shell;
