import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "../components/StarBackground";
import {Navbar} from "../components/Navbar";
import {HeroSection} from "../components/HeroSection";
import {AboutSection} from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import {ContactSection} from "../components/ContactSection";
import {ExperienceSection} from "../components/ExperienceSection";
import {Footer} from "../components/Footer";
export const Home = () =>{
    return <div class="min-h-screen" >
    {/* theme toggle*/}
    <ThemeToggle/>
    {/* background effects*/}
    <StarBackground />
    {/* navbar*/}
    <Navbar />
    {/* main content */}
    <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        
    </main>
    {/*footer */}
    <Footer />
    </div>;
};