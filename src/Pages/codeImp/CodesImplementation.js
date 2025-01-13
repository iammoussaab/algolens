import React from "react";
import { useState } from "react";

const Implementation = ({ codes }) => {
	const [selectedLanguage, setSelectedLanguage] = useState('C');

	const handleButtonClick = (language) => {
		setSelectedLanguage(language);
	};
	return (
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
					<div>
						<code id="code">
							<p>{codes[selectedLanguage]}</p>
							{console.log(codes)}
						</code>
					</div>
				</pre>
			</div>
		</div>
	)
}

export default Implementation;
