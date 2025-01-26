import React from 'react';
import './css/Contact.css'; // Assuming you'll create this CSS file for styling

const Contact = () => {
	return (
		<>
			<div className="contact-container">
				<h1>Contact Us</h1>
				<div className="contact-info">
					<p>Feel free to reach out to us. We're here to help you!</p>
					<div className="contact-links">
						<p>Follow us:</p>
						<ul>
							<li><a href="https://www.linkedin.com/in/iammoussaab">LinkedIn</a></li>
							<li><a href="https://www.github.com/iammoussaab">GitHub</a></li>
							<li><a href="mailto:mossabelmahraoui@gmail.com">Email</a></li>
						</ul>
					</div>
				</div>
				<form className="contact-form">
					<div className="form-group">
						<label>Name:</label>
						<input type="text" name="name" required />
					</div>
					<div className="form-group">
						<label>Email:</label>
						<input type="email" name="email" required />
					</div>
					<div className="form-group">
						<label>Message:</label>
						<textarea name="message" required></textarea>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div >
		</>
	);
};

export default Contact;

