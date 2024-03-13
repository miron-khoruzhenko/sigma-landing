import Heading from "../../../features/Text/Heading"

import timelineData from "./timelineData"

const Timeline = () => {
	const styles = {
		timeline : 'container mx-auto w-full py-16',

	}


	return (
		<div className={styles.timeline} id="timeline">
			<Heading className="">Tarİhçe</Heading>
			<div className="w-full">
				{
					timelineData.map((item, index) => 
						<TimeBlock 
							isSecond={0 === index % 2} 
							descr={item.descr} 
							heading={item.heading} 
							img={item.img} 
							key={item.index} 
						/>
					)
				}
			</div>
		</div>
	)
}

type TimeBlockProps = {
	isSecond : boolean,
	heading : string,
	img : string,
	descr : string
}

const TimeBlock = (props : TimeBlockProps) => {
	const {isSecond, heading, img, descr} = props;

	const styles = {
		timeBlock : `w-full relative min-h-[15rem] flex justify-center items-center `,
		timeBlockBefore : 'before:w-px before:bg-zinc-600 before:h-full first-of-type:before:h-1/2 before:absolute before:left-12 before:lg:left-1/2 before:bottom-0 last-of-type:before:h-1/2 last:before:top-0 ',
		textBlock : `w-full text-left pl-32 py-4 lg:w-1/2 text-zinc-900 ${isSecond ? 'lg:text-left lg:pl-28 lg:ml-auto' : 'lg:text-right lg:pr-28 lg:pl-0 lg:mr-auto '} `,
		heading : 'font-black text-2xl text-zinc-950 ',
		descr : ' ',
		imgBlock : 'w-24 lg:w-40 aspect-square absolute top-1/2 left-0 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden ',
		img : 'min-w-full w-full object-cover ', 

	}

	return(
		<div className={styles.timeBlock + styles.timeBlockBefore}>
			<div className={styles.textBlock}>
				<h3 className={styles.heading}>{heading}</h3>
				<p className={styles.descr}>{descr}</p>
			</div>

			<div className={styles.imgBlock}>
				<img src={img} alt="UÇAK RESMİ, ucak, plane" className={styles.img} />
			</div>

		</div>
	)
}

export default Timeline