import RocketseatLogo from '../assets/rocketseat-logo.svg'

export function Footer() {
	return (
		<footer className="w-full p-4 flex flex-col gap-4 lg:gap-4 lg:flex-row items-center justify-center lg:justify-start text-gray-100">
			<img
				src={RocketseatLogo}
				alt="Rocketseat branding logo"
			/>
			<p>Rocketseat&trade; - All rights reserved</p>
			<p className="lg:ml-auto">Privacy policy</p>
		</footer>
	)
}
