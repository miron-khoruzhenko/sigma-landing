import { useEffect } from 'react'


type LoaderProps = {
	bg : string
}

const Loader = (props : LoaderProps) => {
	useEffect(()=>{

		return()=>{
			document.body.classList.remove('overflow-hidden', 'h-screen')
		}
	})
	return (
		<div className={`bg-zinc-900 text-zinc-300	 w-screen h-screen flex justify-center items-center text-7xl z-20 fixed	top-0 left-0 ${props.bg}`}>
			Loading ...
		</div>
	)
}

export default Loader