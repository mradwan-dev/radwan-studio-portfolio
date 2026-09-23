/* Radwan Studio Portfolio — App Logic v2 */

const translations = {
  ar: {
    logo: "Radwan Studio",
    "nav.services": "الخدمات",
    "nav.work": "الأعمال",
    "nav.approach": "المنهجية",
    "nav.about": "عن الاستوديو",
    "nav.contact": "تواصل",
    "nav.whatsapp": "واتساب",
    "hero.badge": "استوديو حلول رقمية · مسقط",
    "hero.title1": "نبني الأنظمة",
    "hero.title2": "التي تحرّك الأعمال",
    "hero.desc": "نصمم ونطور مواقع ومنتجات رقمية وحلول أتمتة تساعد الشركات على العمل بوضوح، التحرك بسرعة، والنمو بثقة.",
    "stat.exp": "عامًا من الخبرة",
    "stat.systems": "أنظمة مطوّرة",
    "stat.markets": "أسواق نعمل بها",
    "hero.cta1": "شاهد الأعمال",
    "hero.cta2": "تواصل عبر واتساب",
    "services.tag": "الخدمات",
    "services.title": "حلول رقمية متكاملة",
    "services.desc": "من الفكرة إلى التشغيل — نبني أنظمة قابلة للقياس والتوسع",
    "s1.title": "المواقع والمنصات",
    "s1.desc": "مواقع مؤسسية ومنصات تسويقية مصممة لبناء الثقة وتحويل الزيارة إلى فرصة.",
    "s2.title": "الأنظمة السحابية",
    "s2.desc": "لوحات تشغيل وأنظمة ERP مخصصة تربط البيانات والفرق والقرارات في مساحة واحدة.",
    "s3.title": "التطبيقات وتجارب الولاء",
    "s3.desc": "تجارب ويب وموبايل سهلة الاستخدام، مبنية حول سلوك العميل واحتياجات التشغيل.",
    "s4.title": "الأتمتة والذكاء الاصطناعي",
    "s4.desc": "تحويل المهام المتكررة إلى تدفقات ذكية توفر الوقت وتحافظ على جودة المخرجات.",
    "work.tag": "الأعمال المختارة",
    "work.title": "مشاريع حقيقية، نتائج ملموسة",
    "work.desc": "أنظمة ومنتجات رقمية صُممت لتبسيط العمليات ورفع الكفاءة",
    "approach.tag": "المنهجية",
    "approach.title": "نفهم · نبني · نطوّر",
    "a1.title": "نفهم",
    "a1.desc": "نبدأ بتحليل عميق لاحتياج العمل، العمليات الحالية، والأهداف القابلة للقياس.",
    "a2.title": "نبني",
    "a2.desc": "نصمم ونطوّر حلولاً عملية وسريعة الإطلاق، مع عرض تقدّم أسبوعي وشفافية كاملة.",
    "a3.title": "نطوّر",
    "a3.desc": "ندعم التشغيل، ندرّب الفريق، ونطوّر النظام مع نمو الأعمال دون تعقيد زائد.",
    "about.tag": "عن الاستوديو",
    "about.title": "محمود إسماعيل رضوان",
    "about.lead": "محترف يجمع بين ثلاثة عوالم نادراً ما تجتمع بعمق: التسويق وتطوير الأعمال، والمحاسبة والإدارة المالية، وتطوير حلول الذكاء الاصطناعي والأتمتة.",
    "about.p1": "بدأت المسيرة عام 2010 في مصر بين إدارة المراكز التجارية والمحاسبة الإدارية، ثم انتقلت إلى سلطنة عمان لأقود فرق التسويق والمبيعات في قطاعات FMCG وB2B وB2C. الخبرة المحاسبية العميقة في برنامج الأمين جعلتني أفهم لغة الأرقام والعقود بمنطق عملي.",
    "about.p2": "اليوم أحول هذه الخبرة إلى حلول برمجية ذكية: أنظمة ERP عقارية، أتمتة تسويق، تطبيقات ويب، وربط واتساب API — بفلسفة الشفافية الكاملة وبناء الأنظمة خطوة بخطوة مع العميل.",
    "about.loc": "الموقع:",
    "about.exp": "الخبرة:",
    "contact.tag": "تواصل",
    "contact.title": "لنبدأ مشروعك القادم",
    "contact.desc": "أرسل رسالة مباشرة عبر واتساب أو البريد — نرد خلال ساعات العمل",
    "contact.wa": "واتساب مباشر",
    "contact.waDesc": "الطريق الأسرع للتواصل",
    "contact.email": "البريد الإلكتروني",
    "contact.emailDesc": "للمراسلات الرسمية والعروض",
    "contact.formTitle": "أرسل رسالة سريعة",
    "form.name": "الاسم",
    "form.email": "البريد الإلكتروني",
    "form.message": "رسالتك...",
    "form.submit": "إرسال عبر واتساب",
    "footer.tagline": "تصميم وإنشاء وتوقيع — محمود إسماعيل رضوان",
    "modal.discuss": "ناقش مشروعاً مشابهاً",
    "modal.view": "معاينة حية",
    "modal.close": "إغلاق",
  },
  en: {
    logo: "Radwan Studio",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.approach": "Approach",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.whatsapp": "WhatsApp",
    "hero.badge": "Digital Solutions Studio · Muscat",
    "hero.title1": "We build systems",
    "hero.title2": "that move business",
    "hero.desc": "We design websites, digital products and automation systems that help companies operate with clarity, move faster and grow with confidence.",
    "stat.exp": "years of experience",
    "stat.systems": "systems developed",
    "stat.markets": "markets served",
    "hero.cta1": "View Work",
    "hero.cta2": "Chat on WhatsApp",
    "services.tag": "Services",
    "services.title": "Integrated Digital Solutions",
    "services.desc": "From idea to operation — we build measurable, scalable systems",
    "s1.title": "Websites & Platforms",
    "s1.desc": "Corporate sites and marketing platforms designed to build trust and turn visits into opportunities.",
    "s2.title": "Cloud Systems",
    "s2.desc": "Custom ERP and operations dashboards that connect data, teams and decisions in one place.",
    "s3.title": "Apps & Loyalty",
    "s3.desc": "Web and mobile experiences built around customer behaviour and operational needs.",
    "s4.title": "Automation & AI",
    "s4.desc": "Turning repetitive tasks into intelligent workflows that save time and protect quality.",
    "work.tag": "Selected Work",
    "work.title": "Real projects, tangible results",
    "work.desc": "Digital systems and products designed to simplify operations and raise efficiency",
    "approach.tag": "Approach",
    "approach.title": "Understand · Build · Evolve",
    "a1.title": "Understand",
    "a1.desc": "We start with a deep analysis of business needs, current processes and measurable goals.",
    "a2.title": "Build",
    "a2.desc": "We design and develop practical, fast-to-launch solutions with weekly progress and full transparency.",
    "a3.title": "Evolve",
    "a3.desc": "We support operations, train the team and evolve the system as the business grows without excess complexity.",
    "about.tag": "About the Studio",
    "about.title": "Mahmoud Ismail Radwan",
    "about.lead": "A professional who combines three worlds that rarely meet deeply: marketing and business development, accounting and financial management, and AI solutions & automation development.",
    "about.p1": "The journey began in 2010 in Egypt between commercial centre management and managerial accounting, then moved to Oman to lead marketing and sales teams across FMCG, B2B and B2C. Deep accounting experience with Al-Ameen software gave a practical understanding of numbers and contracts.",
    "about.p2": "Today this experience is turned into smart software solutions: real-estate ERP systems, marketing automation, web apps and WhatsApp API integrations — with a philosophy of full transparency and building systems step by step with the client.",
    "about.loc": "Location:",
    "about.exp": "Experience:",
    "contact.tag": "Contact",
    "contact.title": "Let's start your next project",
    "contact.desc": "Send a message directly via WhatsApp or email — we reply during business hours",
    "contact.wa": "Direct WhatsApp",
    "contact.waDesc": "The fastest way to connect",
    "contact.email": "Email",
    "contact.emailDesc": "For formal correspondence and proposals",
    "contact.formTitle": "Send a quick message",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Your message...",
    "form.submit": "Send via WhatsApp",
    "footer.tagline": "Designed, built & directed by Mahmoud Ismail Radwan",
    "modal.discuss": "Discuss a similar project",
    "modal.view": "Live preview",
    "modal.close": "Close",
  },
};

