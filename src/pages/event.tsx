import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { SmileySad } from 'phosphor-react'
import { useSearchParams } from 'react-router-dom'

import { Video } from '../components/video'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import { Loader } from '../components/loader'

import type { Lesson } from '../custom-types.d'

type LessonResponse = {
	lesson: Lesson;
}

export function Event() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const [params] = useSearchParams()

	const RETRIEVE_LESSON_BY_SLUG = gql`
		query {
			lesson (where: { slug: "${params.get('s')}"}) {
				title                                    
				description
				videoId
				teacher
				challenge
			}
		}
	`
	const {data, error} = useQuery<LessonResponse>(
		RETRIEVE_LESSON_BY_SLUG
	)

	function toggleMenuOpen() {
		setIsMenuOpen(prev => !prev)
	}

	if(error) {
		alert(error)
	}

	console.log(data)

  return (
    <div className="w-full min-h-screen flex flex-col">
			<Header
				isMenuOpen={isMenuOpen}
				handleOpenMenu={toggleMenuOpen}
			/>
			<main
				className="w-full flex-1 flex bg-gray-700"
			>
				{!params.get('s') ? (
					<div className="flex-1 px-12">
						<Loader />
						<Loader className="mt-[-80%] md:mt-[-30%]" />
					</div>
				) : (
					<Video />
				)}
				<Sidebar isOpen={isMenuOpen} />
			</main>
    </div>
  )
}
