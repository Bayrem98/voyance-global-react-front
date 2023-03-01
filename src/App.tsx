import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Actualite from "./components/pages/Actualite";
import Astrologie from "./components/pages/Astrologie";
import CultureGeneral from "./components/pages/CultureGeneral";
import Numerologie from "./components/pages/Numerologie";
import Tarologie from "./components/pages/Tarologie";
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";
import { IntlProvider } from "react-intl";
import Formation from "./components/pages/Formation";
import Biblo from "./components/pages/Biblo";
import Pquiz from "./components/pages/Pquiz";
import Forma from "./components/pages/Forma";
import Admin1 from "./components/admin/Admin1";
import UsersBiblo from "./components/admin/UsersBiblo";
import UsersQuiz from "./components/admin/UsersQuiz";
import SupAdmin from "./components/admin/SupAdmin";

interface I18n {
  en: Record<string, string>;
  fr: Record<string, string>;
}

let allMessages: I18n = { en, fr };
const userLang: string = navigator.language.slice(0, 2);
// @ts-ignore
let messages: Record<string, string> = allMessages[userLang];

function App() {
  const [language, setLanguage] = useState<string>("fr");

  const lang = (payload: string) => {
    setLanguage(payload);
    // @ts-ignore
    messages = allMessages[payload];
  };

  return (
    <IntlProvider messages={messages} locale={language} defaultLocale="en">
      <div>
        <Navbar lang={lang} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/astrologie" element={<Astrologie />} />
          <Route path="/numerologie" element={<Numerologie />} />
          <Route path="/tarologie" element={<Tarologie />} />
          <Route path="/cult" element={<CultureGeneral />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/biblo" element={<Biblo />} />
          <Route path="/pquiz" element={<Pquiz />} />
          <Route path="/forma" element={<Forma />} />
          <Route path="/admin1" element={<Admin1 />} />
          <Route path="/usersbiblo" element={<UsersBiblo />} />
          <Route path="/usersquiz" element={<UsersQuiz />} />
          <Route path="/supadmin" element={<SupAdmin />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
