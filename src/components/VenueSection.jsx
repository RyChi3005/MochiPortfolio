export function VenueSection({ openMaps, venueContext, venuesIntro }) {
  return (
    <section className="venueBand" id="venues" aria-labelledby="venues-heading">
      <div className="venueInner">
        <div className="venueSectionHeader">
          <p className="eyebrow">{venuesIntro.eyebrow}</p>
          <h2 className="mainHeading" id="venues-heading">{venuesIntro.heading}</h2>
          <p className="venueSectionNote">{venuesIntro.note}</p>
        </div>

        <div className="venueGrid">
          {venueContext.map((venue) => {
            return (
              <article className="venueCard" key={venue.title}>
                <div className="venueArt">
                  {venue.logoSrc && (
                    <img className="venueLogo" src={venue.logoSrc} alt={venue.logoAlt} />
                  )}
                </div>
                <div className="venueBody">
                  <p className="venueVenueName">{venue.venue}</p>
                  <h3 className="venueTitle">{venue.title}</h3>
                  <p className="venueNote">{venue.note}</p>
                  <a
                    className="venueLink"
                    href={venue.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {openMaps} {venue.source}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
