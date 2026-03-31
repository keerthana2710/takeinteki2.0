import JobCard from "./JobCard";

const jobsData = [
  {
    category: "IT & Software",
    postedTime: "2 days ago",
    title: "Senior Full-Stack Engineer",
    location: "Bangalore, India",
    description: "Looking for an experienced engineer to lead our core product development using React, Node.js and AWS.",
    salaryRange: "₹18L - ₹24L"
  },
  {
    category: "Marketing",
    postedTime: "Just now",
    title: "Growth Marketing Lead",
    location: "Remote",
    description: "Drive user acquisition and retention strategies for our global clients in the fintech space.",
    salaryRange: "₹12L - ₹15L"
  },
  {
    category: "Finance",
    postedTime: "5 days ago",
    title: "Account Manager",
    location: "Mumbai, India",
    description: "Manage key client relationships and oversee financial reporting for our enterprise partners.",
    salaryRange: "₹10L - ₹14L"
  }
];

export default function JobListings() {
  return (
    <section id="jobs" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 reveal">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Careers</span>
            <h2 className="font-headline text-4xl lg:text-7xl font-extrabold text-on-surface mb-6">Active Roles</h2>
            <p className="text-on-surface-variant text-xl leading-relaxed opacity-80">
              Join the team that is shaping the future of digital security and software innovation.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsData.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
