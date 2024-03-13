import { useEffect, useState } from 'react'

// import { Link } from 'react-router-dom'
// import Link from '../../features/AnimatedLink/Link.tsx'

import Loader from '../Loader/Loader.tsx'
import SidebarScreen from './Sidebar/SidebarScreen.tsx'
import NavbarLinks from './NavbarLinks/NavbarLinks.tsx'

import logo from '/src/assets/img/logo/sigma_logo_md.png'
// import logoTxt from '/src/assets/img/logo/sigma_logo_text.png'
import logoTxt from '/src/assets/img/logo/sigma_logo_text_sm.png'

type NavProps = {
	isSwitcherActive? : boolean,
	variant? : 'dark' | 'light' | 'inherit' | 'allLight',
	className? : string,
}

const Navbar = (props : NavProps) => {

	const [isScrolledDown, setIsScrolledDown] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	// const [isBurgerPressed, setIsBurgerPressed] = useState(false)


	const styles = {
		nav : `w-full h-15 fixed top-0 z-50 transition-all duration-300 ${props.className} `,
		container : `container transition-all mx-auto flex justify-between items-center `,
		logo : 'flex justify-center items-center ',
		logoTitle : `text-xl transition-all duration-300 cursor-pointer font-extrabold leading-4 text-center -translate-y-1	${isScrolledDown ? 'opacity-100 ' : 'opacity-0 '} `,
		logoTitleUp : 'bg-gradient-to-b text-black bg-clip-text text-2xl leading-5 font-["Lato"] ',
		logoTitleDown : 'bg-gradient-to-tr from-red-900 via-red-600 to-red-800 text-transparent bg-clip-text',
		ul : "flex items-center space-x-1  ",
		navbarLinks : {
			links : "relative transition-colors  text-sm flex justify-center items-center gap-1  uppercase ",
			linksAfter : `after:block after:h-[2px] after:w-full after:my-1 after:transition-opacity after:absolute after:opacity-0 after:bg-zinc-500 dark:after:bg-zinc-200 hover:after:opacity-100 after:-bottom-2  `,
			activeLink : 'dark:text-zinc-50  '
		},
		}


	if (isScrolledDown){
		styles.nav += 'shadow-lg dark:bg-zinc-800 bg-white '
		styles.container += 'py-2 px-4 '
		styles.navbarLinks.linksAfter += 'after:bg-zinc-500 dark:after:bg-zinc-200 '
	}else{
		styles.container += 'p-4 '
		styles.navbarLinks.links += 'hover:text-zinc-200 text-white  '
		styles.logoTitle += 'dark:text-zinc-50 dark:hover:text-zinc-200 '
	}

	

	const handleScroll = () => {
		if(window.scrollY >= 90){
			setIsScrolledDown(true)
		}else if(window.scrollY < 90){
			setIsScrolledDown(false)

		}
	}


	useEffect(() => {
		// console.log('Navbar: Mounted')
		window.addEventListener('scroll', handleScroll);
		handleScroll()
		setIsLoaded(true)

		return () => {
			window.removeEventListener('scroll', handleScroll);
			// console.log('Navbar: Unmounted')
		}

	},[])

  return (
		<>
		{isLoaded ? 
		(<nav className={styles.nav} onScroll={handleScroll}>
			<div className={styles.container}>

				<div className={styles.logo}>
					<a className="relative h-8" href='/'>
							{/* <div className={styles.logoTitle}>
								<span className={styles.logoTitleUp}>sigma </span> <br />
								<span className={styles.logoTitleDown}> 	aeronautics</span>
							</div> */}
						<div className="absolute h-10 w-40 -top-1 flex justify-start items-center">
							<img src={logo} alt="" className={`object-contain transition-opacity duration-500 h-full ${isScrolledDown ? 'opacity-0 ':'opacity-100 '}`} />

						</div>
						<div className="absolute h-10 w-40 -top-1 flex justify-start items-center pl-4">
							<img src={logoTxt} alt="" className={`object-contain transition-opacity duration-500 h-full  ${isScrolledDown ? 'opacity-100 ':'opacity-0 '}`} />

						</div>
					</a>
				</div>

				<NavbarLinks mode={'horizontal'} linkStyles={styles.navbarLinks} className={''}/>

				<SidebarScreen />
			</div>
		</nav>) : <Loader bg={''}/>
		}
		</>

  )

	
}

Navbar.defaultProps = {
	isSwitcherActive : true,
	mode : 'inherit'
}

export default Navbar;