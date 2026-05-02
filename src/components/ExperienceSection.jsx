export function ExperienceSection({ experience, intro }) {
  return (
    <section className="mainSection" id="experience" aria-labelledby="exp-heading">
      <p className="eyebrow">{intro.eyebrow}</p>
      <h2 className="mainHeading" id="exp-heading">{intro.heading}</h2>

      <div className="timeline">
        {experience.map((job) => (
          <article className="timelineItem" key={`${job.place}-${job.role}`}>
            <div className="timelineTrack" aria-hidden="true">
              <div className="timelineDot" />
            </div>
            <div className="timelineBody">
              <h3 className="jobRole">{job.role}</h3>
              <div className="jobMeta">
                <span className="jobPlace">{job.place}</span>
                <span className="jobPeriod">{job.period}</span>
              </div>
              <p className="jobSummary">{job.summary}</p>
              <div className="jobTags">
                {job.proof.split(", ").map((tag) => (
                  <span className="jobTag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
