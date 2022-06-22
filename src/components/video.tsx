import { Footer } from '../components/footer'
import type { Lesson } from '../custom-types.d'

type VideoProps = {
	lesson: Lesson;
}

export function Video() {
	return (
		<section
			className="block flex-1 grid place-items-center bg-gray-700"
		>
			<p className="text-gray-100">
				video
			</p>
		</section>
	)
}
