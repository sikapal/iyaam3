
import browserLang from 'browser-lang';
import { useEffect, useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';

const supportedLanguages = ["en","fr","id","ln","cs","de","ru","so","da","hr","af","ar","zh","ja","es"];

export default function App() {
  const defaultLocale = browserLang({
    languages: supportedLanguages,
    fallback: "en"
  });

  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const url = `https://api.i18nexus.com/project_resources/translations/${locale}/default.json?api_key=${process.env.I18NEXUS_API_KEY}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMessages(data);
      });
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="App">
        <p>
          <FormattedMessage id="welcome_msg" />
        </p>
      </div>
    </IntlProvider>
  );
}
      