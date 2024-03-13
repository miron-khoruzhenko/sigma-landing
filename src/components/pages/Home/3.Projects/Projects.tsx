import projectData from "./projectData"
import Heading from "../../../features/Text/Heading"
import { useEffect, useState } from "react"

const Projects = () => {
	const styles = {
		project : 'container mx-auto py-24 relative',
		heading : 'text-center mb-12 ',
		gridBlock : 'flex flex-wrap justify-around gap-4 px-4 md:px-0 ',
		planeBlock : 'min-w-xl md:w-[30%] shadow-lg shadow-zinc-400 mb-4 cursor-pointer',
		imgBlock : 'transition-transform hover:scale-90 ',
		img : ' ',
		// descrBlock : 'absolute top-0 left-0 bottom-0 right-0 -z-10 ',
		planeName : 'font-bold text-center text-2xl font-["Roboto"] text-zinc-800  mb-4 transition-colors ',
	}

	const [visibleModalIdx, setVisibleModalIdx] = useState(-1)
	const [projectsArrayLen, setProjectsArrayLen] = useState(0)

	useEffect(()=>{
		setProjectsArrayLen(projectData.length)
	}, [])


	useEffect(()=>{
		if (visibleModalIdx === -1){
			document.body.style.overflow = 'scroll'
		}else{
			document.body.style.overflow = 'hidden'
		}
		
	}, [visibleModalIdx])

	const handleClick : React.MouseEventHandler<HTMLDivElement>  = (e) => {
		const target = e.currentTarget as HTMLDivElement;
		const index = parseInt(target.dataset.index || "-1", 10);		
		setVisibleModalIdx(index)
	}

	const closeModal = () => {
		setVisibleModalIdx(-1)
	}

	const nextModal = () => {
		if(visibleModalIdx === projectsArrayLen - 1){
			setVisibleModalIdx(0)
			return
		}
		setVisibleModalIdx(visibleModalIdx + 1)
	}

	const prevModal = () => {
		if(visibleModalIdx === 0){
			setVisibleModalIdx(projectsArrayLen - 1)
			return
		}
		setVisibleModalIdx(visibleModalIdx - 1)
	}

	return (
		<div className={styles.project} id="projects">
			<Heading className={styles.heading}>PROJELERİMİZ</Heading>
			
			<div className={styles.gridBlock}>
				{
					projectData.map((plane, index, arr)=>{
						return(
							<div className={styles.planeBlock} key={plane.index}>

								<div className={styles.imgBlock} onClick={handleClick} data-index={index}>
									<img src={plane.img} alt={plane.name + ' plane, uçak, model'} className={styles.img} />
								</div>

								<h3 className={styles.planeName}>{plane.name}</h3>
								<Modal 
									index={index}
									arrLen={arr.length}

									heading={plane.name} 
									descrParagraf={plane.descrParagraf}
									descrList={plane.descrList}
									img={plane.img} 
									
									activeIndex={visibleModalIdx}
									closeModal={closeModal}
									nextModal={nextModal}
									prevModal={prevModal}
								/>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

// ×

type ModalProps = {
	className? : string,
	img : string,
	heading : string,
	descrParagraf : string,
	descrList : string[],
	index : number,
	activeIndex : number,
	arrLen : number,
	closeModal : () => void,
	nextModal : () => void,
	prevModal : () => void,
	
}

const Modal = (props : ModalProps) => {
	const styles = {
		modal : `w-screen h-screen p-8 md:p-0 bg-black/80 fixed left-1/2 top-0 -translate-x-1/2 flex justify-center items-center ${props.index !== props.activeIndex ? 'hidden ': 'block'} cursor-pointer z-50 `,
		detailsBlock : 'w-full h-full md:w-1/2 md:h-2/3 bg-white cursor-default flex flex-col justify-center items-center md:flex-row relative px-4 py-6 overflow-y-scroll ',
		imgBlock : 'w-1/2 md:w-1/3 flex ',
		img : 'object-cover',
		textBlock : 'w-4/5 py-2 md:py-8',
		heading : 'text-center font-bold text-xl md:text-2xl relative ',
		
		headingPseudo : 'after:absolute after:w-16 after:h-px after:bg-zinc-500 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 ',
		
		descr : 'mt-8 text-sm',
		descrList : 'list-disc mt-4 pl-8 ',

		closeBtn : 'fixed right-7 top-6 md:absolute md:right-0 md:top-0 text-3xl px-3 py-2 ',
		btnContainer : 'fixed md:absolute top-1/2 -translate-y-1/2 px-3 py-2 cursor-pointer ',
		btnContainerPrev : 'left-8 md:left-0 ',
		btnContainerNext : 'right-8 md:right-0',
		controlBtns : 'text-3xl w-4 h-4 border-zinc-800 ',
		prevBtn : ' border-b-2 border-l-2 -translate-y-2 rotate-45 ',
		nextBtn : ' border-r-2 border-b-2 -translate-y-2 -rotate-45 ',
		navigation : "fixed md:absolute bottom-8 md:bottom-0 left-1/2 -translate-x-1/2 font-bold border border-zinc-500 bg-white rounded-full px-2 mb-2 text-zinc-700 ",
	}

	const handleClick : React.MouseEventHandler<HTMLElement> = (e) => {
		e.preventDefault()

		if(e.currentTarget === e.target){
			props.closeModal()
		}
	}

	return(
		<div className={styles.modal + props.className} onClick={handleClick}>
			<div className={styles.detailsBlock}>
				
				<div className={styles.imgBlock}>
					<img src={props.img} alt={"SIGMA Plane " + props.heading} className={styles.img} />
				</div>

				<div className={styles.textBlock}>
					<h3 className={styles.heading + styles.headingPseudo}>{props.heading}</h3>
					<p className={styles.descr}>
						{props.descrParagraf || ""}
					</p>
						<ul className={styles.descrList}>
							{
								props.descrList.map((item, index) => 
									<li className="" key={index}>{item}</li>
								)
							}
						</ul>
				</div>

				<div className="font-['Lato']">
					<button className={styles.closeBtn} onClick={handleClick}>×</button>
					
					<div className={styles.btnContainer + styles.btnContainerPrev} onClick={props.prevModal}>
						<button className={styles.prevBtn + styles.controlBtns}></button>
					</div>
					
					<div className={styles.btnContainer + styles.btnContainerNext} onClick={props.nextModal}>
						<button className={styles.nextBtn + styles.controlBtns}></button>
					</div>

					<div className={styles.navigation}>{props.activeIndex + 1} of {props.arrLen}</div>
				</div>

			</div>
		</div>
	)
}

export default Projects