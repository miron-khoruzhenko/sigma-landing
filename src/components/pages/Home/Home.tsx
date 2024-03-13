import Hero from "./1.Hero/Hero"
import About from "./2.About/About"
import Projects from "./3.Projects/Projects"
import Timeline from "./4.Timeline/Timeline"
import Team from "./5.Team/Team"
import ContactUs from "./Contact-form/ContactUs"

import teamDB from "./5.Team/teamData"
import supportsDB from "./5.Team/supportsData"

const Home = () => {
	return (
		<>
			<Hero/>
			<About/>
			<Projects/>
			<Timeline/>
			<Team heading="Ekİp LİDERLERİMİZ" data={teamDB}/>
			<Team heading="Akademİk Danışmanlarımız" data={supportsDB}/>
			<ContactUs/>
			
		</>
	)
}

export default Home