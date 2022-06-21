import { useQuery } from '@apollo/client'

import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import { Content } from '../components/content'
import { Footer } from '../components/footer'

import { RETRIEVE_LESSON_BY_ID } from '../lib/apollo'

export function Lesson() {
	/*const { data } = useQuery<{data:any}>(
		RETRIEVE_LESSONS,
		{ pollInterval: 60 * 60 * 24 * 7 * 1000 }
	)*/
  return (
    <>
			<Header />
			<main
				className="w-[1248px] max-w-full xl:ml-auto flex"
			>
				<Content />
				<Sidebar />
				<Footer />
			</main>
    </>
  )
}
