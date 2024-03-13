import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import social from "./socialLinks2"

const MiniFooter = () => {
	return (
		<div className="bg-neutral-900 w-full text-zinc-100 py-10">
			<div className="flex justify-center text-2xl gap-8 mb-6 ">
				{
					social.map((item)=>{
						return (
							<a href={item.link} className="" key={item.index}>
								<FontAwesomeIcon icon={item.icon}/>

							</a>
						)})
				}
			</div>
			<div className="w-16 h-px mb-6  bg-white mx-auto"></div>
			<div className="text-xs text-center text-zinc-400">Copyright © And Made With Love All Rights Reserved.</div>
		</div>
	)
}

export default MiniFooter