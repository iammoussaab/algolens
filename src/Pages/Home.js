import React, { useEffect, useRef } from "react";

function Home() {
	const outputRef = useRef(null);

	function animateText(targetElement, finalText, options = {}) {
		const {
			letters = "abcdefghijklmnopqrstuvwxyz",
			speed = 50,
			increment = 8,
		} = options;
		let fixed = "",
			currentFrame = 0,
			currentIndex = 0;

		function nextFrame() {
			let block = Array.from({ length: finalText.length - currentIndex - 1 }, () =>
				letters.charAt(Math.floor(Math.random() * letters.length))
			).join("");
			if (currentFrame++ === increment - 1)
				fixed += finalText.charAt(currentIndex++);
			if (currentFrame >= increment) currentFrame = 0;
			if (targetElement) targetElement.innerHTML = fixed + block;
			if (currentIndex < finalText.length) setTimeout(nextFrame, speed);
		}

		nextFrame();
	}

	useEffect(() => {
		const currentOutputRef = outputRef.current;
		if (currentOutputRef) {
			animateText(currentOutputRef, "AlgoLens", {
				letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
				speed: 50,
				increment: 10,
			});
		}
		return () => {
			if (currentOutputRef) {
				currentOutputRef.innerHTML = "";
			}
		};
	}, []);

	return (
		<>
			<h1 ref={outputRef}> </h1>
			<div>
				<p>
					Welcome to AlgoLens! This is a platform where you can learn about
					algorithms and data structures through interactive visualizations.
				</p>

			</div>
			<div>
				<h2>Sorting Algorithms</h2>
			</div>
			<div>
				<p>Making complex concepts simple and fun!</p>
				<h2>What Are Sorting Algorithms?</h2>
				<p>
					Sorting algorithms are methods used to organize data in a specific order, such as arranging numbers from smallest to largest or sorting words alphabetically.
					These methods help computers process data efficiently and are widely used in applications like organizing files, searching for information, and displaying data.
				</p>
				<p>
					Over time, <span class="highlight">hundreds of sorting techniques</span> have been created to solve this task efficiently, each with its own way of organizing the data.
				</p>

				<h2>Types of Sorting Algorithms</h2>
				<p>Sorting algorithms are generally divided into two main types based on their speed and efficiency:</p>
				<ul>
					<li>
						<strong>Logarithmic Sorting (Fast Algorithms):</strong>
						<p>
							These algorithms work quickly even with large amounts of data. The time taken grows at a slower rate compared to the size of the data.
						</p>
						<p>
							An example is <span class="highlight">Quick Sort</span>, which is very efficient for large datasets. It divides the data repeatedly and sorts smaller chunks step by step.
						</p>
					</li>
					<li>
						<strong>Quadratic Sorting (Simpler but Slower):</strong>
						<p>
							These algorithms are easier to understand but take more time when the data size increases. They compare items step by step.
						</p>
						<p>
							An example is <span class="highlight">Bubble Sort</span>, where adjacent items are swapped repeatedly until everything is sorted.
						</p>
					</li>
				</ul>

				<h2>Why Sorting Efficiency Matters</h2>
				<p>
					When sorting large datasets, the <span class="highlight">time complexity</span> (how long it takes) and the <span class="highlight">space complexity</span> (how much memory it uses) are important factors.
					Sorting techniques are evaluated using special symbols like <span class="highlight">O(n log n)</span> for efficient methods and <span class="highlight">O(n²)</span> for slower methods.
				</p>
				<p>
					For example:
					<ul>
						<li><span class="highlight">Quick Sort</span> sorts data efficiently with a time complexity of <strong>O(n log n)</strong>.</li>
						<li><span class="highlight">Bubble Sort</span> has a slower time complexity of <strong>O(n²)</strong>, meaning it takes longer for large data.</li>
					</ul>
				</p>

				<h2>Visualizing Sorting Algorithms</h2>
				<p>
					Understanding sorting algorithms can be tricky if you only read about them.
					By <span class="highlight">visualizing</span> how they work, you can see each step in action: how data is compared, moved, and organized.
				</p>
				<p>
					Our platform brings sorting algorithms to life with step-by-step animations, making it easier for anyone to learn and enjoy these fascinating techniques.
				</p>
			</div>
		</>
	);
}

export default Home;
