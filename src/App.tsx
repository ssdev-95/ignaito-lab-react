import {
	BrowserRouter,
	Routes, Route
} from 'react-router-dom'

import { Home } from './pages/home'
import { Lesson } from './pages/lesson'

function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/lesson/:slug"
					element={<Lesson />}
				/>
			</Routes>
		</BrowserRouter>
  )
}

export default App
