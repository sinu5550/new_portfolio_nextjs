import AboutMe from "./sections/AboutMe";
import Banner from "./sections/Banner";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ScrollToUp from "./shared/ScrollToUp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <ScrollToUp />
    </div>
  );
}
