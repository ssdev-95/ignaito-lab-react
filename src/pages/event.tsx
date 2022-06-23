import { useState } from 'react'
import { SmileySad } from 'phosphor-react'
import { useParams } from 'react-router-dom'

import { Video } from '../components/video'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'

export function Event() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const { slug } = useParams()

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
				{slug ? (
					<Video slug={slug} />
				) : (
					<div className="flex-1 text-gray-100">
						<p>Deu ruim</p>
					</div>
				)}
				<Sidebar isOpen={isMenuOpen} />
			</main>
    </div>
  )
}
