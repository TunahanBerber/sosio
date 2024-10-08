import Banner from "../components/banner";
import About from "../components/about";
import MidSection from "../components/mid-section";
import CenterBanner from "../components/center-banner";
import Question from "@/components/question";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <About />
      <MidSection />
      <CenterBanner />
      <Question />
      <Footer />
    </div>
  );
}
