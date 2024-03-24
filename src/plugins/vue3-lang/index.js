import Lang from 'lang.js';

export default {
  install: (app, options) => {
    const messages = options.messages || {};
    const locale = options.locale || 'en';
    const fallback = options.fallback || 'en';

    const lang = new Lang({
      messages,
      locale,
      fallback
    });

    /** Get translation from the key */
    const translate = (key, options) => {
      return lang.trans(key, options);
    };

    /** Get the plural or singular form of the message */
    const pluralTranslate = (key, plural, options) => {
      return lang.choice(key, plural, options);
    };

    /** Is the key defined in the message source */
    const has = (key) => {
      return lang.has(key);
    };

    app.config.globalProperties.$trans = translate;
    app.config.globalProperties.$t = translate;

    app.config.globalProperties.$choice = pluralTranslate;
    app.config.globalProperties.$tc = pluralTranslate;

    app.config.globalProperties.$has = has;

    app.provide('$trans', translate);
    app.provide('$t', translate);

    app.provide('$choice', pluralTranslate);
    app.provide('$tc', pluralTranslate);

    app.provide('$has', has);
  }
};
