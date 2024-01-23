/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'
import { useTranslation } from 'react-i18next'
export default function Document() {
  const { i18n } = useTranslation()
  return (
    <Html lang="en">
      <Head />
      <body style={{fontFamily: i18n.language == 'ru' ? "Montserrat" : null}}>
        <Main />
        <NextScript />
          
      </body>
    </Html>
  )
}
