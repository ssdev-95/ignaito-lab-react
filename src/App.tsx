import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'

import { Home } from './pages/home'
import { Event } from './pages/event'

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/lesson"
					element={<Event />}
				/>
			</Routes>
		</BrowserRouter>
  )
}

export default App
