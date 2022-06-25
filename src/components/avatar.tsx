import { useState, useEffect } from 'react'
import { Loader } from './loader'

type AvatarProps = {
	source: string;
}

export function Avatar({ source }:AvatarProps) {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false)
		}, 3000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<div
			className="h-16 w-16 rounded-full bg-blue-400 overflow-hidden border-4 border-blue-400 flex items-center justify-center"
		>
			{loading ? (
				<Loader
					type="spinner"
					className="after:bg-blue-400 after:h-15 after:w-15"
				/>
			) : (
				<img
					src={source}
					className="h-full w-full"      
				/>
			)}
		</div>
	)
}
