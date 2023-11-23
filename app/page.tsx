import About from "./components/About";
import Animation from "./components/Animation";
import Intro from "./components/Intro";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className=" bg-primary ">
      <div className="lg:flex">
        <div className="lg:w-2/5 lg:order-2 ">
          <Animation />
        </div>
        <div className="lg:w-3/5 lg:order-1">
          <Intro />
        </div>
      </div>
      <Services />
      <About />
      <Reviews />
    </div>
  )
}
