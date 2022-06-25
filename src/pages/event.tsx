import { useState } from 'react'
import { SmileySad } from 'phosphor-react'
import { isFuture } from 'date-fns'

import {
	useParams, Navigate
} from 'react-router-dom'

import { Video } from '../components/video'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import { ErrBoundary } from '../components/error'

export function Event() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const { slug } = useParams()

	function toggleMenuOpen() {
		setIsMenuOpen(prev => !prev)
	}

	/*if(lesssonnotavailable) {
		return (
			<Navigate
				to="/"
				replace={true}
			/>
		)
	}*/

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
					<Video
						slug={slug}
						isMenuOpen={isMenuOpen}
					/>
				) : (
					<ErrBoundary
						title="No video selected!"
						className="flex-1 max-h-[50vh] grid place-items-center text-blue-400 text-center pb-8 mb:pt-[calc(4.35rem+33px)]"
					/>
				)}
				<Sidebar
					isOpen={isMenuOpen}
					onClose={toggleMenuOpen}
				/>
			</main>
    </div>
  )
}
