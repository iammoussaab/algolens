import React, { useState } from 'react';
import codes from '../codeImp/codesMerge';
import MergeSortVisualizer from './MergeSortVisualizer';

function Merge() {
	const [selectedLanguage, setSelectedLanguage] = useState('C');

	const handleButtonClick = (language) => {
		setSelectedLanguage(language);
	};
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
			<div className='codeImplement'>
				<h2>Code Implementation</h2>
				<div id="menu-code" data-aos="fade-right">
					<div className="menu-btns" id="menu-btns">
						<button onClick={() => handleButtonClick('C')} title="C">    <img src="https://img.icons8.com/?size=30&id=40670&format=png&color=000000" alt="C" /></button>
						<button onClick={() => handleButtonClick('C++')} title="C++"><img src="https://img.icons8.com/?size=30&id=40669&format=png&color=000000" alt="C++" /></button>
						<button onClick={() => handleButtonClick('Java')} title="Java"><img src="https://img.icons8.com/?size=30&id=13679&format=png&color=000000" alt="Java" /></button>
						<button onClick={() => handleButtonClick('JavaScript')} title="JavaScript"><img src="https://img.icons8.com/?size=30&id=108784&format=png&color=000000" alt="JavaScript" /></button>
						<button onClick={() => handleButtonClick('Python')} title="Python"><img src="https://img.icons8.com/?size=30&id=13441&format=png&color=000000" alt="Python" /></button>
					</div>
					<pre>
						<code id="code">
							{codes[selectedLanguage]}
						</code>
					</pre>
				</div>
			</div>
		</>
	);
}

export default Merge;
