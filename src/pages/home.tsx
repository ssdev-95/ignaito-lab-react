import { FormEvent, useState } from 'react'
import { useMutation } from '@apollo/client'

import { useNavigate } from 'react-router-dom'

import { Footer } from '../components/footer'
import TikoTekoLogo from '../assets/tiko-teko-logo.svg'
import CodeBanner from '../assets/banner.png'

import {
	SUBSCRIBE_MUTATION,
	POLL_INTERVAL
} from '../lib/apollo'

type SubmitEvent = FormEvent<HTMLFormElement>

type LessonSlug = {
	slug: string;
}

export function Home() {
	const navigate = useNavigate()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")

	const [subscribe, { loading }] = useMutation(
		SUBSCRIBE_MUTATION
	)

	async function handleSubmit(event:SubmitEvent) {
		event.preventDefault()
		
		//data.createSubscriber.id

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
				<section className="lg:flex-[0.6] px-16">
					<img
						className="mx-auto h-10 md:mx-0"
						src={TikoTekoLogo}
						alt="Tiko Teko Lab logo"
					/>
					<h1 className="text-gray-100 text-4xl text-center lg:text-left my-16">
						Build an <span className="text-blue-400">entire application</span>, from scratch, with <span className="text-blue-400">React JS</span>
					</h1>

					<p className="text-gray-300 mb-16 mt-[-2rem]">In only one week you'll dominate by doing on of most used techs with high demand to acess the best job opportunities.</p>
				</section>
				<form
					onSubmit={handleSubmit}
					className="flex-[0.4] lg:h-fit bg-gray-600 border-0 lg:border-[1px] border-gray-300 rounded-md px-16 py-8 lg:p-4 flex flex-col gap-8"
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
							<div
								className="w-8 h-8 relative mx-auto"
							>
								<div
									className="w-full h-full bg-grad rounded-full animate-spin after:content-[''] after:h-[90%] after:w-[90%] after:rounded-full after:bg-green-500 after:absolute after:left-[50%] after:-translate-x-[50%] after:top-[50%] after:-translate-y-[50%]"
								/>
							</div>
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
