// import Button from "../../../features/Buttons/Button2"
import { Button } from "../../../features/Buttons/Button1"
import Heading from "../../../features/Text/Heading"

import { descr, mission, vision } from "./contentData"

import img1 from '/src/assets/img/about/mission.svg'
import img2 from '/src/assets/img/about/vision.svg'
import img from '/src/assets/img/about/img.jpg'

// import testImg from '/src/assets/11img/plane_bg.png'


const About = () => {
	const styles = {
		container : 'container mx-auto py-10 ',
		

	}

	return (
		<section className={styles.container} id="about">

			<ImgAndDescr />
			<MissionAndVision/>


		</section>
	)
}



const ImgAndDescr = () => {
	const styles = {
		aboutUs : 'flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0',
		imgBlock : 'w-full h-full md:w-[450px] md:h-[400px]  bg-amber-700 ',
		img : 'min-w-full min-h-full w-full h-full object-cover opacity-90 ',
		textContainer : 'flex-1 flex flex-col justify-center items-center gap-6 md:text-left md:items-start ',
		subheading : 'text-4xl text-zinc-800 font-light ',
		heading : 'text-center md:text-left ',
		descr : 'text-lg text-zinc-900 font-light text-center md:text-left ',

	}

	return(
		<div className={styles.aboutUs}>

		<div className={styles.imgBlock}>
			<img src={img} alt="" className={styles.img} />
		</div>

		<div className={styles.textContainer}>
			<h3 className={styles.subheading}>Sigma Aeronautics</h3>
			<Heading className={styles.heading}>Hakkımızda</Heading>

			<p className={styles.descr}>
				{descr}
			</p>
			
			{/* <Button frontContent={'Learn More'} backContent={<FontAwesomeIcon icon={faPaperPlane} />}/> */}
			<Button className="font-bold">Learn More</Button>
		</div>

	</div>
	)
}



const MissionAndVision = () => {
	const styles = {
		extraBlocks : 'flex flex-wrap md:flex-nowrap justify-around gap-6 mt-24',

	}
	return (
		<div className={styles.extraBlocks}>

			<ExtraBlock img={img1} heading={'Mİsyon'} descr={mission} />
			<ExtraBlock img={img2} heading={'VİZYON'} descr={vision} />

		</div>
	)
}

type ExtraBlockProps = {
	img : string,
	heading : string,
	descr : string,
}

const ExtraBlock = (props : ExtraBlockProps) => {
	const {img, heading, descr} = props;

	const styles = {
		block : 'flex flex-col justify-center items-center text-center text-lg font-["Roboto"] max-w-md',
		imgBlock : 'max-h-[120px] max-w-[120px]',
		img : 'min-w-full min-h-full w-full h-full object-cover',
		heading : 'font-bold uppercase text-3xl mb-4',
		descr : 'font-light',
	}

	return(
		<div className={styles.block}>
			<div className={styles.imgBlock}>
				<img src={img} alt="" className={styles.img} />
			</div>

				<h3 className={styles.heading}>{heading}</h3>

				<p className={styles.descr}>{descr}</p>

		</div>
	)
}

export default About