import BitonicSortVisualizer from "./BitonicSortVisualizer"

const Biitonic = () => {
	return (
		<>
			<div>
				<BitonicSortVisualizer />
			</div>
			<div>
				<h1>Bitonic Sort</h1>
				<p>
					Bitonic Sort is a sorting algorithm based on comparisons. It exploits binary sequences, so it can be applied only on data structures with number of elements equal to a power of 2.
				</p>
				<p>
					The algorithm is made up of two parts. Initially, the data structure gets converted to a binary sequence, creating groups of ascending and descending elements linked together.
					Next, the groups get merged with an algorithm similar to <a href="/mergesort">Merge Sort</a> until the data structure is sorted.
				</p>
				<p>
					It can be implemented in numerous variants, iteratively or recursively, with different visualizations. This visualization shows an iterative version.
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
							<td>O(n log<sup>2</sup>n)</td>
						</tr>
						<tr>
							<td>Best</td>
							<td>O(n log<sup>2</sup>n)</td>
						</tr>
						<tr>
							<td>Average</td>
							<td>O(n log<sup>2</sup>n)</td>
						</tr>
						<tr>
							<td>Space Complexity</td>
							<td>O(log n)</td>
						</tr>
					</tbody>
				</table>
			</div>

		</>
	)
};
export default Biitonic;
