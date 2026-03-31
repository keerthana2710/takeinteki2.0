import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobListings from "../components/JobListings";

export const metadata = {
  title: "Careers | Takeinteki Info Solutions",
  description: "Join the Takeinteki team. Explore our current job openings and help us build secure, innovative digital solutions.",
};

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <JobListings />
      </main>
      <Footer />
    </div>
  );
}
