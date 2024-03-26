import Lang from 'lang.js';

function createLangInstance(options) {
  const { messages = {}, locale = 'en', fallback = 'en' } = options;

  return new Lang({
    messages,
    locale,
    fallback
  });
}

export default {
  install: (app, options = {}) => {

    const lang = createLangInstance(options);

    /** Get the plural or singular form of the message */
    const translate = (key, plural, options, locale) => {
      // If the second argument is an object, assume it's the options object
      if (typeof plural === 'object') {
        return lang.trans(key, plural);
      }

      return lang.choice(key, plural, options, locale);
    };

    app.config.globalProperties.$trans = translate;
    app.config.globalProperties.$t = translate;

    app.provide('$trans', translate);
    app.provide('$t', translate);
  }
};
