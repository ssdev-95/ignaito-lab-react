import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import {
	useCreateSubscriberMutation
} from '../lib/graphql/generated'

import {
	FileInput
} from './file-input'

import { Loader } from './loader'

export function SubscribeForm() {
	const navigate = useNavigate()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [subscribe, { loading }] =  useCreateSubscriberMutation()

	async function handleSubmit(e:FormEvent) {
		e.preventDefault()

		await subscribe({
			variables: { name, email}
		})

		setTimeout(() => {
			setName("")
			setEmail("")

			navigate('/event', {
				replace: false
			})
		},500)
	}

	return (
		<section className="h-[376px] lg:flex-[0.3] lg:h-fit bg-gray-600 border-0 lg:border-[1px] border-gray-300 rounded-md p-4 lg:p-6 flex flex-col gap-6">
			<h1 className="text-gray-100 font-bold">
				Register free
			</h1>
			<form
				onSubmit={handleSubmit}
				className="w-full h-full grid gap-4 cols-3 rows-3 bg-gray-700"
			>
				<input
					type="text"
					value={name}
					minLength={10}
					placeholder="Full name"
					onChange={
						e => setName(e.target.value)
					}
					className="placeholder:text-gray-400 text-gray-100 indent-4 bg-gray-700 rounded outline-0 border-0 focus:border focus:border-green-500 invalid:border invalid:border-red-400 row-start-1 row-end-2 col-start-1 col-end-2"
				/>
				<input
					type="email"
					value={email}
					minLength={16}
					placeholder="Your best email"
					onChange={
						e => setEmail(e.target.value)
					}
					className="placeholder:text-gray-400 text-gray-100 indent-4 bg-gray-700 rounded outline-0 blur:border-0 focus:border focus:border-green-500 invalid:border invalid:border-red-400 row-start-2 row-end-3 col-start-1 col-end-2"
				/>
				<FileInput
					className="relative row-start-2 row-end-3 col-start-3 col-end-4"
				/>
				<button
					disabled={loading}
					className="bg-green-400 hover:bg-green-500 text-gray-100 font-bold rounded-md disabled:bg-green-500 col-start-1 col-end-4 row-start-3 row-end-4"
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
