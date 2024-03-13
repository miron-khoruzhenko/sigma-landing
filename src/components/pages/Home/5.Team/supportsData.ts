// import { 
// 	faInstagram, 
// 	faLinkedin, 
// 	faFacebook, 
// 	faTwitter, 
// 	faGithub
// } from "@fortawesome/free-brands-svg-icons"

import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from '@fortawesome/free-solid-svg-icons'

// import img from '/src/assets/img/team/luci.jpg'
import img1 from '/src/assets/img/team/alp_tekin.jpg'
import img2 from '/src/assets/img/team/ozlen_agra.png'

import { MemberType } from "./types"

let index = 0
let socialIndex = 0



const supportsDB : MemberType[] = [
	{
		name 		: 'Alp Tekin',
		surname : 'Ergenç',
		post 		: 'Takım Danışmanı',
		img 		: img1,
		index 	: index++,
		socials : [
			{
				logo : faEnvelope,
				href : 'mailto:aergenc@yildiz.edu.tr',
				index : socialIndex++,
			},
			{
				logo : faPhone,
				href : 'tel:+902123832835',
				index : socialIndex++,
			}
		]
	},
	{
		name 		: 'Özden',
		surname : 'Ağra',
		post 		: 'Takım Danışmanı',
		img 		: img2,
		index 	: index++,
		socials : [
			{
				logo : faEnvelope,
				href : 'mailto:oagra@yildiz.edu.tr',
				index : socialIndex++,
			},
		]
	}
]

export default supportsDB;