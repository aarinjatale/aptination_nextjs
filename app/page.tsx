import Hero from "./home/heropage/page";
import Navbar from "./home/navbar/page";
import PreviewPage from "./preview/page";
import TestimonialPage from "./tetimonial/page";
import Footer from "./footer/page";




export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PreviewPage/>
      <TestimonialPage />
      <Footer/>
    </div>
  );
}

