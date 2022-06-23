import { HTMLAttributes } from 'react'
import HoustonWeHaveAProblem from '../assets/houston-we-have-a-problem.svg'
type ErrProps = HTMLAttributes<HTMLDivElement> & {
	title?: string;
}

export function ErrBoundary({
	title, ...props
}:ErrProps) {
	return (
		<div {...props}>
			<div className="max-w-[85%] grid cols-1 gap-6">
				<img
					src={HoustonWeHaveAProblem}
					alt="An astronaut svg art design"
				/>

				<span className="text-[#3f3d56] text-4xl md:text-5xl font-bold leading-relaxed">
					Houston, We Have A Problem!
				</span>

				<span className="text-3xl md:text-4xl font-medium leading-relaxed">
					{title}
				</span>
			</div>
		</div>
	)
}
