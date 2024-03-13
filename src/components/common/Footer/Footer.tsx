import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import items from './lists.js';
import navbar from './verticalList.js';
import social from './socialLinks.js';

import FooterItem from './FooterItem.js';


const Footer = () => {
	return (
		<footer className={styles.footer}>

			<div className={styles.div1}>
				{/*//* Link lists */}
				<div className={styles.div2}>
					<div className={styles.div3}>
						{items.map((item) => {
							return (
								<FooterItem 
									title={item.title} 
									links={item.links} 
									index={item.index} 
									key={'FooterItem - ' + item.index} 
								/>
							)
						})}
					</div>

					<div className={styles.div3}>
						{/*//* Country */}
						<div className={styles.country}>
							Russia
						</div>

						{/*//* Footer navbar */}
						<div className={styles.navDiv}>

							<ul className={styles.navUl}>
								{
								navbar.map(item => {
									return <li className={styles.navLi} key={item.index}>
										<Link to={item.href}>{item.content}</Link></li>
								})
								}
							</ul>

							{/*//* Social Icons */}
							<ul className={styles.socialUl}>
								{social.map( item => {
									return (
									<li key={item.index} 
										className={styles.socialLi}>
										<a href={item.link}>
											<FontAwesomeIcon icon={item.icon} />
										</a>
									</li>)
								})}
							</ul>
	
						</div> {/*//* Footer navbar */}

					</div>
				</div>
			</div>

			<div className={styles.div5}>
				{/* Policity and rights */}
				<h5 className={styles.policityTitle}>
					&copy;2023 FROM RUSSIA WITH LOVE
				</h5>

				<ul className={styles.rightsUl}>
					<li className="">Terms and conditions</li>
					<li className="">Privacy Policy/Your Region Privacy Rights</li>
				</ul>
			</div>

		</footer>
	)
}

const styles = {
	footer: "w-full bg-zinc-200 dark:bg-zinc-800 shadow-sm text-sm pb-20 transition-colors duration-300",
	div1 : "pt-12 pb-6 border-y-2 border-zinc-300 dark:border-zinc-700/70 transition-colors duration-300",
	div2 : "container mx-auto",
	div3 : "flex md:justify-between md:flex-nowrap max-sm:flex-wrap",
	div4 : "flex justify-between mt-20",
	country : "py-2 px-6 lg:pr-20 md:px-8 mr-2 block max-md:hidden	bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300 transition-colors duration-300",
	navDiv : "flex items-center justify-between max-sm:flex-wrap max-sm:justify-center lg:w-auto sm:w-full",
	navUl : "flex max-sm:flex-wrap max-sm:justify-center max-sm:gap-4 max-sm:mb-4 space-x-3 transition-colors duration-300 max-sm:text-xs max-sm:text-center",
	navLi : "text-zinc-700 dark:text-zinc-300",
	socialUl : "flex space-x-1 lg:ml-5",
	socialLi : "p-1 w-9 h-9 text-xl text-zinc-800 dark:text-zinc-200 border-[1px] border-zinc-40 dark:border-zinc-800 dark:bg-zinc-700 transition-colors duration-300 flex justify-center items-center",
	div5 : "container mx-auto",
	policityTitle : "text-zinc-800 dark:text-zinc-500 uppercase text-xs mt-8 mb-1",
	rightsUl : "uppercase text-xs flex space-x-2 text-zinc-900 dark:text-zinc-400 transition-colors duration-300"
}


export default Footer;
