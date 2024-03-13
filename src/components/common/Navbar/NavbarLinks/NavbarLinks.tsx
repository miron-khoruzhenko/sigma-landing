import { links } from './links.ts'
// import { Link } from 'react-router-dom'

// import Link from '../../../features/AnimatedLink/Link.tsx';

type LinkStyles = {
  links: string;
  linksAfter: string;
  activeLink: string;
};

type NavbarLinksProps = {
	mode: string,
	className?: string,
	linkStyles: LinkStyles,
}	

const NavbarLinks : React.FC<NavbarLinksProps> = (props) => {
	const {mode, linkStyles} = props
	// const location = useLocation()

	const styles = {
		ul: `${mode === 'vertical' ? 
			'flex flex-col space-y-6 text-2xl uppercase font-["Roboto"] ' : 
			mode === 'horizontal' ? 
				"flex space-x-5 max-sm:hidden font-['Roboto'] text-zinc-900 " : 
				'' }`,
	}

	return (
		<ul className={styles.ul + props.className}>

		{links.map((item) => {
			return (
				<li className={linkStyles.links + " relative group cursor-default flex flex-col "} key={item.index}>

					<div className="flex items-center gap-2">
						<a href={item.href} className="">
							{item.name}

						</a>
						{/* <div className="border-r-2 border-b-2 w-2 h-2 border-black rotate-45 "></div> */}
					</div>

				</li>)
		})}
	</ul>
	)
}


export default NavbarLinks