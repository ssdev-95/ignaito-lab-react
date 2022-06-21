import TikoTekoLogo from '../assets/tiko-teko-logo.svg'

export function Header() {
	return (
		<header
			className="w-[100vw] 2xl-[1248px] flex items-center justify-center py-[1.45rem]"
		>
			<img
				className="h-[1.45rem] lg:h-[2rem] w-auto"
				src={TikoTekoLogo}
				alt="IgniteLab logo"
			/>
		</header>
	)
}