/* Project logos — real brand assets where available + premium branded SVGs */
const logos = {
  aqar: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="18" fill="#0f2744"/>
    <rect x="18" y="28" width="44" height="34" rx="3" fill="#1e4a7a"/>
    <path d="M14 32 L40 12 L66 32" stroke="#60a5fa" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <rect x="28" y="40" width="10" height="10" rx="1.5" fill="#93c5fd"/>
    <rect x="42" y="40" width="10" height="10" rx="1.5" fill="#93c5fd"/>
    <rect x="28" y="54" width="24" height="8" rx="1.5" fill="#3b82f6"/>
    <circle cx="40" cy="22" r="3" fill="#fbbf24"/>
  </svg>`,
  mihani: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="18" fill="#0f2418"/>
    <circle cx="40" cy="32" r="14" stroke="#4ade80" stroke-width="3.5"/>
    <path d="M22 58c0-9.94 8.06-18 18-18s18 8.06 18 18" stroke="#4ade80" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M40 24v10M34 30h12" stroke="#86efac" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="30" y="48" width="20" height="4" rx="2" fill="#22c55e" opacity="0.6"/>
  </svg>`,
  opera: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="18" fill="#12100e"/>
    <rect x="18" y="18" width="44" height="44" rx="12" fill="url(#operaGold)"/>
    <text x="40" y="50" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="28" font-weight="800" fill="#0a0a0a">O</text>
    <defs>
      <linearGradient id="operaGold" x1="18" y1="18" x2="62" y2="62">
        <stop stop-color="#e8c547"/>
        <stop offset="1" stop-color="#c9a227"/>
      </linearGradient>
    </defs>
  </svg>`,
  seven: `<img src="https://images.deliveryhero.io/image/talabat/restaurants/logo_(42)_637599709460736044.jpg?width=200" alt="Seven Fries" style="width:100%;height:100%;object-fit:contain;border-radius:16px;background:#1a0a08;padding:6px;" />`,
  auto: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="18" fill="#16122a"/>
    <path d="M24 48 L34 28 H46 L56 48" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="30" cy="52" r="4" fill="#c4b5fd"/>
    <circle cx="50" cy="52" r="4" fill="#c4b5fd"/>
    <path d="M36 34h8M38 28h4" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="26" y="20" width="28" height="6" rx="3" fill="#7c3aed" opacity="0.5"/>
  </svg>`,
};

