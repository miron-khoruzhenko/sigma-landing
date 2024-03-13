type switcherProp = {	
  children: React.ReactNode;

}

const Switcher = (props : switcherProp)  => {
	const handleChange = () => {
		if(document.body.classList.contains('dark')){
			document.body.classList.remove('dark');
		}else{
			document.body.classList.add('dark');

		}
	}

	const styles = {
		label : "w-[52px] h-[30px] relative inline-block",
		input : "opacity-0 w-0 h-0",
		span1 : "absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-full transition-all duration-300 dark:bg-zinc-700 bg-zinc-400 ",
		span2 : "absolute left-[4px] bottom-[4px] h-[22px] w-[22px] rounded-full bg-white text-black transition-all duration-300 flex justify-center items-center dark:translate-x-[22px]",
	}

	return (
		<label className={styles.label}>
			<input 
				type="checkbox" 
				className={styles.input} 
				onChange={handleChange}
			/>
				<span className={styles.span1}>
					<span className={styles.span2}>
						{props.children}
					</span>
				</span>
		</label>
	)
}
export default Switcher;