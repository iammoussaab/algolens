import Implementation from "../../codeImp/CodesImplementation";
import codesRadix from "../../codeImp/codesRadix";
import RadixSortVisualizer from "./RadixSortVisualizer";

const Radix = () => {


	return (
		<>
			<div>
				<RadixSortVisualizer />
			</div>
			<div>
				<h1> Radix Sort</h1>
				<p>
					Radix Sort is a sorting algorithm that doesn't use comparisons.
					Its complexity depends, in addition to the number of elements, by the values <var>b</var> and <var>d</var>, representing the radix of the numbers and the maximum number of digits of the elements respectively.
				</p>
				<p>
					Radix Sort works by splitting the elements into buckets, according to their radix, starting from the least significant digit (LSD) or from the most significant digit (MSD) of the number.
					If the number has more than one significant digit, this process is repeated to account all the digits of the number.
				</p>
				<p>
					It's a particular sorting algorithm really different from the others as it is not based on comparisons, but on the digits of the number instead, so it's only applicable on whole numbers or strings.
				</p>
				<p>
					It can be faster than other logarithmic sorting algorithms on big data structures as it can even perform in linear time in special cases, but it's not widely used due to its limitations.
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
							<td>O(d × (n + b))</td>
						</tr>
						<tr>
							<td>Best</td>
							<td>O(d × (n + b))</td>
						</tr>
						<tr>
							<td>Average</td>
							<td>O(d × (n + b))</td>
						</tr>
						<tr>
							<td>Space Complexity</td>
							<td>O(n + 2<sup>d</sup>)</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div>
				<Implementation codes={codesRadix} />
			</div>
		</>
	);
}
export default Radix;
