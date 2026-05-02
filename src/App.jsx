import { useEffect, useState } from "react";
import { ContactSection } from "./components/ContactSection.jsx";
import { CvSidebar } from "./components/CvSidebar.jsx";
import { ExperienceSection } from "./components/ExperienceSection.jsx";
import { Hero } from "./components/Hero.jsx";
import { ProfileSection } from "./components/ProfileSection.jsx";
import { VenueSection } from "./components/VenueSection.jsx";
import { availableLanguages, portfolioContent } from "./data/portfolioContent.js";
import { usePageMetadata } from "./hooks/usePageMetadata.js";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [language, setLanguage] = useState("vi");
  const [theme, setTheme] = useState(getInitialTheme);
  const t = portfolioContent[language];

  usePageMetadata(language, t);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div lang={language}>
      <Hero
        language={language}
        languages={availableLanguages}
        onLanguageChange={setLanguage}
        onThemeToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        t={t}
        theme={theme}
      />

      <div className="cvWrap">
        <div className="cvCard">
          <CvSidebar t={t} />
          <main className="cvMain">
            <ProfileSection profile={t.profile} />
            <ExperienceSection experience={t.experience} intro={t.experienceIntro} />
          </main>
        </div>
      </div>

      <VenueSection
        openMaps={t.openMaps}
        venueContext={t.venueContext}
        venuesIntro={t.venuesIntro}
      />
      <ContactSection contact={t.contact} />
    </div>
  );
}

export default App;
