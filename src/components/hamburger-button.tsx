import { HTMLAttributes } from 'react'
import { X, List } from 'phosphor-react'

type BurgerButtonProps = HTMLAttributes<HTMLButtonElement> & {
	isOpen: boolean;
}

export function HamburgerButton({
	isOpen, ...props
}:BurgerButtonProps) {
	return (
		<button {...props}>
			{isOpen ? (
				<X size={32} />
			) : (
				<List size={32} />
			)}
		</button>
	)
}
