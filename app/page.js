import { Header } from "./components/Header"
import { NavBar } from "./components/NavBar"
import { AboutSection } from "./components/AboutSection"
import { ProjectSection } from "./components/ProjectSection";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col bg-slate-950 px-12 py-4">
      <NavBar/>
      <div className=" container mx-auto mt-[100px]">
        <Header/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  )
}
