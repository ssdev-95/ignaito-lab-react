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

const AnyLesson:Pick<Lesson, "title" | "description" | "videoId" | "teacher" | "challenge"> = {
	title: '3 coisas que você precisa dominar no Javascript pra se dar bem no React',
	description: 'A verdade é que não é preciso dominar tudo que existe em JavaScript pra começar a utilizar React.\nEntão, no vídeo de hoje, o Diego vai revelar no que você pode focar para iniciar os seus estudos de forma mais assertiva e qual a melhor ferramenta para criar um projeto nesta tecnologia.',
	videoId: 'a2ni_JNvJYQ',
	challenge: { URL: '' },
	teacher: {
		name: 'Diegón Fernandez',
		avatarURL: 'https://github.com/diego3g.png',
		bio: 'Co-founder and CTO at Rocketseat'
	}
}

export function Event() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const [params] = useSearchParams()
	const queryParam = params.get('s') ?? ""

	const RETRIEVE_LESSON_BY_SLUG = gql`
		query {
			lesson (where: { slug: "${queryParam}"}) {
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

	/*if(error) {
		alert(error)
	}*/

	//console.log(data)

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
					<Video lesson={AnyLesson} />
				)}
				<Sidebar isOpen={isMenuOpen} />
			</main>
    </div>
  )
}
