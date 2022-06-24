/* @vite-ignore */
import {
	DefaultUi,
	Player as VimePlayer,
	Youtube
} from '@vime/react'

import '@vime/core/themes/default.css'

type PlayerProps = {
	videoId: string;
}

export function Player({ videoId }:PlayerProps) {

	return (
		<div
			className="bg-gray-800 flex justify-center w-full"
		>
			<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
				<VimePlayer>
					<Youtube
						key={videoId}
						videoId={videoId}
					/>
					<DefaultUi />
				</VimePlayer>
			</div>
		</div>
	)
}
