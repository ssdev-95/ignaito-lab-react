import {
	ChangeEvent,
	useState,
	useCallback
} from 'react'

import { AxiosRequestConfig } from 'axios'
import { Plus } from 'phosphor-react'

import { Loader } from './loader'
import { api } from '../lib/api'

type FileInputProps = {
	className?: string;
	onChange?: (value:string) => void;
}

export function FileInput({
	className, onChange
}:FileInputProps) {
	const [imagePreview, setImagePreview] = useState("")
	const [loading, setLoading] = useState(false)
	const [progress, setProgress] = useState(0)
	
	const handleChange = useCallback(
		async (e:ChangeEvent<HTMLInputElement>) => {
			if(!e.target.file.length) return;
			setLoading(true)

			const uploadData = new FormData()

			uploadData.append(
				'image',
				event.target.files[0]
			)

			uploadData.append(
				'key',
				import.meta.env.VITE_IMGBB_API_KEY
			)

			const config = {
				headers: {
					'content-type': 'multipart/form-data'
				},
				onUploadProgress: (e: ProgressEvent) => {
					setProgress(
						Math.round(
							(e.loaded * 100) / e.total
						)
					)
				}
			} as AxiosRequestConfig


			try {
				const { data } = await api.post(
					'upload',
					uploadData,
					config
				)

				setImagePreview(data.url)
			} catch (err) {
				alert(err)
			} finally {
				setProgress(0)
				setLoading(false)
			}
		}, []
	)

	return (
		<label className={[
			"relative overflow-hidden",
			className
		].join(" ")}>
			<div className="w-full h-full flex flex-col items-center justify-center gap-4 text-gray-400 absolute">
				{loading ? (
					<>
						<Loader
							type="spinner"
							className="after:bg-gray-700"
						/>
						<p className="text-gray-300">{progress}</p>
					</>
				) : (
					<>
						<Plus size={36} weight="fill"/>
						<p>Upload avatar</p>
					</>
				)}
			</div>


			<input
				type="file"
				accept="image/png, image/jpeg"
				className="opacity-0 w-0 group"
				onChange={handleChange}
			/>
		</label>
	)
}
