import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Footer } from '../components/footer'
import { Loader } from '../components/loader'
import TikoTekoLogo from '../assets/tiko-teko-logo.svg'
import CodeBanner from '../assets/banner.png'

import {
	useCreateSubscriberMutationMutation
} from '../lib/graphql/generated'

type SubmitEvent = FormEvent<HTMLFormElement>

type LessonSlug = {
	slug: string;
}

export function Home() {
	const navigate = useNavigate()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")

	const [subscribe, { loading }] = useCreateSubscriberMutationMutation()

	async function handleSubmit(event:SubmitEvent) {
		event.preventDefault()

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
		<div className="bg-gray-700 bg-banner bg-[top_center] bg-no-repeat bg-cover bg-fixed">
			<main
				className="w-full xl:ml-auto flex flex-col lg:flex-row justify-between py-28 lg:pr-14"
			>
				<section className="lg:flex-[0.5] px-16">
					<img
						className="mx-auto h-10 md:mx-0"
						src={TikoTekoLogo}
						alt="Tiko Teko Lab logo"
					/>
					<h1 className="text-gray-100 text-4xl lg:text-6xl text-center lg:text-left my-16">
						Build an <span className="text-blue-400">entire application</span>, from scratch, with <span className="text-blue-400">React</span>.
					</h1>

					<p className="text-gray-300 mb-16 mt-[-2rem]">In only one week you'll dominate by doing with one of most used techs with high demand and acess to the best job opportunities.</p>
				</section>
				<form
					onSubmit={handleSubmit}
					className="flex-[0.3] lg:h-fit bg-gray-600 border-0 lg:border-[1px] border-gray-300 rounded-md px-16 py-8 lg:p-4 flex flex-col gap-8"
				>
					<h1 className="text-gray-100 font-bold">Register free</h1>
					<input
						type="text"
						value={name}
						minLength={10}
						placeholder="Full name"
						onChange={e=>setName(e.target.value)}
						className="w-full h-12 placeholder:text-gray-400 text-gray-100 indent-4 bg-gray-700 rounded outline-0 border-0 focus:border focus:border-green-500 invalid:border invalid:border-red-400"
					/>
					<input
						type="email"
						value={email}
						minLength={16}
						placeholder="Your best email"
						onChange={e=>setEmail(e.target.value)}
						className="w-full h-12 placeholder:text-gray-400 text-gray-100 indent-4 bg-gray-700 rounded outline-0 blur:border-0 focus:border focus:border-green-500 invalid:border invalid:border-red-400"
					/>
					<button
						disabled={loading}
						className="w-full h-10 bg-green-400 hover:bg-green-500 text-gray-100 font-bold rounded-md disabled:bg-green-500"
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
			</main>
			<img
				className="mb-16 md:mt-auto"
				src={CodeBanner}
				alt="An interface with programming code in it" 
			/>
			<Footer/>
		</div>
  )
}
