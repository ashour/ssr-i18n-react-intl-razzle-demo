export const defaultLang = "en";

export const supportedLangs = {
  en: "English",
  ar: "Arabic (عربي)",
};

export function determineUserLang(acceptedLangs) {
  const acceptedLangCodes = acceptedLangs.map(stripCountry);

  const supportedLangCodes = Object.keys(supportedLangs);

  const matchingLangCode = acceptedLangCodes.find(code =>
    supportedLangCodes.includes(code),
  );

  return matchingLangCode || defaultLang;
}

function stripCountry(lang) {
  return lang
    .trim()
    .replace("_", "-")
    .split("-")[0];
}
