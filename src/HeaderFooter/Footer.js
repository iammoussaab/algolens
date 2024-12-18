import "./Footer.css";

function Foot() {
	return (
		<>
			<footer className="footer">
				<div className="footer-container">
					{/* About Us Section */}
					<div className="footer-section about">
						<h3>About Us</h3>
						<p>
							AlgoLens is a web plaatfrom that provides interactive visualizations ans sorts Algorithms.
							Our mission is to make complex concepts simple and fun!
						</p>
					</div>

					{/* Navigation Section */}
					<div className="footer-section navigation">
						<h3>Navigation</h3>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/sortAlgorithm">Sort of Algorithms</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</div>

					{/* Contact Section */}
					<div className="footer-section contact">
						<h3>Contact</h3>
						<ul>
							<li><a href="https://www.linkedin.com"><img src="linkedin-logo.png" alt="LinkedIn" /></a></li>
							<li><a href="https://www.github.com"><img src="github-logo.png" alt="GitHub" /></a></li>
							<li><a href="mailto:mossabelmahraoui@gmail.com"><img src="gmail-logo.png" alt="Gmail" /></a></li>
						</ul>
					</div>
				</div>
				<p>&copy; 2024 AlgoLens. All rights reserved.</p>
			</footer>
		</>
	);
}
export default Foot;
