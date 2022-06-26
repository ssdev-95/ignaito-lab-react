import {
	HTMLAttributes,
	ChangeEvent,
	useState
} from 'react'

import fs from 'fs'

import { Plus } from 'phosphor-react'
import { api } from '../lib/api'

type FileInputProps = {
	className?: string;
	onChange?: (event:ChangeEvent<HTMLInputElement>)=>void;
}

export function FileInput({
	className, onChange
}:FileInputProps) {
	const [imagePreview, setImagePreview] = useState<any>(null)
	async function handleChange(e:ChangeEvent) {
		const file = e.currentTarget.files[0]
		const objectURL = URL.createObjectURL(
			file
		)

		setImagePreview(objectURL)
		
		try {
			const imageUploadData = new FormData()
		
			imageUploadData.append(
				`${Date.now()}-subscriber-avatar`,
				file
			)

			const { data } = await api.post(
				'upload',
				imageUploadData
			).catch(err => console.log(err))

			if(data) {
				console.log(data.url)
			}
		} catch (err:any) {
			console.log(err)
		} finally {
			setImagePreview(null)
			revokeObjectURL(objectURL)
		}
	}

	return (
		<label className={[
			"relative overflow-hidden",
			className
		].join(" ")}>
			<div className="w-full h-full flex flex-col items-center justify-center gap-4 text-gray-400 absolute">
				{imagePreview ? (
					<img
						src={imagePreview}
						className="h-full w-full object-cover"
					/>
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
