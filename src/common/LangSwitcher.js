import React from "react";
import { useIntl } from "react-intl";

import { supportedLangs } from "./i18n";

export default function LangSwitcher() {
  const { locale: lang } = useIntl();

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">{supportedLangs[lang]}</a>

      <div className="navbar-dropdown is-right">
        {Object.keys(supportedLangs).map(code => (
          // We want absolute URLs here, e.g. /en, so that our app
          // will reload and switch to the selected language. So we
          // use <a> instead of React Router's <Link>, since the
          // latter will always prefix its URLs with the basename
          // (the current language).
          <a
            key={code}
            href={`/${code}`}
            className={`navbar-item ${code === lang ? "is-active" : ""}`}
          >
            {supportedLangs[code]}
          </a>
        ))}
      </div>
    </div>
  );
}
