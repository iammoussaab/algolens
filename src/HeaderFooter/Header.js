import React from 'react';
import './Header.css';

function Header() {
	return (
		<header className="header">
			<div className="header-container">
				<h1 className="logo">AlgoLens</h1>
				<nav>
					<ul className="nav-links">
						<li className="nav-item">
							<a href="/">Home</a>
						</li>
						<li className="nav-item">
							<a href="/logarithmic">Logarithmic</a>
							<ul className="sub-menu">
								<li><a href="/logarithmic/Quick">Quick Sort</a></li>
								<li><a href="/logarithmic/Merge">Merge Sort</a></li>
								<li><a href="/logarithmic/Heap">Heap Sort</a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a href="/Quadratic">Quadratic</a>
							<ul className="sub-menu">
								<li><a href="/Quadratic/Bubble">Bubble Sort</a></li>
								<li><a href="/Quadratic/Selection">Selection Sort</a></li>
								<li><a href="/Quadratic/Insertion">Insertion Sort</a></li>
								<li><a href="/Quadratic/Gnome">Gnome Sort</a></li>
								<li><a href="/Quadratic/Shaker">Shaker Sort</a></li>
								<li><a href="/Quadratic/Odd">Odd Sort</a></li>
								<li><a href="/Quadratic/Pancake">Pancake Sort</a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a href="/Weird">Weird</a>
							<ul className="sub-menu">
								<li><a href="/Weird/Shell">Shell Sort</a></li>
								<li><a href="/Weird/Comb">Comb Sort</a></li>
								<li><a href="/Weird/Bitonic">Bitonic Sort</a></li>
								<li><a href="/Weird/Radix">Radix Sort</a></li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
