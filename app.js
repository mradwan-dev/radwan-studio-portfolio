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
    "modal.discuss": "ناقش مشروعاً مشابها",
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
    "a1.desc": "We start with deep analysis of business needs, current processes and measurable goals.",
    "a2.title": "Build",
    "a2.desc": "We design and develop practical, fast-to-launch solutions with weekly progress and full transparency.",
    "a3.title": "Evolve",
    "a3.desc": "We support operations, train the team and evolve the system as the business grows — without unnecessary complexity.",
    "about.tag": "About the Studio",
    "about.title": "Mahmoud Ismail Radwan",
    "about.lead": "A professional who bridges three worlds rarely combined at depth: marketing & business development, accounting & financial management, and AI & automation solutions.",
    "about.p1": "The journey began in 2010 in Egypt managing commercial centres and management accounting, then moved to Oman leading marketing and sales teams across FMCG, B2B and B2C. Deep experience with Al-Ameen accounting software gave a practical understanding of numbers and contracts.",
    "about.p2": "Today that experience becomes intelligent software: real-estate ERP systems, marketing automation, web apps and WhatsApp API integrations — with full transparency and systems built step-by-step with the client.",
    "about.loc": "Location:",
    "about.exp": "Experience:",
    "contact.tag": "Contact",
    "contact.title": "Let's start your next project",
    "contact.desc": "Send a direct message via WhatsApp or email — we reply during business hours",
    "contact.wa": "Direct WhatsApp",
    "contact.waDesc": "The fastest way to reach us",
    "contact.email": "Email",
    "contact.emailDesc": "For formal correspondence and proposals",
    "contact.formTitle": "Send a quick message",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Your message...",
    "form.submit": "Send via WhatsApp",
    "footer.tagline": "Designed, built & signed — Mahmoud Ismail Radwan",
    "modal.discuss": "Discuss a similar project",
    "modal.view": "Live Preview",
    "modal.close": "Close",
  },
};

/* Project logos as SVG */
const logos = {
  aqar: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="16" fill="#1e3a5f"/><path d="M18 42V26l14-10 14 10v16H38V32h-12v10H18z" fill="#60a5fa"/><path d="M26 42h12v-6H26v6z" fill="#93c5fd"/></svg>`,
  mihani: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="16" fill="#1a2e1a"/><circle cx="32" cy="28" r="10" stroke="#4ade80" stroke-width="3"/><path d="M20 48c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#4ade80" stroke-width="3" stroke-linecap="round"/><path d="M32 22v8M28 26h8" stroke="#86efac" stroke-width="2" stroke-linecap="round"/></svg>`,
  opera: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="16" fill="#1c1917"/><circle cx="32" cy="32" r="18" stroke="#d4af37" stroke-width="2.5"/><path d="M32 18v28M22 26c4 4 8 6 10 6s6-2 10-6M22 38c4-4 8-6 10-6s6 2 10 6" stroke="#d4af37" stroke-width="2" stroke-linecap="round"/></svg>`,
  seven: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="16" fill="#2a1510"/><path d="M20 22h24l-6 10h8L28 48l2-12h-8l6-14H20z" fill="#f97316"/><circle cx="44" cy="20" r="4" fill="#fb923c"/></svg>`,
  auto: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="16" fill="#1e1b2e"/><path d="M20 40l8-16h8l8 16" stroke="#a78bfa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="42" r="3" fill="#c4b5fd"/><circle cx="40" cy="42" r="3" fill="#c4b5fd"/><path d="M28 28h8M30 24h4" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/></svg>`,
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
  modal.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("open");
  modal.setAttribute("hidden", "");
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
  document.getElementById("projectModal")?.addEventListener("click", (e) => {
    if (e.target.id === "projectModal" || e.target.classList.contains("modal-backdrop")) closeModal();
  });

  document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("formName")?.value.trim() || "";
    const email = document.getElementById("formEmail")?.value.trim() || "";
    const msg = document.getElementById("formMsg")?.value.trim() || "";
    const text = `الاسم: ${name}%0Aالبريد: ${email}%0A%0A${msg}`;
    window.open(`https://wa.me/96894755722?text=${text}`, "_blank");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", init);
