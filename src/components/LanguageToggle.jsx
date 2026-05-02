export function LanguageToggle({ language, label, languages, onLanguageChange }) {
  return (
    <div className="languageToggle" role="group" aria-label={label}>
      {languages.map((option) => (
        <button
          type="button"
          key={option}
          className={language === option ? "active" : ""}
          aria-pressed={language === option}
          onClick={() => onLanguageChange(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
