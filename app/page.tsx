import Hero from "./home/heropage/page";
import Navbar from "./home/navbar/page";
import { GridBackgroundDemo } from "./home/heropage/GridBackgroundDemo";


export default function Home() {
  return (
    <div>
      <Navbar />
      
      <Hero />
    </div>
  );
}

