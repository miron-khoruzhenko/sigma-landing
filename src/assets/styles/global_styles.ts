const sectionHeading = 'text-center text-3xl font-bold dark:text-zinc-100 mb-12 relative ',
			sectionHeadingBefore =  "before:block before:h-px before:w-36 before:bg-zinc-300 before:dark:bg-zinc-800 before:my-4 before:mx-auto before:rounded-full before:absolute before:-bottom-9 before:left-1/2 before:-translate-x-1/2 ",
			sectionHeadingAfter = "after:block after:h-px after:w-12 after:bg-zinc-800 after:dark:bg-zinc-300 after:my-4 after:mx-auto after:rounded-full after:absolute after:-bottom-9 after:left-1/2 after:-translate-x-1/2  ",
			centerPseudo = sectionHeadingAfter + sectionHeadingBefore,
			combinedHeading = sectionHeading + sectionHeadingBefore + sectionHeadingAfter;

const leftBefore =  "before:block before:h-px before:w-36 before:bg-zinc-300 before:dark:bg-zinc-800 before:my-4 before:mx-auto before:rounded-full before:absolute before:-bottom-9 before:left-0 ",
			leftAfter = "after:block after:h-px after:w-12 after:bg-zinc-800 after:dark:bg-zinc-300 after:my-4 after:mx-auto after:rounded-full after:absolute after:-bottom-9 after:left-0 ",
			leftPseudo = leftAfter + leftBefore;

const global_styles = {
	centerPseudo,
	leftPseudo,

	sectionHeading,
	combinedHeading,
	sectionSubHeading : 'text-center darl:text-zinc-300 ',
}

export default global_styles;