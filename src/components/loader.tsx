import { HTMLAttributes } from 'react'
import ContentLoader from 'react-content-loader'

type LoaderProps = HTMLAttributes<SVGElement>

export function Loader(props:LoaderProps) {
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
