import { useState } from 'react'
import { useQuery } from '@apollo/client'

import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import { Video } from '../components/video'

//import { RETRIEVE_LESSON_BY_ID } from '../lib/apollo'

export function Event() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	function toggleMenuOpen() {
		setIsMenuOpen(prev => !prev)
	}

  return (
    <div className="w-full min-h-screen flex flex-col">
			<Header
				isMenuOpen={isMenuOpen}
				handleOpenMenu={toggleMenuOpen}
			/>
			<main
				className="w-full flex-1 flex bg-gray-700"
			>
				<Video />
				<Sidebar />
			</main>
    </div>
  )
}
