import SorterControls from './SorterControls/SorterControls.jsx'
import SorterVisualizer from './SorterVisualizer/SorterVisualizer.jsx'
export default function Sorter() {
	return (
	  <div id="sorter-container">
		<SorterVisualizer />
		<SorterControls />
	  </div>
	);
}