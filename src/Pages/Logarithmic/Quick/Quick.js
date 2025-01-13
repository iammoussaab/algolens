import codesQuick from "../../codeImp/CodesQuick";
import QuickSortVisualizer from "./QuickSortVisualizer"
import Implementation from "../../codeImp/CodesImplementation";
const Quick = () => {
	return (
		<>
			<QuickSortVisualizer />
			<div>
				<h1>Quick Sort</h1>
				<p>
					Quick Sort is a sorting algorithm based on splitting the data structure into smaller partitions and sorting them recursively until the data structure is sorted.
				</p>
				<p>
					This division into partitions is done based on an element called the pivot: all the elements bigger than the pivot get placed on the right side of the structure, and the smaller ones to the left, creating two partitions.
					Next, this procedure gets applied recursively to the two partitions and so on.
				</p>
				<p>
					This partition technique based on the pivot is called <a href="https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm" target="_blank" rel="noopener noreferrer">Divide and conquer</a>.
					It's a performant strategy also used by other sorting algorithms, such as <a href="/mergesort">Merge Sort</a>.
				</p>
			</div>
			<div>
				<h2>How Quick Sort works</h2>
				<p>
					Quick Sort works as follows:
				</p>
				<ol>
					<li>
						Choose a pivot element from the data structure. It can be any element, but the most common choice is the last element.
					</li>
					<li>
						Reorder the data structure so that all elements with values less than the pivot come before the pivot and all elements with values greater than the pivot come after it.
					</li>
					<li>
						Recursively apply the previous steps to the sub-arrays of elements with smaller and greater values than the pivot.
					</li>
				</ol>
				<p>
					Quick Sort is an in-place algorithm, meaning it doesn't require additional data structures to work. It's also a comparison-based algorithm, which means it compares elements to sort them.
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
							<td>O(n2)</td>
						</tr>
						<tr>
							<td>Best</td>
							<td>O(n × log n)</td>
						</tr>
						<tr>
							<td>Space Complexity</td>
							<td>O(n)</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Implementation codes={codesQuick} />
		</>
	);
}
export default Quick;
