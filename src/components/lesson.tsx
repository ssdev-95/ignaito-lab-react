import { MouseEvent } from 'react'
import { CheckCircle, Lock } from 'phosphor-react'
import { format, isFuture } from 'date-fns'

import { Lesson as LessonType } from '../custom-types.d'


type LessonProps = Pick<LessonType, "title" | "slug" | "lessonType"> & {
	availableAt: Date;
}

type AnchorEvent = MouseEvent<HTMLAnchorElement>

export function Lesson({
	title, slug, availableAt, lessonType
}:LessonProps) {
	const dateFormatted = format(availableAt, "EEE' • 'MMM dd' • 'k'h'mm")
	const isContentNotAvailable = isFuture(availableAt)

	const lessonUri = `/lesson?s=${slug}`

	function handleNoRedirect(event:AnchorEvent) {
		if(isContentNotAvailable) {
			event.preventDefault()
			return
		}
	}

	return (
		<a
			href={lessonUri}
			onClick={handleNoRedirect}
		>
			<time dateTime={availableAt.toISOString()} className="block text-gray-400 mb-2">{dateFormatted}</time>
			<div className="border border-gray-200 rounded p-4">
				<div className="flex items-center justify-between">
					{isContentNotAvailable ? (
						<span className="flex gap-1 items-center text-yellow-400">
							<Lock size={20} />
							Soon
						</span>
					) : (
						<span className="flex gap-1 items-center text-blue-400">
							<CheckCircle size={20} />
							Content available
						</span>
					)}
					<span className={["px-2 py-1/2 border border-green-400 rounded-md", lessonType === "live" ? "text-green-500" : "text-gray-100"].join(" ")}>
						{lessonType === 'live' ? 'LIVE' : 'PRATICAL LESSON'}
					</span>
				</div>
				<strong className="block text-gray-300 mt-4">
					{title}
				</strong>	
			</div>
		</a>
	)
}
