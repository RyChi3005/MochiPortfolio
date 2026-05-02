import { useEffect } from "react";

export function usePageMetadata(language, metadata) {
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = metadata.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.metaDescription);
  }, [language, metadata.metaDescription, metadata.metaTitle]);
}
