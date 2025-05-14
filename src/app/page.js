import Image from "next/image";
import Nav from "./component/nav";
import Slider from "./component/slider";
import Footer from "./component/footer";
import Us from "./component/us";
import People from "./component/people";
import Fullv from "./component/fullv";
import Her from "./component/her";

export default function Home() {
  return (
    <div className="">
   <Nav/>
   <Slider/>
   <Her/>
   <Us/>
   <People/>
   <Fullv/>
    <Footer/>
  </div>
  );
}
