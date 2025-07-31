import About from "../components/About";
import Agenda from "../components/Agenda";
import EventOverview from "../components/EventOverview";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import RegisterForm from "../components/RegisterForm";
import Speakers from "../components/Speakers";
import TopReasons from "../components/TopReasons";

 

function LandingPage() {
  return (
    <>
        <HeroSection/>
        <EventOverview />
        <TopReasons/>
        <Speakers />
        <Agenda />
        <About />
        <RegisterForm />
        <Footer />
    </>
  );
}

export default LandingPage;
