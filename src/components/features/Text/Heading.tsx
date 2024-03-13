import React from 'react'

type HeadingProps = {
	className? : string,
	children : React.ReactNode,

}

const Heading = (props : HeadingProps) => {	
	const defaultClasses = ['font-extrabold', 'uppercase', 'text-4xl', 'md:text-5xl', 'text-zinc-900', 'font-["Roboto"]' ]

	const className = props.className


	
	if(className){
		if(!className.match('text-(left|right)')){
				defaultClasses.push('text-center')
		}
		
		// if(!className.match('text-([1-9]?)xl')){
		// 	defaultClasses.push('text-5xl')
		// }
	}else{
		// defaultClasses.push('text-center', 'text-5xl')
		defaultClasses.push('text-center')
	}

	return (
		<h2 
			className={`${defaultClasses.join(' ')} ${ className ? className : ''}`}>
				{props.children}
		</h2>
	)
}

export default Heading