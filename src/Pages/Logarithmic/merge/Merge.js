import React from 'react';
import MergeSortVisualizer from './MergeSortVisualizer';
import Implementation from '../../codeImp/CodesImplementation';
import codesMerge from '../../codeImp/codesMerge';

function Merge() {
	return (
		<>
			<div>
				<MergeSortVisualizer />
			</div>
			<div>
				<h2>Description</h2>
				<p>
					Merge Sort is a sorting algorithm based on the Divide et Impera technique, like <a href="/quicksort">Quick Sort</a>.
					It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively.
					We represented the first one.
				</p>
				<p>
					The algorithm divides the data structure recursively until the subsequences contain only one element.
					At this point, the subsequences get merged and ordered sequentially.
					To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining.
					This will be the sorted data structure.
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
							<td>O(n)</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Implementation codes={codesMerge} />
		</>
	);
}

export default Merge;
