import { Mail, MapPin, Phone } from "lucide-react";
import { contactMapUrl } from "../data/portfolioContent.js";

export function CvSidebar({ t }) {
  return (
    <aside className="cvSidebar" aria-label="Profile sidebar">
      <div className="sideSection portraitFrame">
        <img
          className="portraitImg"
          src="/assets/cham-portrait.jpg"
          alt={t.hero.alt}
        />
        <p className="portraitCaption">{t.hero.caption}</p>
      </div>

      <div className="sideSection">
        <h2 className="sideHeading">{t.contact.eyebrow}</h2>
        <ul className="sideContactList" aria-label={t.contact.aria}>
          <li>
            <MapPin aria-hidden="true" />
            <a href={contactMapUrl} target="_blank" rel="noreferrer">
              Quận 7, TP.HCM
            </a>
          </li>
          <li>
            <Mail aria-hidden="true" />
            <a href="mailto:nguyencham870@gmail.com">nguyencham870@gmail.com</a>
          </li>
          <li>
            <Phone aria-hidden="true" />
            <a href="tel:+84816830852">(+84) 816 830 852</a>
          </li>
        </ul>
      </div>

      <div className="sideSection">
        <h2 className="sideHeading">{t.capability.skillsHeading}</h2>
        <div className="skillsPills">
          {t.skills.map((skill) => (
            <span className="pill" key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="sideSection">
        <h2 className="sideHeading">{t.capability.strengthsHeading}</h2>
        <ul className="strengthsList">
          {t.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="sideSection">
        <h2 className="sideHeading">{t.languagesHeading}</h2>
        <ul className="langList">
          {t.languages.map((lang) => (
            <li className="langItem" key={lang.name}>
              <span className="langName">{lang.name}</span>
              <span className="langLevel">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
