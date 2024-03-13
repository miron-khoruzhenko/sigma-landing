import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

let index = 0

const social = [
	{
		icon: faLinkedin,
		link: 'https://www.linkedin.com/company/ytu-sigma-aeronautics?originalSubdomain=tr',
		index: index++,
	},
	{
		icon: faGithub,
		link: 'https://github.com/miron-khoruzhenko',
		index: index++,
	},
	{
		icon: faInstagram,
		link: 'https://www.instagram.com/ytusigmaaero/',
		index: index++
	},
	
]

export default social;