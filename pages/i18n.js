import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
            "welcome": "welcomeee"
        }
      },
      tr: {
        translation: {
            "welcome": "xos gelin"
        }
      }
    },
    lng: "en", 
    // fallbackLng: "en",

    // interpolation: {
    //   escapeValue: false 
    // }
  });