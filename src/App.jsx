import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const getInitialLang = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('id') ? 'ID' : 'EN';
  };

  const [showCurrent, setShowCurrent] = useState(true);
  const [lang, setLang] = useState(getInitialLang);

  const t = {
    ID: {
      roles: 'Peran',
      current: 'Sekarang',
      previous: 'Sebelumnya',
      skills: 'Keahlian',
      projects: 'Proyek',
      contact: 'Hubungi Saya',
      contactText: 'Tertarik bekerja sama? Ayo terhubung!',
      contactBtn: 'Sapa Saya',
      bio: '21 - Membangun Browser News — menggabungkan artikel dari 28 sumber berita global terpercaya dan menyajikannya dalam satu platform terintegrasi.',
      updated: 'Diperbarui',
    },
    EN: {
      roles: 'Roles',
      current: 'Current',
      previous: 'Previous',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Get in Touch',
      contactText: 'Interested in working together? Let\'s connect!',
      contactBtn: 'Say Hello',
      bio: '21 - Building Browser News — aggregates article from 28 trusted global news sources and presents it within a single integrated platform',
      updated: 'Updated',
    },
  };

  const text = t[lang];

  const currentRoles = [
    { role: 'Ambassador', org: 'Nexus' },
    { role: 'Head Regional Mod', org: 'Dawn' },
  ];

  const previousRoles = [
    { role: 'Regional Moderator', org: 'FILLiquid' },
  ];

  const skills = [
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'React', color: '#53C1DE' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Supabase', color: '#3ECF8E' },
    { name: 'TailwindCSS', color: '#38BDF8' },
    { name: 'Solidity', color: '#636890' },
  ];

  const projects = [
    {
      title: 'RTA',
      descID: 'RTA (Real-Time Tweet Automation)',
      descEN: 'RTA (Real-Time Tweet Automation)',
      link: 'https://github.com/Amarudinn/membit-hackathon',
      achievement: '1st Membit Half-Hackathon',
      achievementLink: 'https://x.com/membit_ai/status/1996528360315580428',
    },
    {
      title: 'Browser News',
      descID: 'Menggabungkan artikel dari 28 sumber berita global terpercaya dalam satu platform terintegrasi. Didukung oleh Browser.cash',
      descEN: 'Aggregates articles from 28 trusted global news sources and presents them within a single integrated platform. Powered by Browser.cash',
      link: 'https://github.com/Amarudinn/browser-news',
    },
    {
      title: 'Debate Room',
      descID: 'Platform terdesentralisasi untuk debat terstruktur, dinilai secara objektif oleh AI Jury yang didukung GenLayer',
      descEN: 'A decentralized platform where users can engage in structured debates, objectively evaluated by an AI Jury powered by GenLayer',
      link: 'https://github.com/Amarudinn/ruang-debat',
    },
    {
      title: 'To-do List',
      descID: 'Catatan harian',
      descEN: 'Diary',
      link: 'https://github.com/Amarudinn/todolist',
    },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Amarudinn', icon: 'github' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'X', href: 'https://x.com/m_amarudinn2', icon: 'x' },
    { name: 'Telegram', href: 'https://t.me/@m_amarudin', icon: 'telegram' },
  ];

  const buildTime = new Date(__BUILD_TIME__).toLocaleString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const SocialIcon = ({ type }) => {
    const icons = {
      github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-1 1-1.36 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" />,
      linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
      x: <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.464-2.464l6.768-6.768" />,
      telegram: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
      instagram: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></>,
      facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
      email: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {icons[type]}
      </svg>
    );
  };

  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <span className={styles.buildInfo}>{text.updated}: {buildTime}</span>
        <button
          className={styles.langToggle}
          onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
        >
          {lang}
        </button>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.avatar}>
          <img src="/amar.jpg" alt="Amar" />
        </div>
        <h1 className={styles.name}>Amar</h1>
        <p className={styles.nickname}>Mohammad Amarudin</p>
        <p className={styles.role}>Vibes Coder</p>
        <p className={styles.bio}>{text.bio}</p>
        <div className={styles.socials}>
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              target={link.icon !== 'email' ? '_blank' : undefined}
              rel={link.icon !== 'email' ? 'noopener noreferrer' : undefined}
              className={styles.socialLink}
              aria-label={link.name}
            >
              <SocialIcon type={link.icon} />
            </a>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* Roles */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{text.roles}</h2>
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleBtn} ${showCurrent ? styles.active : ''}`}
              onClick={() => setShowCurrent(true)}
            >
              {text.current}
            </button>
            <button
              className={`${styles.toggleBtn} ${!showCurrent ? styles.active : ''}`}
              onClick={() => setShowCurrent(false)}
            >
              {text.previous}
            </button>
          </div>
        </div>
        <div className={styles.roles}>
          {(showCurrent ? currentRoles : previousRoles).map(item => (
            <div key={item.org} className={styles.roleCard}>
              <span className={styles.roleTitle}>{item.role}</span>
              <span className={styles.roleOrg}>{item.org}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{text.skills}</h2>
        <div className={styles.skills}>
          {skills.map(skill => (
            <span key={skill.name} className={styles.skill}>
              <span className={styles.skillIcon}>
                <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4" fill={skill.color} />
                </svg>
              </span>
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{text.projects}</h2>
        <div className={styles.projects}>
          {projects.map(project => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.project}
            >
              <div className={styles.projectTop}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectArrow}>→</span>
              </div>
              <p className={styles.projectDesc}>{lang === 'ID' ? project.descID : project.descEN}</p>
              {project.achievement && (
                <span
                  className={styles.achievement}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.achievementLink, '_blank');
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  {project.achievement}
                </span>
              )}
            </a>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* Contact */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{text.contact}</h2>
        <p className={styles.contactText}>{text.contactText}</p>
        <a href="mailto:mohammadamarudin6@gmail.com" className={styles.contactBtn}>
          {text.contactBtn}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </section>

      <footer className={styles.footer}>
        © 2026 Amar — Built with love
      </footer>
    </div>
  );
}

export default App;
