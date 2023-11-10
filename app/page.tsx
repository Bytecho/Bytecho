import About from "./components/About";
import Animation from "./components/Animation";
import Intro from "./components/Intro";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className=" bg-primary ">
            <Animation />
            <Intro />
            <Services />
            <About />
            <Reviews />
        </div>
  )
}
