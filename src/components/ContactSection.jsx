import { Mail, MapPin, Phone } from "lucide-react";
import { contactMapUrl } from "../data/portfolioContent.js";

export function ContactSection({ contact }) {
  return (
    <section className="contactBand" id="contact" aria-labelledby="contact-heading">
      <div className="contactInner">
        <div>
          <p className="contactEyebrow">{contact.eyebrow}</p>
          <h2 className="contactHeading" id="contact-heading">{contact.heading}</h2>
          <p className="contactBody">{contact.body}</p>
        </div>

        <div className="contactLinks" aria-label={contact.aria}>
          <a className="contactLink" href={contactMapUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" />
            Quận 7, TP.HCM
          </a>
          <a className="contactLink" href="mailto:nguyencham870@gmail.com">
            <Mail aria-hidden="true" />
            nguyencham870@gmail.com
          </a>
          <a className="contactLink" href="tel:+84816830852">
            <Phone aria-hidden="true" />
            (+84) 816 830 852
          </a>
        </div>
      </div>
    </section>
  );
}
