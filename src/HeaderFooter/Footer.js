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
							AlgoLens is a web platform that provides interactive visualizations and sorts Algorithms.
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
							<li><a href="https://www.linkedin.com/iammoussaab"><img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" /></a></li>
							<li><a href="https://www.github.com/iammoussaab"><img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github" /></a></li>
							<li><a href="mailto:mossabelmahraoui@gmail.com"><img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new" /></a></li>
						</ul>
					</div>

				</div>
				<div className="footer-bottom">
					<p>&copy; 2024 AlgoLens. All rights reserved.</p>
				</div>
			</footer >
		</>
	);
}
export default Foot;
