import { Footer } from '../components/footer'
import { Avatar } from '../components/avatar'

import {
	SubscribeForm
} from '../components/subscribe-form'

import {
	useGetLast6SubscribersQuery
} from '../lib/graphql/generated'

import { POLL_INTERVAL } from '../lib/apollo'
import TikoTekoLogo from '../assets/tiko-teko-logo.svg'
import CodeBanner from '../assets/banner.png'

export function Home() {
	const { data } = useGetLast6SubscribersQuery({ pollInterval: POLL_INTERVAL })

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
					<div
						className="flex gap-2 flex-wrap mb-10 justify-center max-w-fit"
					>{
						data && data.subscribers.map(user => (
							<Avatar
								key={user.id}
								className="flex-none peer-*:-translate-x-[50%]"
								source={user.avatarUrl}
							/>
						))
					}</div>
				</section>
				<SubscribeForm />
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
