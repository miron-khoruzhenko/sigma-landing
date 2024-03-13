import { useEffect, useState } from "react"

import NavbarLinks from "../NavbarLinks/NavbarLinks";
import Hamburger from "./Hamburger";

const SidebarScreen = () => {

	const [modeStyles, setModeStyles] = useState('')
	const [isBurgerPressed, setIsBurgerPressed] = useState(false)


	const closeMode = "opacity-0 left-full",
				openMode = "opacity-100 left-0 ";



	const styles = {
		container : ` flex flex-col sm:hidden w-screen h-[100lvh] absolute top-0 justify-center items-center gap-12  duration-700 z-10 `,
		containerBg : ' bg-white/50 dark:bg-black backdrop-blur-md dark:bg-opacity-80 bg-opacity-80 ',
		div : "absolute bottom-5 right-5 scale-125",
		hamburger : "block sm:hidden z-20 -mb-2 relative select-none  ",
		hamburgerPsu : "after:block after:absolute after:w-14 after:h-14 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
	}

	const linkStyles = {
		links : "relative transition-colors dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-50 flex gap-4 justify-center items-center text-md   ",
		linksAfter : `after:block after:h-[2px] after:w-full after:my-1 after:transition-opacity after:absolute after:opacity-0 after:bg-zinc-500 dark:after:bg-zinc-200 hover:after:opacity-100 `,
		activeLink : 'dark:text-zinc-50 '
	}



	const handleClick : React.MouseEventHandler<HTMLDivElement> = e => {
		const target = e.target as HTMLElement

		if ('A' === target.tagName){
			setIsBurgerPressed(false)
			setModeStyles(closeMode)
		}
	}



	const handleBurgerClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault()

		setIsBurgerPressed(!isBurgerPressed)
	}


	useEffect(()=>{
		if(isBurgerPressed){
			setModeStyles(openMode)
			document.body.style.overflow = 'hidden'
		}else{
			setModeStyles(closeMode)
			document.body.style.overflow = 'scroll'
		}

	}, [isBurgerPressed])


	return (
		<>
		<div className={styles.hamburger + styles.hamburgerPsu} onClick={handleBurgerClick}>
			<Hamburger isButtonPressed={isBurgerPressed}/>
		</div>

		<aside 
			className={styles.container + styles.containerBg + modeStyles}
			onClick={handleClick}
			>
			<NavbarLinks mode={'vertical'} linkStyles={linkStyles}/>
			<div className={styles.div}>
				{/* <ThemeSwitcher/> */}
			</div>
		</aside>
		</>
	)
}

export default SidebarScreen