import { Link } from 'react-router-dom';

type Link = {
	content : string,
	href : string
}


type FooterItemProps = {
	title : string,
	links : Link[],
	index : number
}


const styles = {
	title : "capitalize my-4 text-zinc-800 dark:text-zinc-500 md:text-left max-sm:text-center",
	link : "text-xs mb-2 text-zinc-700 dark:text-zinc-300 md:text-left max-sm:text-center"
}


const FooterItem = (props: FooterItemProps) => {
	return (
		<div className='w-full'>

			<h4 className={styles.title}>
				{props.title}
			</h4>
			
			<ul>
				{
					props.links.map((link) => {
						const keyStr = `${link.content} - ${props.index}`

						return (
							<li 
								className={styles.link} key={keyStr}>
								<Link to={link.href}>
									{link.content}
								</Link>
							</li>
						)
				})}
			</ul>
		</div>
	)
}

export default FooterItem;