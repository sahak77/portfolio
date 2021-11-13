
import { useState } from "react"
import { useLoading } from '@agney/react-loading';

import ReactPageScroller from 'react-page-scroller';

import Menu from "./Components/Menu/Menu";
import AboutScreen from './Components/AboutScreen/AboutScreen';
import WorksScreen from './Components/WorksScreen/WorksScreen';

function App() {

	const [screen, setScreen] = useState(0)
	const [activeMenu, setActiveMenu] = useState(0)
	const [loading, setLoading] = useState(true)
	const { containerProps, indicatorEl } = useLoading({
		loading: loading,
	});

	setTimeout(() => {
		setLoading(false)
		console.log(process.env);
	}, 1500);

	if (loading) {
		return <section className="loading" {...containerProps}>{indicatorEl}</section>
	}

	return (
		<div className="App">
			<Menu setPage={setScreen} page={screen} activeMenu={activeMenu} />
			<ReactPageScroller
				pageOnChange={(i) =>{
					setScreen(i)
					setActiveMenu(i)
				}}
				onBeforePageScroll={(i) => console.log(i)}
				customPageNumber={screen}
				// animationTimer={900}
				// animationTimerBuffer={10000}
			>
				<AboutScreen />
				<WorksScreen />
			</ReactPageScroller>
		</div>
	)
}

export default App;