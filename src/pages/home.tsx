import { FormEvent } from 'react'

import {
	Link,
	useNavigate
} from 'react-router-dom'

import { Footer } from '../components/footer'
import TikoTekoLogo from '../assets/tiko-teko-logo.svg'
import CodeBanner from '../assets/banner.png'

type SubmitEvent = FormEvent<HTMLFormElement>

export function Home() {
	const navigate = useNavigate()
	function handleSubmit(event:SubmitEvent) {
		event.preventDefault()
		event.target.reset()

		setTimeout(
			()=>navigate("/lesson", { replace: false }),
			500
		)
	}
  return (
		<div className="bg-gray-700 bg-banner bg-[top_center] bg-no-repeat bg-cover bg-fixed">
			<main
				className="w-full xl:ml-auto flex flex-col lg:flex-row justify-between py-28"
			>
				<section className="lg:flex-[0.6] px-14">
					<img
						src={TikoTekoLogo}
						alt="Tiko Teko Lab logo"
					/>
					<h1 className="text-gray-100 text-4xl text-center lg:text-left my-16">
						Build an <span className="text-blueish">entire application</span>, from scratch, with <span className="text-blueish">React JS</span>
					</h1>

					<p className="text-gray-300 mb-16 mt-[-2rem]">In only one week you'll dominate by doing on of most used techs with high demand to acess the best job opportunities.</p>
				</section>
				<form
					onSubmit={handleSubmit}
					className="w-full lg:w-132 lg:h-fit bg-gray-600 border-0 lg:border-[1px] border-gray-300 rounded-md px-16 py-8 lg:p-4 flex flex-col gap-8"
				>
					<h1 className="text-gray-100">Register free!</h1>
					<input
						required
						type="text"
						placeholder="Full name"
						className="w-full h-12 placeholder:text-gray-400 text-blue-400 indent-4 bg-gray-700"
					/>
					<input
						required
						type="email"
						placeholder="Your best email"
						className="w-full h-12 placeholder:text-gray-400 text-blue-400 indent-4 bg-gray-700"
					/>
					<button className="w-full h-10 bg-green-500 text-gray-100 rounded-md">ENSURE MY VAGA</button>
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
