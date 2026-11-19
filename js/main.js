/**
 * ========================================================
 * MAIN SCRIPT - PORTFOLIO LOGIC & INTERACTION
 * ========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Content from Config
  populatePortfolioContent();

  // 2. Setup Typing Effect in Hero
  initTypingEffect();

  // 3. Setup Theme Switcher (Dark / Light Mode)
  initThemeToggle();

  // 4. Setup Mobile Menu
  initMobileMenu();

  // 5. Setup Project Filtering
  initProjectFilter();

  // 6. Setup Interactive Cursor Follower
  initCursorGlow();

  // 7. Setup Active Nav Links on Scroll
  initScrollspy();

  // 8. Setup Contact Form & Clipboard copy
  initContactInteractions();
});

/* ========================================================
   POPULATE CONTENT FROM CONFIG.JS
   ======================================================== */
function populatePortfolioContent() {
  const cfg = portfolioConfig;

  // Personal & Brand Info
  document.title = `${cfg.personal.name} | ${cfg.personal.title}`;
  
  const navBrand = document.getElementById('nav-brand-name');
  if (navBrand) navBrand.textContent = cfg.personal.brandName;

  const footerBrand = document.getElementById('footer-brand-name');
  if (footerBrand) footerBrand.textContent = cfg.personal.brandName;

  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = cfg.personal.name;

  const heroBio = document.getElementById('hero-bio');
  if (heroBio) heroBio.textContent = cfg.bio.hero;

  const codeSnippetName = document.getElementById('code-snippet-name');
  if (codeSnippetName) codeSnippetName.textContent = `'${cfg.personal.name}'`;

  const aboutName = document.getElementById('about-name');
  if (aboutName) aboutName.textContent = cfg.personal.name;

  const aboutBio = document.getElementById('about-bio-detail');
  if (aboutBio) aboutBio.textContent = cfg.bio.aboutDetailed;

  const aboutShort = document.getElementById('about-card-text');
  if (aboutShort) aboutShort.textContent = cfg.bio.aboutShort;

  const cvBtn = document.getElementById('download-cv');
  if (cvBtn && cfg.personal.cvLink) {
    cvBtn.href = cfg.personal.cvLink;
    cvBtn.target = "_blank";
    cvBtn.setAttribute("download", "Samira_Hussien_CV.pdf");
  }

  const statProjects = document.getElementById('stat-projects-count');
  if (statProjects) statProjects.textContent = `${cfg.projects.length}+`;

  // Render Social Links in Hero
  const heroSocialsContainer = document.getElementById('hero-social-links');
  if (heroSocialsContainer) {
    heroSocialsContainer.innerHTML = cfg.socials.map(social => `
      <a href="${social.url}" target="_blank" rel="noopener noreferrer" 
         class="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:border-brand-500 hover:scale-110 transition-all shadow-sm" 
         title="${social.name}">
        <i class="${social.icon} text-sm"></i>
      </a>
    `).join('');
  }

  // Render Skills
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = cfg.skills.map(skill => `
      <div class="skill-card p-4 rounded-2xl bg-white dark:bg-darkCard border border-slate-200 dark:border-darkBorder flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-md hover:border-brand-500/40 group">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-slate-50 dark:bg-slate-800/80 group-hover:scale-110 transition-transform" style="color: ${skill.color};">
          <i class="${skill.icon}"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">${skill.name}</span>
      </div>
    `).join('');
  }

  // Render Soft Skills
  const softSkillsContainer = document.getElementById('soft-skills-container');
  if (softSkillsContainer && cfg.softSkills) {
    softSkillsContainer.innerHTML = cfg.softSkills.map(skill => `
      <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20">
        ✨ ${skill}
      </span>
    `).join('');
  }

  // Render Projects
  renderProjects('all');

  // Render Timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = cfg.timeline.map(item => `
      <div class="relative pl-6 md:pl-8 group">
        <!-- Dot Indicator -->
        <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-darkBg border-4 border-brand-500 group-hover:scale-125 transition-transform"></div>
        
        <!-- Period Badge -->
        <span class="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 dark:text-brand-400 mb-1">
          ${item.period}
        </span>
        
        <!-- Role & Company -->
        <h4 class="text-lg font-bold text-slate-900 dark:text-white mt-1">${item.role}</h4>
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <p class="text-sm font-semibold text-brand-accent">${item.company}</p>
          ${item.certificateUrl ? `
            <a href="${item.certificateUrl}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:scale-105 transition-transform">
              <i class="fa-solid fa-certificate text-[11px]"></i> Verify Credential ↗
            </a>
          ` : ''}
        </div>
        
        <!-- Description -->
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">${item.description}</p>
      </div>
    `).join('');
  }

  // Render Certifications
  const certContainer = document.getElementById('certifications-container');
  if (certContainer && cfg.certifications) {
    certContainer.innerHTML = cfg.certifications.map(cert => `
      <div class="rounded-3xl bg-white dark:bg-darkCard border border-slate-200 dark:border-darkBorder p-8 shadow-sm hover:shadow-xl hover:border-brand-500/50 transition-all flex flex-col justify-between group">
        <div>
          <!-- Header with Icon & Year Badge -->
          <div class="flex items-start justify-between gap-4 mb-4">
            <div class="w-14 h-14 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              <i class="${cert.icon}" style="color: ${cert.iconColor};"></i>
            </div>
            <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              ${cert.year}
            </span>
          </div>

          <!-- Badge -->
          <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
            ${cert.badgeText}
          </span>

          <!-- Title & Issuer -->
          <h3 class="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
            ${cert.title}
          </h3>
          <p class="text-sm font-semibold text-brand-accent mt-1 mb-3">
            ${cert.issuer}
          </p>

          <!-- Description -->
          <p class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
            ${cert.description}
          </p>
        </div>

        <div>
          <!-- Skills tags -->
          <div class="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800 mb-4">
            ${cert.skills.map(s => `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400">${s}</span>`).join('')}
          </div>

          <!-- Verification Link if available -->
          ${cert.credentialUrl ? `
            <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-accent text-white text-xs font-bold shadow-md shadow-brand-500/20 hover:scale-[1.02] transition-transform">
              <span>Verify Credential</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          ` : `
            <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500">
              <i class="fa-solid fa-circle-check"></i>
              <span>Completed & Verified</span>
            </div>
          `}
        </div>
      </div>
    `).join('');
  }

  // Contact Info
  const emailElem = document.getElementById('contact-email');
  if (emailElem) {
    emailElem.textContent = cfg.personal.email;
    emailElem.href = `mailto:${cfg.personal.email}`;
  }

  const phoneElem = document.getElementById('contact-phone');
  if (phoneElem && cfg.personal.phone) {
    phoneElem.textContent = cfg.personal.phone;
    phoneElem.href = `tel:${cfg.personal.phone}`;
  }

  const locElem = document.getElementById('contact-location');
  if (locElem) locElem.textContent = cfg.personal.location;

  const contactSocials = document.getElementById('contact-social-icons');
  if (contactSocials) {
    contactSocials.innerHTML = cfg.socials.map(social => `
      <a href="${social.url}" target="_blank" rel="noopener noreferrer" 
         class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:scale-105 transition-all"
         title="${social.name}">
        <i class="${social.icon}"></i>
      </a>
    `).join('');
  }

  // Current year in footer
  const yearElem = document.getElementById('current-year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();
}

/* ========================================================
   RENDER PROJECTS WITH FILTER
   ======================================================== */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const allProjects = portfolioConfig.projects;
  const filtered = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-400">
        <i class="fa-solid fa-folder-open text-4xl mb-3"></i>
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <article class="project-card rounded-3xl bg-white dark:bg-darkCard border border-slate-200 dark:border-darkBorder overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-500/50 transition-all flex flex-col group">
      
      <!-- Project Image Preview -->
      <div class="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img src="${p.image}" alt="${p.title}" class="project-card-image w-full h-full object-cover" loading="lazy" />
        
        ${p.badge ? `
          <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/80 backdrop-blur-md text-brand-400 border border-brand-500/30">
            ${p.badge}
          </div>
        ` : ''}

        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div class="flex items-center gap-3">
            <a href="${p.liveDemo}" target="_blank" rel="noopener noreferrer" 
               class="px-4 py-2 rounded-full bg-brand-500 text-white text-xs font-bold hover:bg-brand-600 transition flex items-center gap-1.5 shadow-md">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" 
               class="px-4 py-2 rounded-full bg-slate-900/90 text-white text-xs font-bold hover:bg-black transition flex items-center gap-1.5 shadow-md">
              <i class="fa-brands fa-github"></i> Code
            </a>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div class="flex flex-wrap gap-1.5 mb-3">
            ${p.tags.map(t => `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400">${t}</span>`).join('')}
          </div>
          <h3 class="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
            ${p.title}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
            ${p.description}
          </p>
        </div>

        <!-- Links footer -->
        <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold">
          <a href="${p.liveDemo}" target="_blank" rel="noopener noreferrer" class="text-brand-500 hover:text-brand-600 dark:hover:text-brand-400 flex items-center gap-1">
            <span>View Details</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <i class="fa-brands fa-github text-base"></i>
          </a>
        </div>
      </div>

    </article>
  `).join('');
}

/* ========================================================
   PROJECT FILTER BUTTONS LOGIC
   ======================================================== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-brand-500', 'text-white', 'shadow-md', 'shadow-brand-500/25');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'border', 'border-slate-200', 'dark:border-slate-700', 'text-slate-600', 'dark:text-slate-300');
      });

      btn.classList.add('bg-brand-500', 'text-white', 'shadow-md', 'shadow-brand-500/25');
      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'border', 'border-slate-200', 'dark:border-slate-700', 'text-slate-600', 'dark:text-slate-300');

      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });
}

/* ========================================================
   DYNAMIC TYPING EFFECT
   ======================================================== */
function initTypingEffect() {
  const target = document.getElementById('typing-text');
  if (!target) return;

  const words = portfolioConfig.typingTitles || ["Web Experiences", "Creative Interfaces", "Modern Applications"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const pauseTime = 1800;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ========================================================
   DARK / LIGHT THEME TOGGLE
   ======================================================== */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    if (savedTheme === 'light') {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  } else {
    html.classList.add('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
}

/* ========================================================
   MOBILE NAVIGATION MENU
   ======================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      if (menuIcon) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      }
    } else {
      mobileMenu.classList.add('hidden');
      if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    });
  });
}

/* ========================================================
   DESKTOP CURSOR GLOW EFFECT
   ======================================================== */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow || window.innerWidth < 768) return;

  window.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

/* ========================================================
   SCROLLSPY ACTIVE NAV LINKS
   ======================================================== */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-brand-500', 'dark:text-brand-400', 'font-bold');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-brand-500', 'dark:text-brand-400', 'font-bold');
      }
    });
  });
}

/* ========================================================
   CONTACT FORM & CLIPBOARD COPY
   ======================================================== */
function initContactInteractions() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = portfolioConfig.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-check text-emerald-500"></i>';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 2000);
      });
    });
  }

  const contactForm = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        if (feedback) {
          feedback.classList.remove('hidden', 'bg-rose-500/10', 'text-rose-500');
          feedback.classList.add('bg-emerald-500/10', 'text-emerald-500');
          feedback.textContent = '🎉 Thank you! Your message has been received successfully.';

          setTimeout(() => {
            feedback.classList.add('hidden');
          }, 5000);
        }
      }, 1000);
    });
  }
}
