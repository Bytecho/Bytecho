import About from "./components/About";
import Animation from "./components/Animation";
import Form from "./components/Form";
import Intro from "./components/Intro";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
// import Trial from "./components/Trial";

export default function Home() {
  return (
    <div className=" bg-primary ">
      <div className="lg:flex lg:items-center xl:gap-2 xl:max-w-[64rem] xl:mx-auto">
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
      <Form />
      {/* <Trial /> */}
    </div>
  )
}
