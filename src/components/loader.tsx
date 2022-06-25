import { HTMLAttributes } from 'react'
import ContentLoader from 'react-content-loader'

type LoaderProps = HTMLAttributes<SVGElement> & {
	type?: "spinner" | "skeleton";
}

export function Loader({
	type, after, ...props
}:LoaderProps) {
	if(type === "spinner") {
		return (
			<div
				className="w-10 h-10 relative mx-auto flex items-center justify-center"
			>
				<div
					className={["w-8 h-8 bg-grad rounded-full animate-spin after:content-[''] after:h-[90%] after:w-[90%] after:rounded-full after:absolute after:left-[50%] after:-translate-x-[50%] after:top-[50%] after:-translate-y-[50%]", props.className].join(" ")}
				/>
			</div>
		)
	}

	return (
		<ContentLoader
			speed={3}
			width="100%"
			viewBox="0 0 400 160"
			backgroundColor="#a6a6a6"
			foregroundColor="#ecebeb"
			{...props}
		>
			<rect x="0" y="114" rx="3" ry="3" width="100%" height="6" />
	    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
	    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
	    <rect x="0" y="93" rx="3" ry="3" width="100%" height="6" /> 
	    <rect x="0" y="72" rx="3" ry="3" width="100%" height="6" /> 
	    <rect x="0" y="51" rx="3" ry="3" width="100%" height="6" />

		  <circle cx="20" cy="20" r="20" />
		</ContentLoader>
	)
}
