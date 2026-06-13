import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesList from "../components/ServicesList";

export const metadata = {
  title: "Our Services | Takeinteki Info Solutions",
  description: "Explore Takeinteki's full suite of recruitment, staffing, BPO services, and technology products designed to help businesses build stronger teams and achieve sustainable growth.",
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
