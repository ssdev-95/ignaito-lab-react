import TikoTekoLogo from '../assets/tiko-teko-logo.svg'

import { HamburgerButton } from './hamburger-button'

interface HeaderProps {
	isMenuOpen: boolean;
	handleOpenMenu: () => void;
}

export function Header({
	isMenuOpen, handleOpenMenu
}:HeaderProps) {
	return (
		<header
			className="w-[100vw] 2xl-[1248px] flex items-center justify-between md:justify-center py-[1.45rem] px-4 bg-gray-600 border-b border-gray-400"
		>
			<img
				className="h-[1.45rem] lg:h-[2rem] w-auto"
				src={TikoTekoLogo}
				alt="IgniteLab logo"
			/>
			<HamburgerButton
				className="text-gray-100 md:hidden"
				onClick={handleOpenMenu}
				isOpen={isMenuOpen}
			/>
		</header>
	)
}
