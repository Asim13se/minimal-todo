import i18nResources from '../i18nResources';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof i18nResources['en'];
  }
}