const projects = [
  {
    id: "aqar",
    titleAr: "عقار برو — Aqar Pro",
    titleEn: "Aqar Pro",
    catAr: "نظام سحابي / CLOUD ERP",
    catEn: "CLOUD ERP",
    descAr: "نظام سحابي لإدارة العقارات والحسابات وعقود الإيجار من لوحة تشغيل واحدة. يجمع التشغيل العقاري والمحاسبة وإدارة العقود ضمن بنية رقمية مرنة قابلة للنمو.",
    descEn: "Cloud system for property management, accounts and lease contracts from a single operations dashboard. Combines property ops, accounting and contract management in a flexible, scalable digital structure.",
    tech: ["React", "Supabase", "Vercel / Netlify"],
    link: "https://aqarpro.netlify.app",
    color: "#3b82f6",
  },
  {
    id: "mihani",
    titleAr: "مهني برو — Mihani Pro",
    titleEn: "Mihani Pro",
    catAr: "تشغيل عقارات / PROPERTY OPERATIONS",
    catEn: "PROPERTY OPERATIONS",
    descAr: "منصة تشغيل عقارية تحول العقود والتحصيل والمتابعة إلى دورة عمل رقمية واضحة. تجمع البيانات والمتابعة والعقود والتقارير في مساحة عملية قابلة للتوسع.",
    descEn: "Property operations platform that turns contracts, collections and follow-up into a clear digital workflow. Brings data, tracking, contracts and reports into one scalable workspace.",
    tech: ["Product Strategy", "AI Systems", "Dashboards"],
    link: null,
    color: "#22c55e",
  },
  {
    id: "opera",
    titleAr: "أوبرا كافيه · مسقط",
    titleEn: "OPERA Café · Muscat",
    catAr: "تجارة المطاعم / RESTAURANT COMMERCE",
    catEn: "RESTAURANT COMMERCE",
    descAr: "نظام باركود ذكي لطلبات مطعم وكافيه أوبرا الخوير. تبدأ التجربة باختيار الدور ثم إدخال الرقم للوصول إلى الطلب — صورة أصلية من المشروع.",
    descEn: "Smart QR ordering system for OPERA Café & Restaurant in Al Khuwair. Experience starts with role selection then number entry to access the order — original project imagery.",
    tech: ["QR Ordering", "Role Access", "Hospitality UX"],
    link: "https://opera-cafe-erp.netlify.app",
    color: "#d4af37",
  },
  {
    id: "seven",
    titleAr: "سفن فرايز — Seven Fries",
    titleEn: "Seven Fries",
    catAr: "تجربة ولاء / LOYALTY EXPERIENCE",
    catEn: "LOYALTY EXPERIENCE",
    descAr: "تجربة ولاء رقمية تربط المطعم بعملائه عبر العروض والمكافآت ورحلة استخدام سريعة. صُممت لتكون بسيطة للعميل وعملية للفريق.",
    descEn: "Digital loyalty experience connecting the restaurant with customers through offers, rewards and a fast journey. Designed to be simple for the guest and practical for the team.",
    tech: ["Web App", "Loyalty", "Customer Journey"],
    link: "https://sevenfrieswebsite.netlify.app",
    color: "#f97316",
  },
  {
    id: "auto",
    titleAr: "أتمتة التسويق",
    titleEn: "Marketing Automation",
    catAr: "أنظمة أتمتة / AUTOMATION SYSTEMS",
    catEn: "AUTOMATION SYSTEMS",
    descAr: "منظومة لإنتاج محتوى متعدد الفروع وربط المواد التسويقية بالذكاء الاصطناعي ورموز QR. تجمع بين Python وتوليد QR والمحتوى البصري المدعوم بالذكاء الاصطناعي.",
    descEn: "System for multi-branch content production linking marketing materials with AI and QR codes. Combines Python, QR workflows and AI-supported visual content.",
    tech: ["Python", "QR Workflows", "AI Content"],
    link: null,
    color: "#8b5cf6",
  },
];

