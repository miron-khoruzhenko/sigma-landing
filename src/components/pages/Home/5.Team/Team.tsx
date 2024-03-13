import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import teamDB, { MemberType } from "./teamData"
import { MemberType } from "./types"
import Heading from "../../../features/Text/Heading"


type TeamProps = {
	heading : string,
	data : MemberType[]
}

const Team = (props : TeamProps) => {
	const styles = {
		team : 'container mx-auto py-20 px-2',
		members : 'flex flex-col justify-center gap-8 md:flex-row lg:justify-around',
	}

	return (
		<section className={styles.team} id="team">
			<Heading className="text-center mb-8">{props.heading}</Heading>

			<div className={styles.members}>
			{
				props.data.map(member => (
					<Member 
						img={member.img}

						name={member.name}
						surname={member.surname}
						post={member.post}

						socials={member.socials}
						index={member.index}

						key={'Member ' + member.index}
					/>
				))
			}
			</div>
		</section>
	)
}




const Member = (props : MemberType) => {
	const {img, name, surname, post, socials} = props;

	const styles = {
		member 		: 'text-center flex flex-col flex-1 items-center justify-center ',
		imgBlock	: 'max-w-xs w-full rounded-sm overflow-hidden mb-4 aspect-square ',
		img				: 'min-w-full min-h-full w-full h-full object-cover ',
		name			: 'font-bold text-2xl text-zinc-950 font-["Roboto"] ',
		surname		: 'uppercase ',
		post			: 'text-zinc-700 mb-2',
		socials		: 'flex gap-4',
		socialItem: 'border border-zinc-200 text-zinc-800 h-8 aspect-square flex items-center justify-center transition-colors hover:text-zinc-900 hover:bg-zinc-200',

	}

	return(
		<div className={styles.member}>
			<div className={styles.imgBlock}>
				<img src={img} alt={`Profile Photo of ${name} ${surname}`} className={styles.img} />
			</div>

			<h3 className={styles.name}>
				{name} &nbsp;
				<span className={styles.surname}>{surname}</span> 
			</h3>
			<h4 className={styles.post}>{post}</h4>

			<div className={styles.socials}>
				{
					socials?.map(social => (
						<div className={styles.socialItem} key={social.index}>
							<a href={social.href} className="">
								<FontAwesomeIcon icon={social.logo} />
							</a>
						</div>
					))
				}
			</div>
		</div>

	)
}

export default Team