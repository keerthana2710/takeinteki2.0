"use client";

const servicesData = [
  {
    category: "Cybersecurity",
    icon: "shield_lock",
    color: "from-blue-600 to-indigo-700",
    items: [
      { name: "Website / Web Application Security (VA/PT)", icon: "language" },
      { name: "Android / iOS Application Security (VA/PT)", icon: "app_shortcut" },
      { name: "API Application Security (VA/PT)", icon: "api" },
      { name: "Source Code Security Review", icon: "code" },
      { name: "Cloud Security Audit & (VA/PT)", icon: "cloud_done" },
      { name: "Network (Infrastructure) VA/PT", icon: "hub" },
      { name: "IOT Security (VA/PT)", icon: "memory" },
      { name: "Cyber Forensics", icon: "policy" }
    ]
  },
  {
    category: "Development",
    icon: "code_blocks",
    color: "from-blue-500 to-blue-600",
    items: [
      { name: "Website Development", icon: "web" },
      { name: "Web Application Development", icon: "devices" },
      { name: "Android Application Development", icon: "android" },
      { name: "iOS Application Development", icon: "phone_iphone" },
      { name: "API Development", icon: "terminal" },
      { name: "CMS Development (WordPress, Shopify, etc.)", icon: "dashboard_customize" },
      { name: "Web3 Integration (Crypto)", icon: "currency_bitcoin" },
      { name: "Augmented Reality Integration", icon: "view_in_ar" }
    ]
  },
  {
    category: "Hiring Partners",
    icon: "group_add",
    color: "from-blue-400 to-blue-500",
    items: [
      { name: "IT Recruitment Services", icon: "person_search" },
      { name: "Contract Staffing", icon: "assignment_ind" },
      { name: "Permanent Hiring", icon: "verified" },
      { name: "Client Acquisition & Delivery Support", icon: "handshake" }
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
          <h2 className="font-headline text-4xl lg:text-7xl font-extrabold text-on-surface mb-8">Comprehensive Solutions</h2>
          <p className="text-on-surface-variant text-xl max-w-3xl leading-relaxed font-medium">
            From ironclad security to cutting-edge development and world-class hiring, we provide the strategic power your business needs to excel.
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
