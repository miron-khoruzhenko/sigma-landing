import MiniFooter from "./components/common/Footer/MiniFooter"
import Navbar from "./components/common/Navbar/Navbar"
import Home from "./components/pages/Home/Home"

function App() {
  return (
    <div className="w-screen h-screen font-['Lato'] relative">
      <Navbar/>
      <Home/>
      <MiniFooter/>
    </div>
  )
}

export default App
