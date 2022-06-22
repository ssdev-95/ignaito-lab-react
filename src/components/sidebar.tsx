import { useQuery, gql } from '@apollo/client'
import { Lesson } from './lesson'
import { Lesson as LessonType } from '../custom-types.d'

type LessonQueryResponse = {
	lessons: Pick<LessonType, "id" | "title" | "slug" | "lessonType" | "availableAt">[]
}

interface SidebarProps {
	isOpen: boolean;
}

const RETRIEVE_ALL_LESSONS = gql`
	query {
		lessons (orderBy: availableAt_ASC, stage: PUBLISHED) {
			id
			title
			availableAt
			lessonType
			slug
		}
	}
`

export function Sidebar({ isOpen }:SidebarProps) {
	const { data } = useQuery<LessonQueryResponse>(
		RETRIEVE_ALL_LESSONS,
		{ pollInterval: 60 * 60 * 24 * 7 * 1000 }
	)
	return (
		<aside className={["block w-full md:w-[358px] fixed md:static bg-gray-600 px-8 [@media(max-width:869px)]:h-full transition-[left] smooth delay-700", `${isOpen ? "" : "[@media(max-width:869px)]:left-out"}`].join(" ")}>
			<span className="block w-full my-6 text-gray-100 text-xl font-bold">Lesson's timeline</span>
			<div className="w-full flex flex-col gap-5 overflow-y-auto">
				{data?.lessons.map(({id, availableAt, ...lesson}) => (
					<Lesson
						key={id}
						availableAt={new Date(availableAt)}
						{...lesson}
					/>
				))}
			</div>
		</aside>
	)
}
