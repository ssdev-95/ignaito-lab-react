import IgniteLabLogo from '../assets/ignite-lab-logo.svg'

export function Header() {
	return (
		<header
			className="w-[100vw] 2xl-[1248px] flex items-center justify-center py-[1.45rem]"
		>
			<img
				className="h-[1.45rem] lg:h-[2rem] w-auto"
				src={IgniteLabLogo}
				alt="IgniteLab logo"
			/>
		</header>
	)
}
