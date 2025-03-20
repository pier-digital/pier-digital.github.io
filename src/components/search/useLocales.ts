import type { DocSearchProps } from '@docsearch/react';
import { useMemo } from 'react';
import { languages, type LangType } from '@/typings/config';

export const algoliaLocalesConfig: Record<
  LangType,
  Omit<DocSearchProps, 'appId' | 'apiKey' | 'indexName'>
> = {
  'pt-BR': {
    placeholder: 'Pesquise o que você precisa',
    translations: {
      button: {
        buttonText: 'Pesquisar',
        buttonAriaLabel: 'Pesquisar',
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Limpar a pesquisa',
          resetButtonAriaLabel: 'Limpar a pesquisa',
          cancelButtonText: 'Cancelar',
          cancelButtonAriaLabel: 'Cancelar',
        },
        startScreen: {
          recentSearchesTitle: 'Histórico de buscas',
          noRecentSearchesText: 'Nenhum histórico de buscas',
          saveRecentSearchButtonTitle: 'Salvar no histórico de buscas',
          removeRecentSearchButtonTitle: 'Remover do histórico de buscas',
          favoriteSearchesTitle: 'Favoritos',
          removeFavoriteSearchButtonTitle: 'Remover dos favoritos',
        },
        errorScreen: {
          titleText: 'Não foi possível obter resultados',
          helpText: 'Você pode precisar verificar sua conexão com a internet',
        },
        footer: {
          selectText: 'Selecionar',
          navigateText: 'Navegar',
          closeText: 'Fechar',
          searchByText: 'Provedor de busca',
        },
        noResultsScreen: {
          noResultsText: 'Não foi possível encontrar resultados',
          suggestedQueryText: 'Você pode tentar buscar',
          reportMissingResultsText:
            'Você acha que essa busca deveria ter resultados?',
          reportMissingResultsLinkText: 'Clique para enviar um feedback',
        },
      },
    },
  },
};

export function useLocales(local: LangType = languages[0]) {
  const config = useMemo(() => {
    return algoliaLocalesConfig[local];
  }, [local]);

  return config;
}
