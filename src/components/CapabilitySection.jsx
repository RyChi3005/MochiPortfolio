import { Award, Languages, Menu } from "lucide-react";

export function CapabilitySection({ capability, skills, strengths }) {
  return (
    <section className="sectionShell capabilitySection" aria-labelledby="capability-heading">
      <div className="sectionHeader">
        <p className="eyebrow">{capability.eyebrow}</p>
        <h2 id="capability-heading">{capability.heading}</h2>
      </div>

      <div className="capabilityGrid">
        <article className="capabilityCard">
          <Award aria-hidden="true" />
          <h3>{capability.strengthsHeading}</h3>
          <ul>
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="capabilityCard highlight">
          <Menu aria-hidden="true" />
          <h3>{capability.valueHeading}</h3>
          <p>{capability.value}</p>
        </article>

        <article className="capabilityCard">
          <Languages aria-hidden="true" />
          <h3>{capability.skillsHeading}</h3>
          <ul>
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
