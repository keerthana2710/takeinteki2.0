import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import ServicesList from "../components/ServicesList";

export const metadata = {
  title: "About Us | Takeinteki Info Solutions",
  description: "Learn about Takeinteki Info Solutions — a trusted recruitment, staffing, and BPO partner, and part of the broader TEKIgroup vision across recruitment, construction, and technology.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <AboutUs />
        {/* Render only Recruitment Solutions here */}
        <ServicesList includeOnly={["Recruitment Solutions"]} />
      </main>
      <Footer />
    </div>
  );
}