let currentLang = localStorage.getItem("radwan-lang") || "ar";
let currentTheme = localStorage.getItem("radwan-theme") || "dark";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("radwan-lang", lang);
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });
  document.getElementById("langToggle").textContent = lang === "ar" ? "EN" : "عربي";
  renderProjects();
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("radwan-theme", theme);
  document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "");
}

function renderProjects() {
  const grid = document.getElementById("workGrid");
  if (!grid) return;
  const isAr = currentLang === "ar";
  grid.innerHTML = projects
    .map(
      (p) => `
    <article class="work-card" data-id="${p.id}" style="--card-accent:${p.color}">
      <div class="work-card-visual">
        <div class="work-logo">${logos[p.id]}</div>
        <div class="work-card-overlay"></div>
      </div>
      <div class="work-card-body">
        <span class="work-cat">${isAr ? p.catAr : p.catEn}</span>
        <h3 class="work-title">${isAr ? p.titleAr : p.titleEn}</h3>
        <p class="work-desc">${isAr ? p.descAr.slice(0, 110) + "…" : p.descEn.slice(0, 110) + "…"}</p>
        <div class="work-tags">
          ${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </article>`
    )
    .join("");

  grid.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
}

function openModal(id) {
  const p = projects.find((x) => x.id === id);
  if (!p) return;
  const isAr = currentLang === "ar";
  const t = translations[currentLang];
  const modal = document.getElementById("projectModal");
  const body = document.getElementById("modalBody");
  body.innerHTML = `
    <div class="modal-header-visual" style="--card-accent:${p.color}">
      <div class="modal-logo">${logos[p.id]}</div>
    </div>
    <div class="modal-content">
      <span class="work-cat">${isAr ? p.catAr : p.catEn}</span>
      <h2>${isAr ? p.titleAr : p.titleEn}</h2>
      <p>${isAr ? p.descAr : p.descEn}</p>
      <div class="work-tags" style="margin:1.25rem 0">
        ${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="modal-actions">
        ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="btn btn-primary">${t["modal.view"]}</a>` : ""}
        <a href="https://wa.me/96894755722?text=${encodeURIComponent(isAr ? `مرحباً، أود مناقشة مشروع مشابه لـ ${p.titleAr}` : `Hi, I'd like to discuss a project similar to ${p.titleEn}`)}" target="_blank" rel="noopener" class="btn btn-outline">${t["modal.discuss"]}</a>
      </div>
    </div>
  `;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("projectModal").classList.remove("open");
  document.body.style.overflow = "";
}

function init() {
  applyLang(currentLang);
  applyTheme(currentTheme);

  document.getElementById("langToggle")?.addEventListener("click", () => {
    applyLang(currentLang === "ar" ? "en" : "ar");
  });

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  document.getElementById("menuToggle")?.addEventListener("click", () => {
    document.getElementById("mobileNav").classList.toggle("open");
  });

  document.querySelectorAll("#mobileNav a, #mobileNav .btn").forEach((el) => {
    el.addEventListener("click", () => {
      document.getElementById("mobileNav").classList.remove("open");
    });
  });

  document.getElementById("modalClose")?.addEventListener("click", closeModal);
  document.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);

  document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const text = encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\n${message}`);
    window.open(`https://wa.me/96894755722?text=${text}`, "_blank");
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", init);
