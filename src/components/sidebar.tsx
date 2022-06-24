import { useQuery, gql } from '@apollo/client'
import { Lesson } from './lesson'
import {
	RETRIEVE_ALL_LESSONS,
	POLL_INTERVAL
} from '../lib/apollo'
import { Lesson as LessonType } from '../custom-types.d'

type LessonQueryResponse = {
	lessons: Pick<LessonType, "id" | "title" | "slug" | "lessonType" | "availableAt">[]
}

interface SidebarProps {
	isOpen: boolean;
	onClose: ()=>void;
}

export function Sidebar({
	isOpen, onClose
}:SidebarProps) {
	const { data } = useQuery<LessonQueryResponse>(
		RETRIEVE_ALL_LESSONS,
		{ pollInterval: POLL_INTERVAL }
	)
	return (
		<aside className={["md:block w-full md:w-[358px] mb:fixed bg-gray-600 px-8 mb:h-full mb:py-[calc(4.35rem+1px)] transition-all smooth duration-700 z-50", `${isOpen ? "right-0" : "mb:right-out"}`].join(" ")}>
			<span className="block w-full my-6 text-gray-100 text-xl font-bold">Lesson's timeline</span>
			<div className="w-full flex flex-col gap-5 overflow-y-auto">
				{data?.lessons.map(({id, availableAt, ...lesson}) => (
					<Lesson
						key={id}
						onRedirect={onClose}
						availableAt={new Date(availableAt)}
						{...lesson}
					/>
				))}
			</div>
		</aside>
	)
}
