import {
	HTMLAttributes,
	ChangeEvent,
	useState
} from 'react'

import { Plus } from 'phosphor-react'

type FileInputProps = {
	className?: string;
	onChange?: (event:ChangeEvent<HTMLInputElement>)=>void;
}

export function FileInput({
	className, onChange
}:FileInputProps) {
	const [imagePreview, setImagePreview] = useState<string | File | null>(null)
	/*async function handleChange(e:any) {
		alert(typeof e.currentTarget.files[0])
	}*/

	return (
		<label className={className}>
			<div className="w-full h-full flex flex-col items-center justify-center gap-4 text-gray-400 absolute">
				{imagePreview ? (
					<img
						src={imagePreview}
						className="h-full w-full"
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
				className="opacity-0"
				onChange={e => {
					alert(
						typeof e.currentTarget.files[0]
					)
				}}
			/>
		</label>
	)
}
