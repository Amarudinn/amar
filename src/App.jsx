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
      bio: 'Membangun pengalaman web yang indah dengan kode yang bersih.',
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
      bio: 'Building beautiful web experiences with clean code.',
      updated: 'Updated',
    },
  };

  const text = t[lang];

  const currentRoles = [
    { role: 'Ambassador', org: 'Nexus' },
    { role: 'Head Regional Mod', org: 'Dawn' },
  ];

  const previousRoles = [
    { role: 'Community Mod', org: 'Solana' },
    { role: 'Beta Tester', org: 'Ethereum' },
  ];

  const buildTime = new Date(__BUILD_TIME__).toLocaleString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={styles.container}>
      <div className={styles.lastUpdated}>{text.updated}: {buildTime}</div>
      <button 
        className={styles.langToggle} 
        onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
      >
        {lang}
      </button>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.avatar}>
          <img 
            src="/amar.jpg" 
            alt="Avatar"
          />
        </div>
        <h1 className={styles.name}>Mohammad Amarudin</h1>
        <p className={styles.nickname}>(Amar)</p>
        <p className={styles.role}>Vibes Coder</p>
        <p className={styles.bio}>
          {text.bio}
        </p>
        <div className={styles.links}>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-1 1-1.36 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.464-2.464l6.768-6.768"/></svg>
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="mailto:hello@example.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </section>

      {/* Roles */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>{text.roles}</h2>
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
              <span className={styles.roleOrg}>@ {item.org}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2>{text.skills}</h2>
        <div className={styles.skills}>
          {[
            { name: 'JavaScript', icon: <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h256v256H0V0z" fill="#F7DF1E"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/></svg> },
            { name: 'React', icon: <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/><path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/></svg> },
            { name: 'Python', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"/><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"/></svg> },
            { name: 'Supabase', icon: <svg viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sbGrad1" x1="53.97" y1="54.97" x2="94.16" y2="71.83" gradientUnits="userSpaceOnUse"><stop stopColor="#249361"/><stop offset="1" stopColor="#3ECF8E"/></linearGradient></defs><path d="M63.71 110.28c-2.86 3.6-8.66 1.63-8.73-2.97l-1.01-67.25h45.22c8.19 0 12.76 9.46 7.67 15.87L63.71 110.28z" fill="url(#sbGrad1)"/><path d="M45.32 2.07c2.86-3.6 8.66-1.63 8.73 2.97l.44 67.25H9.83c-8.19 0-12.76-9.46-7.67-15.87L45.32 2.07z" fill="#3ECF8E"/></svg> },
            { name: 'TailwindCSS', icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#38BDF8" fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg> },
            { name: 'Solidity', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M25,15l-6.5,-11l-6.5,11z" fill="#ffffff"/><path d="M38,15l-6.5,-11l-6.5,11z" fill="#f9f9f9"/><path d="M18.5,4l6.5,11l6.5,-11z" fill="#ffffff"/><path d="M12,15l6.5,11l6.5,-11z" fill="#ffffff"/><path d="M25,33l6.5,11l6.5,-11z" fill="#ffffff"/><path d="M12,33l6.5,11l6.5,-11z" fill="#f9f9f9"/><path d="M31.5,44l-6.5,-11l-6.5,11z" fill="#ffffff"/><path d="M38,33l-6.5,-11l-6.5,11z" fill="#ffffff"/></svg> },
          ].map(skill => (
            <span key={skill.name} className={styles.skill}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className={styles.section}>
        <h2>{text.projects}</h2>
        <div className={styles.projects}>
          {[
            { title: 'RTA', desc: 'RTA (Real-Time Tweet Automation)', badge: '1st Membit Half-Hackathon' },
            { title: 'To-do List', desc: 'Catatan harian', badge: null },
            { title: 'SocialFi', desc: 'X (Twitter) versi on-chain', badge: null },
          ].map(project => (
            <div key={project.title} className={styles.project}>
              <div className={styles.projectHeader}>
                <h3>{project.title}</h3>
                {project.badge && <span className={styles.badge}>{project.badge}</span>}
              </div>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className={styles.section}>
        <h2>{text.contact}</h2>
        <p className={styles.contactText}>
          {text.contactText}
        </p>
        <a href="mailto:hello@example.com" className={styles.contactBtn}>
          {text.contactBtn}
        </a>
      </section>

      <footer className={styles.footer}>
        © 2026 Amar
      </footer>
    </div>
  );
}

export default App;
