import Hero from "./home/heropage/page";
import Navbar from "./home/navbar/page";
import { GridBackgroundDemo } from "./home/heropage/GridBackgroundDemo";
import TestimonialPage from "./tetimonial/page";
import Footer from "./footer/page";




export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TestimonialPage />
      <Footer/>
    </div>
  );
}

