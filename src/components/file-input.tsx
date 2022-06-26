import {
	HTMLAttributes,
	ChangeEvent,
	useState
} from 'react'

import { Plus } from 'phosphor-react'

import { Loader } from './loader'
import { api } from '../lib/api'

type FileInputProps = {
	className?: string;
	onChange?: (event:ChangeEvent<HTMLInputElement>)=>void;
}

export function FileInput({
	className, onChange
}:FileInputProps) {
	const [imagePreview, setImagePreview] = useState<any>(null)
	const [loading, setLoading] = useState(false)
	async function handleChange(e:ChangeEvent) {
		const file = e.currentTarget.files[0]
		const objectURL = URL.createObjectURL(
			file
		)

		console.log(api.defaults)
		
		try {
			setLoading(true)
			setImagePreview(objectURL)
			const imageUploadData = new FormData()
		
			imageUploadData.append(
				`${Date.now()}-subscriber-avatar`,
				file
			)

			const data = await api.post(
				'upload',
				imageUploadData
			)

			console.log(data)
		} catch (err:any) {
			console.log(err)
		} finally {
			setImagePreview(null)
			revokeObjectURL(objectURL)
			setLoading(false)
		}
	}

	return (
		<label className={[
			"relative overflow-hidden",
			className
		].join(" ")}>
			<div className="w-full h-full flex flex-col items-center justify-center gap-4 text-gray-400 absolute">
				{loading ? (
					<Loader
						type="spinner"
						className="after:bg-gray-700"
					/>
				) : (
					imagePreview ? (
						<img
							src={imagePreview}
							className="h-full w-full object-cover"
						/>
					) : (
						<>
							<Plus size={36} weight="fill"/>
							<p>Upload avatar</p>
						</>
					)
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
