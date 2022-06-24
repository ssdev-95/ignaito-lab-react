import { MouseEvent } from 'react'
import  {
	useParams, Link
} from 'react-router-dom'
import { CheckCircle, Lock } from 'phosphor-react'
import { format, isFuture } from 'date-fns'

import { Lesson as LessonType } from '../custom-types.d'


type LessonProps = Pick<LessonType, "title" | "slug" | "lessonType"> & {
	availableAt: Date;
	onRedirect: ()=>void;
}

type AnchorEvent = MouseEvent<HTMLAnchorElement>

export function Lesson({
	title, slug, availableAt,
	lessonType, onRedirect
}:LessonProps) {
	const params = useParams<{ slug :string }>()
	const dateFormatted = format(availableAt, "EEE' • 'MMM dd', 'yyyy' • 'k'h'mm")
	const isContentNotAvailable = isFuture(availableAt)

	const lessonUri = `/event/lesson/${slug}`

	function handleNoRedirect(event:AnchorEvent) {
		if(isContentNotAvailable) {
			event.preventDefault()
			return
		}

		onRedirect()
	}

	return (
		<Link
			to={lessonUri}
			onClick={handleNoRedirect}
			className="group"
		>
			<time dateTime={availableAt.toISOString()} className="block text-gray-400 mb-2">{dateFormatted}</time>
			<div className={[
				"rounded p-4 relative",
				params.slug === slug ? "bg-green-400 border-0" : "border border-gray-200 group-hover:border-green-400 after:content-[U+1F890] after:text-red-500 after:absolute after:left-[-100%] after:z-50"
			].join(" ")}>
				<div className="flex items-center justify-between">
					{isContentNotAvailable ? (
						<span className="flex gap-1 items-center text-yellow-400">
							<Lock size={20} />
							Soon
						</span>
					) : (
						<span className={[
							"flex gap-1 items-center",
							params.slug === slug ? "text-gray-100" : "text-blue-400"
						].join(" ")}>
							<CheckCircle size={20} />
							Content available
						</span>
					)}
					<span className={[
						"px-2 py-1/2 border-[2px] border-green-400 rounded-md",
						params.slug === slug ? "text-gray-100 border-gray-100" : lessonType === "live" ? "text-green-50    0" : "text-gray-100"
					].join(" ")}>
						{lessonType === 'live' ? 'LIVE' : 'PRATICAL LESSON'}
					</span>
				</div>
				<strong className={[
					"block mt-4",
					params.slug === slug ? "text-gray-100" : "text-gray-300"
				].join(" ")}>
					{title}
				</strong>	
			</div>
		</Link>
	)
}
