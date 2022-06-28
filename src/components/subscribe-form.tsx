import {
	useState,
	FormEvent,
	ChangeEvent
} from 'react'

import {
	useCreateSubscriberMutation
} from '../lib/graphql/generated'

import {
	FileInput
} from './file-input'

import { Loader } from './loader'

type FormProps = {
	onSuccess: ()=>void;
}

const alternateUrl = "https://i.ibb.co/Xz0swHX/png-20220626-165112-0000.png"

export function SubscribeForm({
	onSuccess
}:FormProps) {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [avatarUrl, setAvatarUrl] = useState("")
	const [hasSubmited, setHasSubmited] = useState(false)

	const [subscribe, { loading, error }] =  useCreateSubscriberMutation()

	function onUploadSuccess(value:string) {
		setAvatarUrl(value)
	}

	function handleChange(evnt:ChangeEvent<HTMLInputElement>) {
		const { value, name: field } = evnt.target
		if(!value) {
			return
		}

		if(field === "name") {
			setName(value)
		} else {
			setEmail(value)
		}
	}

	async function handleSubmit(e:FormEvent) {
		e.preventDefault()

		if(!email || !name) {
			return
		}

		await subscribe({
			variables: {
				name,
				email,
				avatarUrl: avatarUrl ? avatarUrl : alternateUrl
			}
		})

		if(error) {
			return
		}

		setTimeout(() => {
			setName("")
			setEmail("")
			setAvatarUrl("")
			setHasSubmited(true)
			onSuccess()
		},500)
	}

	return (
		<section className="lg:flex-[0.3] h-fit bg-gray-600 border-0 lg:border-[1px] border-gray-300 lg:rounded-md p-4 lg:p-6 flex flex-col gap-6">
			<h1 className="text-gray-100 font-bold">
				Register free
			</h1>
			<form
				onSubmit={handleSubmit}
				className="w-full h-full flex flex-col gap-10"
			>
				<div className=" flex-1 flex gap-4">
				<div className="flex-1 flex flex-col gap-4">
				<input
					type="text"
					name="name"
					value={name}
					minLength={10}
					placeholder="Full name"
					onChange={handleChange}
					className="flex-1 placeholder:text-gray-400 text-gray-100 indent-4 bg-gray-700 rounded outline-0 border-0 focus:border focus:border-green-500 invalid:border invalid:border-red-400"
				/>
				<input
					type="email"
					name="email"
					value={email}
					minLength={16}
					placeholder="Your best email"
					onChange={handleChange}
					className="flex-1 placeholder:text-gray-400 text-gray-100 indent-4 bg-gray-700 rounded outline-0 blur:border-0 focus:border focus:border-green-500 invalid:border invalid:border-red-400"
				/>
					</div>
				<FileInput
					onChange={onUploadSuccess}
					hasSubmited={hasSubmited}
					className="w-36 h-36 md:w-48 md:h-48 bg-gray-700 rounded group-focus:border group-focus:border-green-500 overflow-hidden"
				/>
				</div>
				<button
					disabled={loading}
					className="bg-green-400 hover:bg-green-500 text-gray-100 font-bold rounded-md disabled:bg-green-500 py-5 overflow-y-hidden"
				>
					{loading ? (
						<Loader
							type="spinner"
							className="after:bg-green-500"
						/>
					) : (
						"ENSURE MY VAGA"
					)}
				</button>
			</form>
		</section>
	)
}
