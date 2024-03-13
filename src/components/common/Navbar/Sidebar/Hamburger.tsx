import './hamburgers/hamburgers.scss'

type HamburgerProps = {
	isButtonPressed : boolean,
}

const Hamburger = (props : HamburgerProps) => {

	return (
		<button className={`hamburger hamburger--collapse z-40 ${props.isButtonPressed ? "is-active" : "" } `} type="button">
			<span className="hamburger-box ">
				<span className="hamburger-inner bg-zinc-800 dark:bg-zinc-300 before:bg-zinc-800 dark:after:bg-zinc-300 after:bg-zinc-800 dark:before:bg-zinc-300 "></span>
			</span>
	</button>

	)
}

export default Hamburger