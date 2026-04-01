"use client";

import { useEffect, useRef, useState } from "react";

const translations = {
  ar: {
    dir: "rtl",
    nav: { features: "المميزات", about: "من نحن", stats: "إحصاءات", contact: "تواصل", lang: "English" },
    topBar: { call: "اتصل بنا", whatsapp: "واتساب", location: "موقعنا" },
    hero: {
      badge: "الجيل القادم من المنازل الذكية",
      title: "تحكم بمنزلك",
      titleAccent: "بذكاء",
      subtitle: "نظام منزلي ذكي متكامل يجمع بين الأمان والراحة والتحكم الكامل من هاتفك",
      cta: "ابدأ الآن",
      ctaSecondary: "تعرف أكثر",
    },
    features: {
      badge: "ما يميزنا",
      title: "مميزات استثنائية",
      subtitle: "كل ما تحتاجه لتحويل منزلك إلى منزل المستقبل",
      items: [
        { title: "التحكم الكامل", desc: "تحكم في كل جهاز في منزلك من أي مكان في العالم بضغطة واحدة" },
        { title: "أمان متقدم", desc: "نظام حماية متطور بكاميرات ذكية وأقفال إلكترونية وإنذار فوري" },
        { title: "إضاءة ذكية", desc: "إضاءة تتكيف مع مزاجك وجدولك اليومي تلقائياً بدقة عالية" },
        { title: "تحكم بالحرارة", desc: "درجة حرارة مثالية في كل غرفة مع توفير استهلاك الطاقة" },
        { title: "مراقبة مباشرة", desc: "راقب منزلك مباشرة بجودة عالية في أي وقت ومن أي مكان" },
        { title: "تطبيق سهل", desc: "واجهة بسيطة وأنيقة تتيح لك إدارة كل شيء بسهولة تامة" },
      ],
    },
    stats: [
      { value: 50, suffix: "K+", label: "مستخدم نشط" },
      { value: 99.9, suffix: "%", label: "وقت تشغيل مضمون" },
      { value: 24, suffix: "/7", label: "دعم متواصل" },
    ],
    about: {
      badge: "قصتنا",
      title: "من نحن",
      p1: "نحن روّاد في مجال تقنية المنازل الذكية، نجمع بين الابتكار التقني والفهم العميق لاحتياجات عملائنا لنقدم تجربة معيشية فريدة ومتكاملة.",
      p2: "منذ تأسيسنا، التزمنا بتقديم أعلى معايير الجودة والأمان، مع ضمان تجربة مستخدم سلسة وبسيطة تناسب جميع أفراد الأسرة.",
      stat1: "سنوات خبرة",
      stat2: "مشروع مكتمل",
      cta: "تواصل معنا",
    },
    cta: {
      title: "المستقبل في متناول يدك",
      subtitle: "ابدأ رحلتك نحو منزل أذكى اليوم",
      btn: "تواصل معنا",
    },
    footer: {
      tagline: "نظام المنازل الذكية المتكامل",
      phone: "+966 56 119 1797",
      location: "المملكة العربية السعودية",
      links: ["الشروط والأحكام", "سياسة الخصوصية", "تواصل معنا"],
      rights: "جميع الحقوق محفوظة",
      contactTitle: "تواصل",
      quickTitle: "روابط سريعة",
      linksTitle: "روابط",
    },
  },
  en: {
    dir: "ltr",
    nav: { features: "Features", about: "About", stats: "Stats", contact: "Contact", lang: "عربي" },
    topBar: { call: "Call Us", whatsapp: "WhatsApp", location: "Location" },
    hero: {
      badge: "Next Generation Smart Homes",
      title: "Control Your Home",
      titleAccent: "Smarter",
      subtitle: "Integrated smart home system combining security, comfort, and full control from your phone",
      cta: "Get Started",
      ctaSecondary: "Learn More",
    },
    features: {
      badge: "Why Choose Us",
      title: "Exceptional Features",
      subtitle: "Everything you need to transform your home into the future",
      items: [
        { title: "Full Control", desc: "Control every device in your home from anywhere in the world with one tap" },
        { title: "Advanced Security", desc: "Sophisticated protection with smart cameras, electronic locks and instant alerts" },
        { title: "Smart Lighting", desc: "Lighting that adapts to your mood and daily schedule automatically with precision" },
        { title: "Climate Control", desc: "Perfect temperature in every room while saving energy consumption efficiently" },
        { title: "Live Monitoring", desc: "Monitor your home live in high quality at any time from anywhere you are" },
        { title: "Easy App", desc: "Simple and elegant interface that lets you manage everything with complete ease" },
      ],
    },
    stats: [
      { value: 50, suffix: "K+", label: "Active Users" },
      { value: 99.9, suffix: "%", label: "Uptime Guaranteed" },
      { value: 24, suffix: "/7", label: "Continuous Support" },
    ],
    about: {
      badge: "Our Story",
      title: "About Us",
      p1: "We are pioneers in smart home technology, combining technical innovation with deep understanding of our clients' needs to deliver a unique and integrated living experience.",
      p2: "Since our founding, we have been committed to delivering the highest standards of quality and security, ensuring a seamless user experience suitable for all family members.",
      stat1: "Years Experience",
      stat2: "Projects Completed",
      cta: "Contact Us",
    },
    cta: {
      title: "The Future Is Within Your Reach",
      subtitle: "Start your journey towards a smarter home today",
      btn: "Contact Us",
    },
    footer: {
      tagline: "The Integrated Smart Home System",
      phone: "+966 56 119 1797",
      location: "Saudi Arabia",
      links: ["Terms & Conditions", "Privacy Policy", "Contact Us"],
      rights: "All rights reserved",
      contactTitle: "Contact",
      quickTitle: "Quick Links",
      linksTitle: "Links",
    },
  },
};

