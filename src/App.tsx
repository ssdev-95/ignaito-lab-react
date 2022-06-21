import { useQuery } from '@apollo/client'

import { Header } from './components/header'
import { RETRIEVE_LESSONS } from './lib/apollo'

function App() {
	const { data } = useQuery<{data:any}>(
		RETRIEVE_LESSONS,
		{ pollInterval: 60 * 60 * 24 * 7 * 1000 }
	)
  return (
    <div
			className="w-full h-[100vh] bg-gray-700"
		>
			<Header />
			{data?.lessons.map((lesson:any) => (
			  <p
					key={lesson.id}
					className="text-gray-100"
				>
					{lesson.description}
				</p>
			))}
    </div>
  )
}

export default App
