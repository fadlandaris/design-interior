import Hero from "../components/Hero"
import Services from "../components/Services"
import { portfolio } from "../data/data"
import { useState } from "react"
import Trusted from "../components/Trusted"
import Contact from "../components/Contact"

const Home = () => {
  const [portfolioData] = useState(portfolio)

  return (
    <div>
      <Hero/>
      <Services portData={portfolioData}/>
      <Trusted/>
      <Contact/>
    </div>
  )
}

export default Home