import Navbar from "../layout/navBar";
import Hero from "../components/hero";
import Advance from "../components/advance";
import Footer from "../layout/footer"
import Boost from "../components/boost";
import Shorten from "../components/shorten"

export default function Home() {

  return (
    <div className="w-full ">
    <Navbar />
    <Hero />
    <Shorten/>
    <Advance />
    <Boost/>
    <Footer/>
    </div>
  );
}
