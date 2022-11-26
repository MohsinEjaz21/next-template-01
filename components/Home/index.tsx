import Section_01 from "./Section_01"
import Section_02 from "./Section_02"
import Section_03 from "./Section_03"
import Section_04 from "./Section_04"

function Home() {
  return (
    <div className="home">
      <Section_01 />
      <Section_02 />
      <Section_03 />
      <Section_04 />
    </div>
  )
}

export default Home