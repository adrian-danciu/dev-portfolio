import * as React from 'react';
import {
  Badge,
  Button,
  Card,
  Separator,
  Sheet,
  Switch,
  TextArea,
  TextField,
  ThemeProvider,
  Toast,
  ToggleGroup,
  type AccentName,
  type ThemeMode,
  type ThemeName,
} from '@adrian-danciu/ink-ui';
import { accents } from '@adrian-danciu/ink-ui-tokens';
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Code2,
  Copy,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Package,
  Phone,
  Sun,
  Terminal,
} from 'lucide-react';
import {
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  PROFILE_DATA,
  PROJECTS,
  SKILL_GROUPS,
} from './data/portfolioData';

const ACCENT_OPTIONS: AccentName[] = ['lime', 'turquoise', 'purple', 'yellow', 'red', 'pink'];

export function App() {
  const [theme, setTheme] = React.useState<ThemeName>('electric');
  const [mode, setMode] = React.useState<ThemeMode>('dark');
  const [accent, setAccent] = React.useState<AccentName>('lime');

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [copiedCmd, setCopiedCmd] = React.useState(false);

  // Minimal Contact Form State
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  // Toast State
  const [toast, setToast] = React.useState<{
    open: boolean;
    title: string;
    description: string;
  }>({ open: false, title: '', description: '' });

  const notify = (title: string, description: string) => {
    setToast({ open: true, title, description });
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const copyInstallCmd = () => {
    navigator.clipboard.writeText('bun add @adrian-danciu/ink-ui');
    setCopiedCmd(true);
    notify('Copied to clipboard', 'bun add @adrian-danciu/ink-ui');
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const copyText = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    notify(`${label} copied`, value);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${name || 'Visitor'} (${email || 'Not provided'})`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
    notify('Opening email client', `Pre-addressed to ${PROFILE_DATA.email}`);
  };

  return (
    <ThemeProvider theme={theme} mode={mode} accent={accent} className="portfolio-root">
      {/* Subtle Ambient Glow */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-glow glow-1" />
        <div className="ambient-glow glow-2" />
      </div>

      {/* Minimal Header */}
      <header className="site-header">
        <div className="container header-bar">
          <a href="#top" className="brand-link">
            <span className="brand-mark">AD</span>
            <div className="brand-text">
              <strong>{PROFILE_DATA.name}</strong>
              <span>{PROFILE_DATA.role}</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <button type="button" onClick={() => scrollTo('experience')}>
              Experience
            </button>
            <button type="button" onClick={() => scrollTo('projects')}>
              Projects
            </button>
            <button type="button" onClick={() => scrollTo('skills')}>
              Skills &amp; Education
            </button>
            <button type="button" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-toggle-btn"
              onClick={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}
              title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
              aria-label="Toggle color mode"
            >
              {mode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href={PROFILE_DATA.cvUrl}
              download="Adrian_Danciu_CV.pdf"
              className="link-reset hide-mobile"
            >
              <Button size="sm" accent={accent}>
                <Download size={14} />
                <span style={{ marginLeft: '6px' }}>Resume PDF</span>
              </Button>
            </a>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Sheet
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
        side="right"
        title="Navigation"
        accent={accent}
      >
        <div className="mobile-nav-list">
          <Button variant="secondary" onClick={() => scrollTo('experience')}>
            Experience
          </Button>
          <Button variant="secondary" onClick={() => scrollTo('projects')}>
            Projects
          </Button>
          <Button variant="secondary" onClick={() => scrollTo('skills')}>
            Skills &amp; Education
          </Button>
          <Button accent={accent} onClick={() => scrollTo('contact')}>
            Contact
          </Button>
          <Separator />
          <a href={PROFILE_DATA.cvUrl} download="Adrian_Danciu_CV.pdf" className="link-reset">
            <Button variant="secondary">Download CV (PDF)</Button>
          </a>
        </div>
      </Sheet>

      <main id="top" className="container main-content">
        {/* ================= HERO ================= */}
        <section className="hero-section">
          <div className="hero-meta-row">
            <Badge tone="accent" accent={accent}>
              Software Engineer
            </Badge>
            <span className="location-tag">
              <MapPin size={14} /> {PROFILE_DATA.location}
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I’m {PROFILE_DATA.name}.<br />
            <span className="hero-title-muted">
              I build fast, accessible web &amp; mobile software.
            </span>
          </h1>

          <p className="hero-description">{PROFILE_DATA.summary}</p>

          <div className="hero-actions">
            <Button size="lg" accent={accent} onClick={() => scrollTo('projects')}>
              <span>View Projects</span>
              <ArrowUpRight size={16} style={{ marginLeft: '6px' }} />
            </Button>

            <a
              href={PROFILE_DATA.cvUrl}
              download="Adrian_Danciu_CV.pdf"
              className="link-reset"
            >
              <Button size="lg" variant="secondary">
                <Download size={15} />
                <span style={{ marginLeft: '8px' }}>Download CV</span>
              </Button>
            </a>
          </div>

          <div className="hero-quick-links">
            <a href={PROFILE_DATA.links.github} target="_blank" rel="noreferrer">
              <Code2 size={15} />
              <span>GitHub</span>
              <ExternalLink size={12} />
            </a>
            <a href={PROFILE_DATA.links.linkedin} target="_blank" rel="noreferrer">
              <Briefcase size={15} />
              <span>LinkedIn</span>
              <ExternalLink size={12} />
            </a>
            <a href={PROFILE_DATA.links.inkUiNpm} target="_blank" rel="noreferrer">
              <Package size={15} />
              <span>@adrian-danciu/ink-ui</span>
              <ExternalLink size={12} />
            </a>
            <button
              type="button"
              className="text-link-btn"
              onClick={() => copyText(PROFILE_DATA.email, 'Email')}
            >
              <Mail size={15} />
              <span>{PROFILE_DATA.email}</span>
              <Copy size={12} />
            </button>
          </div>
        </section>

        <Separator />

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section-block">
          <div className="section-heading">
            <span className="section-label">01 / Career</span>
            <h2>Experience</h2>
          </div>

          <div className="experience-stack">
            {EXPERIENCE.map((item) => (
              <Card
                key={item.id}
                eyebrow={`${item.period} · ${item.location}${item.client ? ` · Client: ${item.client}` : ''}`}
                title={`${item.company} — ${item.role}`}
                accent={item.accent}
              >
                {item.subRoles ? (
                  <div className="subroles-stack">
                    {item.subRoles.map((sub) => (
                      <div key={sub.title} className="subrole-block">
                        <div className="subrole-title-row">
                          <strong>{sub.title}</strong>
                          <span>{sub.period}</span>
                        </div>
                        <ul className="clean-list">
                          {sub.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="clean-list">
                    {item.bullets?.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section-block">
          <div className="section-heading">
            <span className="section-label">02 / Selected Work</span>
            <h2>Projects</h2>
          </div>

          <div className="projects-stack">
            {PROJECTS.map((project) => (
              <Card
                key={project.id}
                eyebrow={project.subtitle}
                title={project.title}
                description={project.description}
                accent={project.accent}
              >
                <div className="project-card-footer">
                  <div className="tag-row">
                    {project.tech.map((t) => (
                      <Badge key={t} tone="neutral">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* Clean Interactive Theme Preview inside the Ink UI Project Card */}
                  {project.id === 'ink-ui' && (
                    <div className="ink-live-bar">
                      <div className="ink-live-top">
                        <span className="ink-live-label">
                          This website is styled with <code>@adrian-danciu/ink-ui</code> — try switching the live theme:
                        </span>
                        <button
                          type="button"
                          className="cmd-copy-btn"
                          onClick={copyInstallCmd}
                        >
                          <Terminal size={13} />
                          <code>{project.installCmd}</code>
                          {copiedCmd ? <Check size={13} /> : <Copy size={13} />}
                        </button>
                      </div>

                      <div className="ink-live-controls">
                        <ToggleGroup
                          label="Theme"
                          accent={accent}
                          value={theme}
                          onValueChange={(v) => setTheme(v as ThemeName)}
                          options={[
                            { label: 'Electric', value: 'electric' },
                            { label: 'Paper', value: 'paper' },
                            { label: 'Poster', value: 'poster' },
                          ]}
                        />

                        <Switch
                          label={mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                          checked={mode === 'dark'}
                          onCheckedChange={(checked) => setMode(checked ? 'dark' : 'light')}
                          accent={accent}
                        />

                        <div className="accent-picker-group">
                          <span className="picker-caption">Accent</span>
                          <div className="accent-dots-row">
                            {ACCENT_OPTIONS.map((acc) => (
                              <button
                                key={acc}
                                type="button"
                                className={`accent-dot ${accent === acc ? 'active' : ''}`}
                                style={{ backgroundColor: accents[acc].base }}
                                onClick={() => setAccent(acc)}
                                title={acc}
                                aria-label={`Select ${acc} accent`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="link-reset"
                      >
                        <Button size="sm" variant="secondary">
                          <span>{link.label}</span>
                          <ExternalLink size={13} style={{ marginLeft: '6px' }} />
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* ================= SKILLS & EDUCATION ================= */}
        <section id="skills" className="section-block">
          <div className="section-heading">
            <span className="section-label">03 / Capabilities &amp; Background</span>
            <h2>Skills &amp; Education</h2>
          </div>

          <div className="two-col-grid">
            <Card
              eyebrow="TECHNICAL STACK"
              title="Skills & Practices"
              accent={accent}
            >
              <div className="skills-list">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.title} className="skill-group-row">
                    <span className="skill-group-name">{group.title}</span>
                    <div className="tag-row">
                      {group.items.map((skill) => (
                        <Badge key={skill} tone="neutral">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="side-stack">
              <Card
                eyebrow="ACADEMIC BACKGROUND"
                title="Education"
                accent="turquoise"
              >
                <div className="edu-stack">
                  {EDUCATION.map((edu) => (
                    <div key={edu.degree} className="edu-item">
                      <strong>{edu.degree}</strong>
                      <div className="edu-meta">
                        <GraduationCap size={14} />
                        <span>
                          {edu.institution} · {edu.period}
                        </span>
                      </div>
                      <p>{edu.note}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card
                eyebrow="COMMUNICATION"
                title="Languages"
                accent="purple"
              >
                <div className="lang-row">
                  {LANGUAGES.map((l) => (
                    <div key={l.language} className="lang-item">
                      <strong>{l.language}</strong>
                      <span>{l.level}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section-block">
          <div className="section-heading">
            <span className="section-label">04 / Get in Touch</span>
            <h2>Contact</h2>
          </div>

          <div className="two-col-grid">
            <Card
              eyebrow="DIRECT MESSAGE"
              title="Send an Email"
              description="Have a role or project in mind? Send a note below or reach out directly via email or LinkedIn."
              accent={accent}
            >
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <TextField
                  label="Name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <TextField
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <TextArea
                  label="Message"
                  placeholder="How can we work together?"
                  value={message}
                  onChange={(e) => setMessage(e.currentTarget.value)}
                />
                <div>
                  <Button type="submit" accent={accent}>
                    <Mail size={15} />
                    <span style={{ marginLeft: '8px' }}>Send Message</span>
                  </Button>
                </div>
              </form>
            </Card>

            <Card
              eyebrow="DETAILS"
              title="Direct Channels"
              accent="purple"
            >
              <div className="direct-channels">
                <button
                  type="button"
                  className="channel-row"
                  onClick={() => copyText(PROFILE_DATA.email, 'Email')}
                >
                  <Mail size={16} />
                  <div>
                    <span>Email</span>
                    <strong>{PROFILE_DATA.email}</strong>
                  </div>
                  <Copy size={14} />
                </button>

                <button
                  type="button"
                  className="channel-row"
                  onClick={() => copyText(PROFILE_DATA.phone, 'Phone')}
                >
                  <Phone size={16} />
                  <div>
                    <span>Phone</span>
                    <strong>{PROFILE_DATA.phone}</strong>
                  </div>
                  <Copy size={14} />
                </button>

                <a
                  href={PROFILE_DATA.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="channel-row link-reset"
                >
                  <Briefcase size={16} />
                  <div>
                    <span>LinkedIn</span>
                    <strong>linkedin.com/in/adrian-danciu-165095171</strong>
                  </div>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={PROFILE_DATA.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="channel-row link-reset"
                >
                  <Code2 size={16} />
                  <div>
                    <span>GitHub</span>
                    <strong>github.com/adrian-danciu</strong>
                  </div>
                  <ExternalLink size={14} />
                </a>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <span>
            © {new Date().getFullYear()} {PROFILE_DATA.name} · Built with React, Bun &amp;{' '}
            <a href={PROFILE_DATA.links.inkUiNpm} target="_blank" rel="noreferrer">
              @adrian-danciu/ink-ui
            </a>
          </span>
          <a href="#top" className="back-top">
            Back to top ↑
          </a>
        </div>
      </footer>

      <div className="toast-anchor">
        <Toast
          open={toast.open}
          title={toast.title}
          description={toast.description}
          tone="success"
          onDismiss={() => setToast((prev) => ({ ...prev, open: false }))}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
