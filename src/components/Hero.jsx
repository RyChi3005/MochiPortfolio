import { Download, Phone, Sparkles } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";

export function Hero({ language, languages, onLanguageChange, onThemeToggle, t, theme }) {
  return (
    <>
      <nav className="siteNav" aria-label={t.navLabel}>
        <div className="navInner">
          <a className="brand" href="#top" aria-label={t.homeLabel}>
            <Sparkles aria-hidden="true" />
            <span>Mochi F&B</span>
          </a>
          <div className="navTools">
            <div className="navLinks">
              <a href="#experience">{t.nav.experience}</a>
              <a href="#venues">{t.nav.venues}</a>
              <a href="#contact">{t.nav.contact}</a>
            </div>
            <ThemeToggle labels={t.themeToggle} onToggle={onThemeToggle} theme={theme} />
            <LanguageToggle
              language={language}
              label={t.toggleLabel}
              languages={languages}
              onLanguageChange={onLanguageChange}
            />
          </div>
        </div>
      </nav>

      <header className="cvHeader" id="top">
        <div className="cvHeaderInner">
          <h1 className="cvName notranslate" translate="no">
            Nguyễn Thị Huỳnh Chăm
          </h1>
          <p className="cvTitle">{t.hero.eyebrow}</p>
          <hr className="cvDivider" />
          <p className="cvSummary">{t.hero.lede}</p>
          <div className="cvActions" aria-label={t.hero.actionsLabel}>
            <a className="btn primary" href="tel:+84816830852">
              <Phone aria-hidden="true" />
              {t.hero.call}
            </a>
            <a
              className="btn outline"
              href="/assets/nguyen-thi-huynh-cham-cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download aria-hidden="true" />
              {t.hero.cv}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
