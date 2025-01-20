import codesBubble from "../../codeImp/codesBubble";
import Implementation from "../../codeImp/CodesImplementation";
import BubbleSortVisualizer from "./BubbleSortVisualizer";

const Bubble = () => {
	return (
		<div>
			<BubbleSortVisualizer />
			<h1>Bubble Sort</h1>
			<h2>Description</h2>
			<p>
				Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water.
				The bubbles represent the elements of the data structure.
			</p>
			<p>
				The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one,
				swapping them if they are in the wrong order.
			</p>
			<p>
				It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as <a href="/selectionsort">Selection Sort</a> or <a href="/insertionsort">Insertion Sort</a> perform better.<br />
				It has several variants to improve its performances, such as <a href="/shakersort">Shaker Sort</a>, <a href="/oddevensort">Odd Even Sort</a> and <a href="/combsort">Comb Sort</a>.
			</p>
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
			<h2>implementation</h2>
			<Implementation codes={codesBubble} />
		</div>
	);
};
export default Bubble;

