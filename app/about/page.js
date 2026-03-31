import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import ServicesList from "../components/ServicesList";

export const metadata = {
  title: "About Us | Takeinteki Info Solutions",
  description: "Learn about Takeinteki's mission to bridge the gap between organizational vision and technology through secure and transformative solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <AboutUs />
        {/* Render only Hiring Partners here */}
        <ServicesList includeOnly={["Hiring Partners"]} />
      </main>
      <Footer />
    </div>
  );
}
