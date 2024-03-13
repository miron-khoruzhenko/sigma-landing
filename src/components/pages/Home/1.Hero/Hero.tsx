const Hero = () => {
	const styles = {
		hero : 'h-[100lvh] w-screen  bg-plane bg-top bg-fixed bg-no-repeat bg-cover flex items-center justify-center font-["Lato"] ',
		textBlock : 'text-white text-center font-bold ',
		headingBlock : 'font-extrabold drop-shadow-black  ',
		heading : 'text-5xl md:text-8xl ',
		subheading : 'text-5xl md:text-8xl ',
		descrHeading : 'font-light text-xl lg:text-3xl mt-8 drop-shadow-black ',
		
	}

	return (
		<div className={styles.hero}>

			<section className={styles.textBlock}>
				<h1 className={styles.headingBlock} >
					<span className={styles.heading}>SIGMA</span><br/>
					<span className={styles.subheading}>AERONAUTICS</span>
				</h1>
				
				<h2 className={styles.descrHeading}>Yıldız Teknik Üniversitesinin En Köklü Havacılık Takımı</h2>
			</section>
		</div>
	)
}

export default Hero