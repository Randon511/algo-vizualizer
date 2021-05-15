import React, { useState, useEffect } from 'react';
import './SorterVisualizer.css';

export default function SorterVisualizer() {
	const ARR_MAX = 100;

	const [arr, setArr] = useState([]);
	
	function initArray(){
		const arr = [];
		for (let i = 0; i < ARR_MAX; i++) {
			arr.push((Math.floor(Math.random() * 50)) * 10);
		}
		setArr(arr);
	}

	useEffect(initArray, []);

	return (
	<div className="sorter-visualizer">
		{arr.map((height) => (
			<div className="arrayBar" 
			style = {{height:`${height}px`}}
			>
			</div>
		))}
	</div>
	);
}