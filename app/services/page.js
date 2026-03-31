import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesList from "../components/ServicesList";

export const metadata = {
  title: "Our Services | Takeinteki Info Solutions",
  description: "Explore Takeinteki's full suite of cybersecurity and software development services designed to drive business growth and protect digital assets.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <ServicesList />
      </main>
      <Footer />
    </div>
  );
}
