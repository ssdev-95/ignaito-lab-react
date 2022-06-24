import {
	DiscordLogo,
	Lightning,
	FileArrowDown,
	CaretRight,
	Image
} from 'phosphor-react'

/* @vite-ignore */
import {
	DefaultUi,
	Player,
	Youtube
} from '@vime/react'

import { useQuery } from '@apollo/client'

import { ErrBoundary } from './error'
import { Footer } from '../components/footer'
import { Loader } from '../components/loader'
import {
	RETRIEVE_LESSON_BY_SLUG,
	POLL_INTERVAL
} from '../lib/apollo'
import type { Lesson } from '../custom-types.d'

import '@vime/core/themes/default.css'

type VideoQueryResponse = {
	lesson: Pick<Lesson, "title" | "description" | "videoId" | "teacher" | "challenge">;
}

type VideoProps = {
	slug: string;
}

export function Video({ slug }:VideoProps) {
	const { data, error, loading } = useQuery<VideoQueryResponse>(
		RETRIEVE_LESSON_BY_SLUG, {
			variables: { slug: slug },
			pollInterval: POLL_INTERVAL
		}
	)

	if(loading) {
		return (
			<div
				className="w-full max-w-[1100px] p-12 block mb:py-[calc(4.35rem+32px)]"
			>
				<Loader />
				<Loader />
			</div>
		)
	}

	if(!data || !data?.lesson || error) {
		return (
			<div className="block flex-1 bg-gray-700 text-red-400 pb-8 mb:pt-[calc(4.35rem+33px)] flex flex-col items-center">
				<ErrBoundary
					className="flex justify-center"
					title="Video couldn't be loaded."
				/>
			</div>
		)
	}

	return (
		<section
			className="block flex-1 bg-gray-700 text-gray-100 mb:pt-[calc(4.35rem+1px)] flex flex-col items-center"
		>
			<div
				className="bg-gray-800 flex justify-center w-full"
			>
				<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
					<Player>
						<Youtube videoId={data?.lesson.videoId} />
						<DefaultUi />
					</Player>
				</div>
			</div>
			<div className="flex flex-col w-full max-w-[1100px] gap-6 md:grid md:grid-rows-2 md:grid-cols-3 md:max-h-[1024px] md:gap-3 p-4">
				<div className="row-start-1 row-end-2 col-start-1 col-end-3">
					<span className="block mb-4 font-bold">
						{data.lesson.title}
					</span>
					<p className="text-sm text-gray-300 font-thin leading-relaxed">{data.lesson.description}</p>
				</div>
				<div className="md:row-start-2 md:row-end-3 col-start-1 col-end-3 flex gap-4 items-center">
					<img
						src={data.lesson.teacher.avatarURL}
						className="h-16 w-auto rounded-full border-4 border-blue-400"
					/>
					<strong className="text-2xl text-gray-100">
						{data.lesson.teacher.name}
						<span className="block mt-2 text-gray-400 text-sm font-thin">
							{data.lesson.teacher.bio}
						</span>
					</strong>
				</div>
				<div className="md:row-start-1 mt-12 md:mt-0 md:row-end-2 col-start-3 col-end-4 flex flex-col gap-4">
					<a className="px-1 py-4 text-sm font-bold bg-green-400 rounded-md flex gap-2 items-center justify-center hover:bg-green-500" href="">
						<DiscordLogo size={20} />
					 DISCORD COMMUNITY
					</a>
					<a className="px-1 py-4 text-sm font-bold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-700 rounded-md flex gap-2 items-center justify-center" href="">
						<Lightning size={20}/>
						TO THE CHALLENGE
					</a>
				</div>
			</div>
			<div className="w-full max-w-[1100px] mt-12 flex flex-col justify-center items-center md:flex-row gap-6 md:gap-4 px-4 md:px-0">
				<a
					href=""
					className="h-36 md:h-32 flex-none md:flex-1 flex items-center justify-stretch gap-2 text-gray-100 bg-gray-600 hover:bg-gray-500 rounded overflow-hidden"
				>
					<div className="h-full p-2 flex items-center justify-center bg-green-500">
						<FileArrowDown size={40} />
					</div>
					<span className="flex-1 text-lg font-bold block">
						Complemment Material
						<span className="block mt-2 mb:text-sm text-xs text-gray-300 font-thin">Get the complement material to boost development</span>
					</span>
					<div className="h-full p-4 flex items-center justify-center">
						<CaretRight size={24} className="text-blue-400" />
					</div>
				</a>

				<a
					href=""
					className="h-36 md:h-32 flex-none md:flex-1 flex items-center justify-stretch gap-2 text-gray-100 bg-gray-600 hover:bg-gray-500 rounded overflow-hidden"
				>
					<div className="h-full p-2 flex items-center justify-center bg-green-500">
						<Image size={40} />
					</div>

					<span className="flex-1 text-lg font-bold block">
						Exclusive wallpapers
						<span className="block mt-2 mb:text-sm text-xs text-gray-300 font-thin">
							Download TikoTeko's exclusive wallpapers and customize your machine
						</span>
					</span>

					<div className="h-full p-4 flex items-center justify-center">
						<CaretRight
							size={24}
							className="text-blue-400"
						/>
					</div>
				</a>
			</div>
			<Footer />
		</section>
	)
}
