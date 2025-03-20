import i18next from 'i18next';
import ptBR from './lang/pt-br';
import slateConfig from '~@/slate.config';

await i18next.init({
  lng: slateConfig.lang,
  fallbackLng: 'pt-BR',
  resources: {
    'pt-BR': {
      translation: ptBR,
    },
  },
});

export default i18next;
