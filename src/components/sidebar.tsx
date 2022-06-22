import { useQuery } from '@apollo/client'
import { Lesson } from './lesson'
import { RETRIEVE_ALL_LESSONS } from '../lib/apollo'

type LessonQueryResponae = Pick<LessonType, "title" | "slug" | "lessonType" | "availableAt">

export function Sidebar() {
	const { data } = useQuery<LessonQueryResponae>(
		RETRIEVE_ALL_LESSONS,
		{ pollInterval: 60 * 60 * 24 * 7 * 1000 }
	)
	return (
		<aside className={["block w-full md:w-[358px] fixed md:static bg-gray-600 px-8 [@media(max-width:869px)]:h-full"].join(' ')}>
			<span className="block w-full my-6 text-gray-100 text-xl font-bold">Lesson's timeline</span>
			<div className="w-full flex flex-col gap-5 overflow-y-auto">
				{data?.lessons.map(({availableAt, ...lesson}) => (
					<Lesson
						availableAt={new Date(availableAt)}
						{...lesson}
					/>
				))}
			</div>
		</aside>
	)
}
