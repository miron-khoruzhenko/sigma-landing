import { 
	faInstagram, 
	faLinkedin, 
	// faFacebook, 
	// faTwitter, 
	faGithub
} from "@fortawesome/free-brands-svg-icons"

import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import { MemberType } from "./types"

// import img from '/src/assets/img/team/luci.jpg'
import img1 from '/src/assets/img/team/miron.jpg'
import img2 from '/src/assets/img/team/yusuf.jpg'
import img3 from '/src/assets/img/team/akin.jpg'

let index = 0
let socialIndex = 0


const teamDB : MemberType[] = [
	{
		name 		: 'Miron',
		surname : 'Khoruzhenko',
		post 		: 'Otonom - Yazılım Ekip Lideri',
		img 		: img1,
		index 	: index++,
		socials : [
			{
				logo : faGithub,
				index : socialIndex++,
				href : 'https://github.com/miron-khoruzhenko?tab=repositories'
			},
			{
				logo : faLinkedin,
				index : socialIndex++,
				href : 'https://www.linkedin.com/in/miron-khoruzhenko-164085202/'
			},
			{
				logo : faInstagram,
				index : socialIndex++,
				href : 'https://www.instagram.com/miron.kh_/'
			},
			{
				logo : faEnvelope,
				index : socialIndex++,
				href : 'mailto:mironkhoruzhenko@gmail.com'
			}
		]
	},{
		name 		: 'Yusuf',
		surname : 'Karakaş',
		post 		: 'Takım Lideri',
		img 		: img2,
		index 	: index++,
		socials : [
			{
				logo : faLinkedin,
				index : socialIndex++,
				href : 'https://www.linkedin.com/in/karakasyusuf'
			},
			{
				logo : faInstagram,
				index : socialIndex++,
				href : 'https://instagram.com/yusufkarakas_8?igshid=MzMyNGUyNmU2YQ=='
			},
			{
				logo : faEnvelope,
				index : socialIndex++,
				href : 'mailto:karakassyusuf8@gmail.com'
			},
		]
	},{
		name		: 'Akın',
		surname : 'Karahan',
		post		: 'Aeromekanik Ekip Lideri',
		img			: img3,
		index		: index++,
		socials : [
			{
				logo : faLinkedin,
				index : socialIndex++,
				href : 'https://www.linkedin.com/in/ak%C4%B1n-karahan-692582266/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
			},
			{
				logo : faInstagram,
				index : socialIndex++,
				href : 'https://instagram.com/akinkarahan17?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr'
			},
			{
				logo : faEnvelope,
				index : socialIndex++,
				href : 'mailto:akinkarahan07@gmail.com'
			},
		]
	},
]

export default teamDB;