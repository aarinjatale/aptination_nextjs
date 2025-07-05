import Hero from "./home/heropage/page";
import Navbar from "./home/navbar/page";
import { HeroScrollDemo } from "./preview/page";
import TestimonialPage from "./tetimonial/page";
import Footer from "./footer/page";




export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroScrollDemo/>
      <TestimonialPage />
      <Footer/>
    </div>
  );
}

