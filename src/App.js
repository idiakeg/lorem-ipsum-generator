import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
	const [number, setNumber] = useState(0);
	const [text, setText] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let goo = data.slice(0, number);
		setText(goo);
		// console.log(text);
	};

	const handleChange = (value) => {
		if (value <= 8 && value >= 0) {
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
					<label htmlFor="number">
						paragraph:
						<input
							type="number"
							value={number}
							onChange={(e) => handleChange(e.target.value)}
						/>
					</label>
					<button type="submit">generate</button>
				</form>
				{text.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</section>
		</div>
	);
}

export default App;
