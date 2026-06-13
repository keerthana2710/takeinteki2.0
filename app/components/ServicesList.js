"use client";

const servicesData = [
  {
    category: "Recruitment Solutions",
    icon: "groups",
    color: "from-blue-600 to-indigo-700",
    items: [
      { name: "Contract Staffing", desc: "Flexible workforce solutions tailored to your business needs.", icon: "badge" },
      { name: "Bulk & Volume Hiring", desc: "Efficient recruitment for large-scale workforce requirements.", icon: "diversity_3" },
      { name: "Campus Recruitment", desc: "Connecting fresh talent with exciting career opportunities.", icon: "school" },
      { name: "IT & Non-IT Recruitment", desc: "Specialized hiring solutions across multiple industries and functions.", icon: "person_search" },
      { name: "Recruitment Process Outsourcing (RPO)", desc: "End-to-end recruitment management for improved hiring efficiency.", icon: "manage_accounts" },
      { name: "Employee Screening & Verification", desc: "Ensuring quality hires through structured assessment and verification processes.", icon: "verified_user" },
      { name: "Workforce Planning & HR Support", desc: "Supporting organizations with workforce strategy, planning, and HR operations.", icon: "insights" }
    ]
  },
  {
    category: "BPO Services",
    icon: "headset_mic",
    color: "from-blue-500 to-blue-600",
    items: [
      { name: "Domestic Voice Process", icon: "support_agent" },
      { name: "Customer Support", icon: "contact_support" },
      { name: "Back Office Operations", icon: "business_center" },
      { name: "Data Processing", icon: "database" },
      { name: "Lead Generation", icon: "trending_up" },
      { name: "Telecalling Services", icon: "call" }
    ]
  },
  {
    category: "Innovation & Products",
    icon: "rocket_launch",
    color: "from-blue-400 to-blue-500",
    items: [
      { name: "Yutko", badge: "Under Development", desc: "Smart CRM Platform for Business Growth.", icon: "hub" },
      { name: "JobXT", badge: "Under Development", desc: "Next-Generation Job & Career Platform.", icon: "work" }
    ]
  }
];

export default function ServicesList({ exclude = [], includeOnly = null }) {
  const filteredServices = servicesData.filter(cat => {
    if (includeOnly && includeOnly.length > 0) {
      return includeOnly.includes(cat.category);
    }
    return !exclude.includes(cat.category);
  });

  return (
    <section id="services" className="py-32 bg-surface-variant relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 reveal">
        <div className="flex flex-col mb-24 items-center text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="font-headline text-4xl lg:text-5xl xl:text-6xl font-extrabold text-on-surface mb-8">Empowering Businesses Through Talent &amp; Innovation</h2>
          <p className="text-on-surface-variant text-xl max-w-3xl leading-relaxed font-medium">
            From strategic recruitment and workforce solutions to BPO services and emerging technology products, we help organizations build stronger teams, streamline operations, and achieve sustainable growth.
          </p>
        </div>

        <div className="space-y-16">
          {filteredServices.map((cat, idx) => (
            <div key={cat.category} className="group">
              <div className="flex items-center gap-6 mb-12 border-l-4 border-primary pl-8">
                <span className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-xl transform transition-transform group-hover:scale-110`}>
                  <span className="material-symbols-outlined text-4xl">{cat.icon}</span>
                </span>
                <h3 className="text-3xl lg:text-4xl font-extrabold text-on-surface uppercase tracking-tight">{cat.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group/item"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all mb-6">
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                    </div>
                    <span className="text-base font-extrabold text-on-surface leading-snug tracking-tight">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="mt-3 inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10">
                        {item.badge}
                      </span>
                    )}
                    {item.desc && (
                      <p className="mt-3 text-sm text-on-surface-variant leading-relaxed opacity-80 font-medium">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
