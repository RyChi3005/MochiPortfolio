export function ProfileSection({ profile }) {
  return (
    <section className="mainSection" aria-labelledby="about-heading">
      <p className="eyebrow">{profile.eyebrow}</p>
      <h2 className="mainHeading" id="about-heading">{profile.heading}</h2>
      <p className="aboutText">{profile.body}</p>
    </section>
  );
}
