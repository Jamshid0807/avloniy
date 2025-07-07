// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uz from "./locate/uz.json";
import ru from "./locate/ru.json";

const resources = {
  uz: { translation: uz },
  ru: { translation: ru },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // MUHIM: React bilan bog‘laydi
  .init({
    resources,
    fallbackLng: "uz",
    lng: localStorage.getItem("i18nextLng") || "uz",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
