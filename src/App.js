import "./App.css";
import Main from "./view/layout/Main";
import Navigation from "./view/layout/Navigation";
import Footer from "./view/layout/Footer";
import Router from "./router/Router";
import { I18nProvider, LOCALES } from "./i18n";
import { useEffect, useState } from "react";
import { useCookies, CookiesProvider } from "react-cookie";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";

function App() {
  const [cookies, setCookie] = useCookies(["lang"]);

  const [htmlDir, setHtmlDir] = useState(
    cookies.lang === "en-us" || !cookies.lang ? "ltr" : "rtl"
  );

  useEffect(() => {
    // setCookie("lang", LOCALES.ENGLISH, { path: "/" });
  }, []);

  const changeLanguage = () => {
    if (cookies.lang === "en-us") {
      setCookie("lang", LOCALES.ARABIC, { path: "/" });
      setHtmlDir("rtl");
    } else {
      setCookie("lang", LOCALES.ENGLISH, { path: "/" });
      setHtmlDir("ltr");
    }
  };
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 });

  return (
    <>
      <Helmet>
        <html lang="ar" dir={htmlDir} />
      </Helmet>
      <CookiesProvider>
        <I18nProvider locale={cookies.lang}>
          <Navigation
            section1InView={section1InView}
            currentLang={cookies.lang}
            handleChageLanguage={() => changeLanguage()}
          />
          <Main>
            <Router section1Ref={section1Ref} />
          </Main>
          <Footer />
        </I18nProvider>
      </CookiesProvider>
    </>
  );
}

export default App;
