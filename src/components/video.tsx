import {
	DiscordLogo,
	Lightning,
	FileArrowDown,
	CaretRight
} from 'phosphor-react'

import { Footer } from '../components/footer'
import type { Lesson } from '../custom-types.d'

type VideoProps = {
	lesson: Pick<Lesson, "title" | "description" | "videoId" | "teacher" | "challenge">;
}

export function Video({ lesson }:VideoProps) {
	const videoURL = `https://youtube.com/watch?v=${lesson.videoId}&feature=emb_title`
	return (
		<section
			className="block flex-1 bg-gray-700 text-gray-100 py-0 flex flex-col"
		>
			<video
				type="video/webm"
				height={300}
				width={400}
				className="w-full h-auto bg-gray-500"
			>
				<source src={videoURL} />
			</video>
			<div className="flex flex-col gap-6 md:grid md:grid-rows-2 md:grid-cols-3 md:max-h-[1024px] md:gap-3 p-4">
				<div className="row-start-1 row-end-2 col-start-1 col-end-3">
					<span className="block mb-4 font-bold">
						{lesson.title}
					</span>
					<p className="text-sm text-gray-300 font-thin">{lesson.description}</p>
				</div>
				<div className="md:row-start-2 md:row-end-3 col-start-1 col-end-3 flex gap-4 items-center">
					<img
						src={lesson.teacher.avatarURL}
						className="h-16 w-auto rounded-full border-4 border-blue-400"
					/>
					<strong className="text-2xl text-gray-100">
						{lesson.teacher.name}
						<span className="block mt-2 text-gray-400 text-sm font-thin">
							{lesson.teacher.bio}
						</span>
					</strong>
				</div>
				<div className="md:row-start-1 md:row-end-2 col-start-3 col-end-4 flex flex-col gap-4">
					<a className="px-1 py-4 text-sm font-bold bg-green-400 rounded-md flex gap-2 items-center justify-center" href="">
						<DiscordLogo size={20} />
					 DISCORD COMMUNITY
					</a>
					<a className="px-1 py-4 text-sm font-bold text-blue-400 border-2 border-blue-400 rounded-md flex gap-2 items-center justify-center" href="">
						<Lightning size={20}/>
						TO THE CHALLENGE
					</a>
				</div>
			</div>
			<div>
				<a
					href=""
					className=""
				>
					<div>
						<FileArrowDown size={24} />
					</div>
					<span>
						Complemment Material
						<span>Get the complement material to boost development</span>
					</span>
					<div>
						<CaretRight size={24} />
					</div>
				</a>	
			</div>
		</section>
	)
}
