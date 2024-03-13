import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

import Switcher from './SwitcherElement.tsx'

import sun from '../../../../assets/icons/icons8-sun.svg'

export const ThemeSwitcher = () => {

	return (
		<Switcher >
			<img src={sun} alt="" className='dark:opacity-0 dark:rotate-180 opacity-100 transition-all duration-300'/>
			<FontAwesomeIcon 
				icon={faMoon} 
				className={"dark:opacity-100 dark:rotate-0 opacity-0 -rotate-180 transition-all duration-300 absolute"}/>
		</Switcher>

	)
}


export default ThemeSwitcher