const FeatureIcons = [
  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
];

function AnimatedCounter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isDecimal = value % 1 !== 0;
          const steps = 60;
          let step = 0;

          const timer = setInterval(() => {
            step += 1;
            const eased = 1 - Math.pow(1 - step / steps, 3);
            setCount(isDecimal ? parseFloat((value * eased).toFixed(1)) : Math.floor(value * eased));
            if (step >= steps) {
              clearInterval(timer);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function useFadeIn(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function FadeSection({ children, delay = 0, style = {}, className = "" }) {
  const [ref, visible] = useFadeIn();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s cubic-bezier(.4,0,.2,1) ${delay}ms, transform 0.75s cubic-bezier(.4,0,.2,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function ZuccessLanding() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("zuccess_lang") || "ar";
    } catch {
      return "ar";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];
  const isAr = lang === "ar";

  useEffect(() => {
    try {
      localStorage.setItem("zuccess_lang", lang);
    } catch {}
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang((currentLang) => (currentLang === "ar" ? "en" : "ar"));
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const PHONE = "+966561191797";
  const WA_LINK = `https://wa.me/${PHONE}`;
  const TEL_LINK = `tel:${PHONE}`;

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #07111f; color: #fff; overflow-x: hidden; -webkit-font-smoothing: antialiased; }

    .zapp { font-family: ${isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif"}; direction: ${t.dir}; }

    .topbar {
      background: #040c18;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 9px 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 28px;
      flex-wrap: wrap;
      font-size: 12.5px;
      color: #8facc8;
      position: relative;
      z-index: 200;
    }
    .topbar a {
      color: #8facc8;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 500;
      transition: color .2s;
    }
    .topbar a:hover { color: #fff; }

    .nav {
      position: sticky;
      top: 0;
      z-index: 199;
      background: ${scrolled ? "rgba(4,12,24,0.94)" : "transparent"};
      backdrop-filter: ${scrolled ? "blur(22px)" : "none"};
      border-bottom: ${scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent"};
      box-shadow: ${scrolled ? "0 4px 40px rgba(0,0,0,0.35)" : "none"};
      transition: all .4s ease;
      padding: 0 32px;
    }
    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      line-height: 1;
    }
    .logo img {
      height: 90px;
      width: auto;
      display: block;
    }
    .nav-links { display: flex; align-items: center; gap: 4px; list-style: none; }
    .nav-links li button.nav-link {
      background: none;
      border: none;
      color: #94aec8;
      font-size: 14px;
      font-weight: 500;
      padding: 8px 14px;
      border-radius: 9px;
      cursor: pointer;
      transition: all .2s;
      font-family: inherit;
    }
    .nav-links li button.nav-link:hover { color: #fff; background: rgba(255,255,255,0.05); }
    .lang-toggle {
      background: rgba(74,143,212,0.12);
      color: #7bb5e8;
      border: 1px solid rgba(74,143,212,0.25);
      padding: 7px 18px;
      border-radius: 100px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      transition: all .25s;
      font-family: inherit;
    }
    .lang-toggle:hover { background: rgba(74,143,212,0.22); color: #fff; }
    .burger-btn {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px;
    }
    .burger-btn span {
      display: block;
      width: 22px;
      height: 2px;
      background: #cbd5e1;
      border-radius: 2px;
      transition: all .3s;
    }
    .mobile-lang-toggle { display: none; }
    .mob-menu {
      display: none;
      flex-direction: column;
      padding: 12px 20px 20px;
      background: rgba(4,12,24,.97);
      backdrop-filter: blur(20px);
      border-top: 1px solid rgba(255,255,255,.06);
      gap: 2px;
    }
    .mob-menu.open { display: flex; }
    .mob-link {
      background: none;
      border: none;
      color: #94aec8;
      font-size: 15px;
      font-weight: 500;
      padding: 12px 8px;
      border-bottom: 1px solid rgba(255,255,255,.05);
      text-align: ${isAr ? "right" : "left"};
      cursor: pointer;
      font-family: inherit;
      transition: color .2s;
    }
    .mob-link:hover { color: #fff; }

    .hero {
      min-height: calc(100vh - 110px);
      background: linear-gradient(145deg, #060f1c 0%, #0f2340 55%, #0b1d35 100%);
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
    }
    .hero::before {
      content: '';
      position: absolute;
      top: -30%;
      ${isAr ? "left" : "right"}: -10%;
      width: 70%;
      height: 140%;
      background: radial-gradient(ellipse, rgba(58,123,213,.1) 0%, transparent 65%);
      pointer-events: none;
    }
    .hero::after {
      content: '';
      position: absolute;
      bottom: -20%;
      ${isAr ? "right" : "left"}: 5%;
      width: 40%;
      height: 80%;
      background: radial-gradient(ellipse, rgba(91,155,213,.06) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-grid {
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 32px 60px;
      display: grid;
      grid-template-columns: 1.1fr .9fr;
      gap: 64px;
      align-items: center;
      width: 100%;
      position: relative;
      z-index: 2;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(74,143,212,.1);
      border: 1px solid rgba(74,143,212,.25);
      color: #7bb5e8;
      padding: 6px 16px;
      border-radius: 100px;
      font-size: 12.5px;
      font-weight: 700;
      margin-bottom: 24px;
      letter-spacing: .3px;
    }
    .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #4a8fd4; animation: bdot 2s infinite; }
    @keyframes bdot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }
    .hero-h1 {
      font-size: clamp(34px, 4.5vw, 60px);
      font-weight: 900;
      line-height: 1.12;
      letter-spacing: -1.5px;
      margin-bottom: 20px;
      color: #fff;
    }
    .hero-h1 .grad {
      background: linear-gradient(135deg, #4a8fd4 0%, #88c0f0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-sub {
      font-size: 16px;
      line-height: 1.85;
      color: #7a96b0;
      margin-bottom: 38px;
      max-width: 460px;
      font-weight: 400;
    }
    .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
    .btn-primary {
      display: inline-block;
      background: linear-gradient(135deg, #3a7bd5, #2558a8);
      color: #fff;
      padding: 14px 32px;
      border-radius: 13px;
      font-size: 15px;
      font-weight: 700;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: all .3s;
      font-family: inherit;
      box-shadow: 0 8px 28px rgba(58,123,213,.4);
      letter-spacing: .2px;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 42px rgba(58,123,213,.55); }
    .btn-sec {
      display: inline-block;
      background: transparent;
      color: #c5d8ed;
      padding: 14px 28px;
      border-radius: 13px;
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,.12);
      cursor: pointer;
      transition: all .3s;
      font-family: inherit;
    }
    .btn-sec:hover { background: rgba(255,255,255,.04); border-color: rgba(255,255,255,.22); }

    .phone-col {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .phone-outer {
      position: relative;
      width: 270px;
      filter: drop-shadow(0 32px 64px rgba(0,0,0,.55)) drop-shadow(0 0 80px rgba(58,123,213,.18));
      animation: floatPhone 4.5s ease-in-out infinite;
    }
    @keyframes floatPhone { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
    .phone-body {
      width: 100%;
      border-radius: 46px;
      background: linear-gradient(150deg, #1b2e45, #0c1d2f);
      border: 2px solid rgba(255,255,255,.14);
      padding: 13px;
      position: relative;
    }
    .phone-notch {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 76px;
      height: 26px;
      background: #0c1d2f;
      border-radius: 0 0 18px 18px;
      z-index: 10;
    }
    .phone-screen {
      border-radius: 34px;
      overflow: hidden;
      background: #000;
      aspect-ratio: 9/19.5;
    }
    .phone-screen video { width: 100%; height: 100%; object-fit: cover; display: block; }
    .phone-sheen {
      position: absolute;
      inset: 0;
      border-radius: 46px;
      background: linear-gradient(115deg, rgba(255,255,255,.07) 0%, transparent 45%);
      pointer-events: none;
    }
    .phone-glow-bottom {
      position: absolute;
      bottom: -32px;
      left: 50%;
      transform: translateX(-50%);
      width: 180px;
      height: 60px;
      background: radial-gradient(ellipse, rgba(58,123,213,.22) 0%, transparent 70%);
      pointer-events: none;
    }
    .scroll-hint {
      position: absolute;
      bottom: 28px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      opacity: .35;
      animation: scrollHint 2.4s ease-in-out infinite;
    }
    @keyframes scrollHint { 0%,100%{opacity:.25;transform:translateX(-50%) translateY(0)} 55%{opacity:.6;transform:translateX(-50%) translateY(8px)} }
    .scroll-hint-line { width: 1px; height: 36px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,.6)); }
    .scroll-hint-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,.5); }

    .sect { padding: 96px 32px; }
    .sect-inner { max-width: 1200px; margin: 0 auto; }
    .badge-label {
      display: inline-block;
      color: #4a8fd4;
      font-size: 11.5px;
      font-weight: 800;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .sect-h2 {
      font-size: clamp(26px, 3.5vw, 46px);
      font-weight: 800;
      color: #fff;
      margin-bottom: 14px;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }
    .sect-sub { font-size: 15.5px; color: #6a8faa; max-width: 500px; line-height: 1.8; }

    .feat-bg { background: linear-gradient(180deg, #07111f 0%, #0c1d30 100%); }
    .feat-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 52px;
    }
    .feat-card {
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 20px;
      padding: 28px 24px;
      position: relative;
      overflow: hidden;
      transition: transform .35s, background .35s, border-color .35s;
    }
    .feat-card::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1.5px;
      background: linear-gradient(90deg, transparent, rgba(74,143,212,.45), transparent);
      opacity: 0;
      transition: opacity .35s;
    }
    .feat-card:hover { transform: translateY(-5px); background: rgba(74,143,212,.05); border-color: rgba(74,143,212,.2); }
    .feat-card:hover::after { opacity: 1; }
    .feat-icon {
      width: 46px; height: 46px;
      background: rgba(74,143,212,.1);
      border-radius: 13px;
      display: flex; align-items: center; justify-content: center;
      color: #4a8fd4;
      margin-bottom: 16px;
      transition: all .35s;
    }
    .feat-card:hover .feat-icon { background: rgba(74,143,212,.18); color: #88c0f0; }
    .feat-title { font-size: 15.5px; font-weight: 700; color: #e2edf5; margin-bottom: 8px; }
    .feat-desc { font-size: 13.5px; color: #6a8faa; line-height: 1.8; }

    .stats-sect {
      background: linear-gradient(135deg, #0b1d2e 0%, #0f2340 100%);
      padding: 80px 32px;
      position: relative;
      overflow: hidden;
    }
    .stats-sect::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 50% 50%, rgba(58,123,213,.06) 0%, transparent 65%);
    }
    .stats-grid {
      max-width: 880px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      position: relative;
      z-index: 2;
    }
    .stat-card {
      text-align: center;
      padding: 44px 20px;
      background: rgba(255,255,255,.02);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 22px;
      backdrop-filter: blur(10px);
      transition: transform .3s, border-color .3s;
    }
    .stat-card:hover { transform: translateY(-6px); border-color: rgba(74,143,212,.2); }
    .stat-num {
      font-size: clamp(38px, 5vw, 56px);
      font-weight: 900;
      background: linear-gradient(135deg, #fff 30%, #88c0f0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -1.5px;
      line-height: 1;
      margin-bottom: 10px;
    }
    .stat-label { font-size: 14px; color: #6a8faa; font-weight: 500; }

    .about-sect { background: #07111f; }
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 72px;
      align-items: center;
    }
    .about-visual-card {
      background: linear-gradient(140deg, #142540, #1a3358);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 28px;
      padding: 38px;
      position: relative;
      overflow: hidden;
    }
    .about-visual-card::before {
      content: '';
      position: absolute;
      top: -50px; ${isAr ? "left" : "right"}: -50px;
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(74,143,212,.15) 0%, transparent 70%);
    }
    .about-vis-icon {
      width: 54px; height: 54px;
      border-radius: 15px;
      background: rgba(74,143,212,.12);
      display: flex; align-items: center; justify-content: center;
      color: #7bb5e8;
      margin-bottom: 22px;
    }
    .about-vis-title { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 10px; }
    .about-vis-text { font-size: 13.5px; color: #6a8faa; line-height: 1.75; margin-bottom: 26px; }
    .about-mini-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .about-mini {
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 15px;
      padding: 18px;
      text-align: center;
    }
    .about-mini-n { font-size: 28px; font-weight: 800; color: #7bb5e8; line-height: 1; margin-bottom: 5px; }
    .about-mini-l { font-size: 12px; color: #5e7d96; font-weight: 500; }
    .about-text p { font-size: 15px; color: #6a8faa; line-height: 1.95; margin-bottom: 18px; }

    .cta-sect {
      background: linear-gradient(135deg, #1e4d9c 0%, #3a7bd5 100%);
      padding: 96px 32px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cta-sect::before {
      content: '';
      position: absolute;
      top: -60%; ${isAr ? "right" : "left"}: -10%;
      width: 50%; height: 220%;
      background: rgba(255,255,255,.04);
      transform: skewX(${isAr ? "12" : "-12"}deg);
    }
    .cta-sect::after {
      content: '';
      position: absolute;
      bottom: -60%; ${isAr ? "left" : "right"}: -10%;
      width: 40%; height: 220%;
      background: rgba(255,255,255,.03);
      transform: skewX(${isAr ? "12" : "-12"}deg);
    }
    .cta-h2 { font-size: clamp(26px, 4vw, 48px); font-weight: 900; color: #fff; margin-bottom: 14px; letter-spacing: -.5px; position: relative; z-index: 2; }
    .cta-sub { font-size: 16px; color: rgba(255,255,255,.72); margin-bottom: 36px; position: relative; z-index: 2; }
    .btn-white {
      display: inline-block;
      background: #fff;
      color: #0f2340;
      padding: 15px 40px;
      border-radius: 14px;
      font-size: 16px;
      font-weight: 800;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: all .3s;
      font-family: inherit;
      box-shadow: 0 8px 32px rgba(0,0,0,.18);
      position: relative;
      z-index: 2;
      letter-spacing: .1px;
    }
    .btn-white:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(0,0,0,.28); }

    .footer {
      background: #040c18;
      border-top: 1px solid rgba(255,255,255,.06);
      padding: 60px 32px 24px;
    }
    .footer-inner { max-width: 1200px; margin: 0 auto; }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 44px;
    }
    .footer-logo {
      display: inline-flex;
      align-items: center;
      margin-bottom: 10px;
      line-height: 1;
    }
    .footer-logo img {
      height: 90px;
      width: auto;
      display: block;
    }
    .footer-tag { font-size: 13px; color: #4e6a82; margin-bottom: 22px; line-height: 1.65; }
    .footer-socials { display: flex; gap: 10px; }
    .soc-btn {
      width: 36px; height: 36px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 9px;
      display: flex; align-items: center; justify-content: center;
      color: #4e6a82;
      text-decoration: none;
      transition: all .25s;
    }
    .soc-btn:hover { background: rgba(74,143,212,.12); color: #7bb5e8; border-color: rgba(74,143,212,.25); }
    .footer-col-h { font-size: 12px; font-weight: 800; color: #8baec8; margin-bottom: 16px; letter-spacing: 1.5px; text-transform: uppercase; }
    .footer-list { list-style: none; display: flex; flex-direction: column; gap: 9px; }
    .footer-list li button, .footer-list li a {
      background: none;
      border: none;
      color: #4e6a82;
      font-size: 14px;
      text-decoration: none;
      transition: color .2s;
      cursor: pointer;
      font-family: inherit;
      font-weight: 400;
      padding: 0;
      text-align: ${isAr ? "right" : "left"};
      display: block;
    }
    .footer-list li button:hover, .footer-list li a:hover { color: #c5d8ed; }
    .footer-contact-a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #4e6a82;
      font-size: 13.5px;
      text-decoration: none;
      transition: color .2s;
      margin-bottom: 10px;
    }
    .footer-contact-a:hover { color: #c5d8ed; }
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,.05);
      padding-top: 22px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 12.5px;
      color: #3a5570;
    }
    .footer-bottom-links { display: flex; gap: 18px; }
    .footer-bottom-links a { color: #3a5570; text-decoration: none; transition: color .2s; }
    .footer-bottom-links a:hover { color: #8baec8; }

    .wa-btn {
      position: fixed;
      bottom: 26px;
      ${isAr ? "left" : "right"}: 26px;
      z-index: 998;
      display: flex;
      align-items: center;
      gap: 9px;
      background: #22c55e;
      color: #fff;
      padding: 12px 20px 12px 15px;
      border-radius: 100px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 700;
      box-shadow: 0 8px 30px rgba(34,197,94,.38);
      transition: all .3s;
      font-family: inherit;
    }
    .wa-btn:hover { transform: scale(1.05) translateY(-2px); box-shadow: 0 14px 44px rgba(34,197,94,.5); }

    @media (max-width: 1024px) {
      .feat-grid { grid-template-columns: repeat(2,1fr); }
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 768px) {
      .hero-grid { grid-template-columns: 1fr; padding: 56px 20px 48px; text-align: center; gap: 48px; }
      .hero-sub { margin: 0 auto 38px; }
      .hero-badge { margin: 0 auto 24px; }
      .hero-btns { justify-content: center; }
      .phone-col { order: 2; }
      .hero-copy { order: 1; }
      .phone-outer { width: 210px; }
      .feat-grid { grid-template-columns: 1fr; }
      .stats-grid { grid-template-columns: 1fr; gap: 14px; }
      .about-grid { grid-template-columns: 1fr; gap: 36px; }
      .footer-grid { grid-template-columns: 1fr; gap: 28px; }
      .nav-links { display: none; }
      .burger-btn { display: flex; }
      .mobile-lang-toggle { display: inline-block; }
      .sect { padding: 64px 20px; }
      .stats-sect { padding: 64px 20px; }
      .topbar { font-size: 11.5px; gap: 14px; padding: 8px 14px; }
    }
    @media (max-width: 480px) {
      .nav { padding: 0 16px; }
      .hero-h1 { font-size: 30px; }
    }
  `;

  return (
    <div className="zapp">
      <style>{css}</style>

      <div className="topbar">
        <a href={TEL_LINK}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.18 19.79 19.79 0 01.07 4.7 2 2 0 012 2.56h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.09a16 16 0 006 6l.62-.62a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92v-1z" />
          </svg>
          {t.topBar.call}: +966 56 119 1797
        </a>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.552 4.117 1.517 5.853L.073 23.653a.5.5 0 00.626.606l5.966-1.917A11.965 11.965 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.052-1.383l-.354-.21-3.677 1.18 1.218-3.553-.232-.365A9.9 9.9 0 1112 21.9z" />
          </svg>
          {t.topBar.whatsapp}
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {t.topBar.location}
        </a>
      </div>

      <nav className="nav">
        <div className="nav-inner">
          <span className="logo">
            <img src="/zuccess_logo.png" alt="Zuccess" />
          </span>
          <ul className="nav-links">
            <li>
              <button className="nav-link" onClick={() => scrollTo("features")}>
                {t.nav.features}
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollTo("about")}>
                {t.nav.about}
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollTo("stats")}>
                {t.nav.stats}
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollTo("cta")}>
                {t.nav.contact}
              </button>
            </li>
            <li>
              <button className="lang-toggle" onClick={toggleLang}>
                {t.nav.lang}
              </button>
            </li>
          </ul>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button className="lang-toggle mobile-lang-toggle" onClick={toggleLang} id="lt-mob">
              {t.nav.lang}
            </button>
            <button className="burger-btn" onClick={() => setMenuOpen((open) => !open)} aria-label="menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <div className={`mob-menu${menuOpen ? " open" : ""}`}>
          <button className="mob-link" onClick={() => scrollTo("features")}>
            {t.nav.features}
          </button>
          <button className="mob-link" onClick={() => scrollTo("about")}>
            {t.nav.about}
          </button>
          <button className="mob-link" onClick={() => scrollTo("stats")}>
            {t.nav.stats}
          </button>
          <button className="mob-link" onClick={() => scrollTo("cta")}>
            {t.nav.contact}
          </button>
          <button
            onClick={() => {
              toggleLang();
              setMenuOpen(false);
            }}
            style={{
              marginTop: 12,
              width: "100%",
              padding: "12px 0",
              background: "rgba(74,143,212,.1)",
              border: "1px solid rgba(74,143,212,.2)",
              borderRadius: 10,
              color: "#7bb5e8",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {t.nav.lang}
          </button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy" style={{ opacity: 1, transform: "none" }}>
            <div className="hero-badge">
              <span className="badge-dot" />
              {t.hero.badge}
            </div>
            <h1 className="hero-h1">
              {t.hero.title} <span className="grad">{t.hero.titleAccent}</span>
            </h1>
            <p className="hero-sub">{t.hero.subtitle}</p>
            <div className="hero-btns">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t.hero.cta}
              </a>
              <button className="btn-sec" onClick={() => scrollTo("features")}>
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>
          <div className="phone-col">
            <div className="phone-outer">
              <div className="phone-body">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <video autoPlay muted loop playsInline controls>
                    <source src="/zuucesssamart.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="phone-sheen" />
              <div className="phone-glow-bottom" />
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <div className="scroll-hint-line" />
          <div className="scroll-hint-dot" />
        </div>
      </section>

      <section className="sect feat-bg" id="features">
        <div className="sect-inner">
          <FadeSection>
            <span className="badge-label">{t.features.badge}</span>
            <h2 className="sect-h2">{t.features.title}</h2>
            <p className="sect-sub">{t.features.subtitle}</p>
          </FadeSection>
          <div className="feat-grid">
            {t.features.items.map((item, i) => {
              const Icon = FeatureIcons[i];
              return (
                <FadeSection key={i} delay={i * 75}>
                  <div className="feat-card">
                    <div className="feat-icon">
                      <Icon />
                    </div>
                    <div className="feat-title">{item.title}</div>
                    <div className="feat-desc">{item.desc}</div>
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="stats-sect" id="stats">
        <div className="stats-grid">
          {t.stats.map((s, i) => (
            <FadeSection key={i} delay={i * 100}>
              <div className="stat-card">
                <div className="stat-num">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      <section className="sect about-sect" id="about">
        <div className="sect-inner">
          <div className="about-grid">
            <FadeSection>
              <div className="about-text">
                <span className="badge-label">{t.about.badge}</span>
                <h2 className="sect-h2">{t.about.title}</h2>
                <div style={{ marginTop: 18 }}>
                  <p>{t.about.p1}</p>
                  <p>{t.about.p2}</p>
                </div>
                <div style={{ marginTop: 28 }}>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    {t.about.cta}
                  </a>
                </div>
              </div>
            </FadeSection>
            <FadeSection delay={160}>
              <div className="about-visual-card">
                <div className="about-vis-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div className="about-vis-title">Zuccess Smart Homes</div>
                <div className="about-vis-text">{t.about.p1}</div>
                <div className="about-mini-row">
                  <div className="about-mini">
                    <div className="about-mini-n">8+</div>
                    <div className="about-mini-l">{t.about.stat1}</div>
                  </div>
                  <div className="about-mini">
                    <div className="about-mini-n">500+</div>
                    <div className="about-mini-l">{t.about.stat2}</div>
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      <section className="cta-sect" id="cta">
        <FadeSection>
          <h2 className="cta-h2">{t.cta.title}</h2>
          <p className="cta-sub">{t.cta.subtitle}</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-white">
            {t.cta.btn}
          </a>
        </FadeSection>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <img src="/zuccess_logo.png" alt="Zuccess" />
              </div>
              <div className="footer-tag">{t.footer.tagline}</div>
              <div className="footer-socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="Instagram">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <div className="footer-col-h">{t.footer.linksTitle}</div>
              <ul className="footer-list">
                {t.footer.links.map((l, i) => (
                  <li key={i}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-col-h">{t.footer.contactTitle}</div>
              <a href={TEL_LINK} className="footer-contact-a">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.18 19.79 19.79 0 01.07 4.7 2 2 0 012 2.56h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.09a16 16 0 006 6l.62-.62a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92v-1z" />
                </svg>
                {t.footer.phone}
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="footer-contact-a">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.552 4.117 1.517 5.853L.073 23.653a.5.5 0 00.626.606l5.966-1.917A11.965 11.965 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
                WhatsApp
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="footer-contact-a">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t.footer.location}
              </a>
            </div>
            <div>
              <div className="footer-col-h">{t.footer.quickTitle}</div>
              <ul className="footer-list">
                <li>
                  <button onClick={() => scrollTo("features")}>{t.nav.features}</button>
                </li>
                <li>
                  <button onClick={() => scrollTo("about")}>{t.nav.about}</button>
                </li>
                <li>
                  <button onClick={() => scrollTo("stats")}>{t.nav.stats}</button>
                </li>
                <li>
                  <button onClick={() => scrollTo("cta")}>{t.nav.contact}</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Zuccess Smart Homes. {t.footer.rights}.</span>
            <div className="footer-bottom-links">
              {t.footer.links.map((l, i) => (
                <a key={i} href="#">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-btn" aria-label="WhatsApp">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.552 4.117 1.517 5.853L.073 23.653a.5.5 0 00.626.606l5.966-1.917A11.965 11.965 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.052-1.383l-.354-.21-3.677 1.18 1.218-3.553-.232-.365A9.9 9.9 0 1112 21.9z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
