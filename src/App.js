import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
	const [number, setNumber] = useState(1);
	const [text, setText] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let goo = data.slice(0, number);
		setText(goo);
		// console.log(text);
	};

	const handleChange = (value) => {
		if (value <= 8 && value > 0) {
			setNumber(value);
		}
	};

	return (
		<div className="app">
			<header>
				<h1>tired of boring lorem ipsum?</h1>
			</header>
			<section>
				<form onSubmit={handleSubmit}>
					<label htmlFor="number">paragraph:</label>
					<input
						type="number"
						value={number}
						onChange={(e) => handleChange(e.target.value)}
					/>
					<button type="submit">generate</button>
				</form>
				<div className="paragraphs">
					{text.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
			</section>
		</div>
	);
}

export default App;
