/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'pt-BR',
  site: 'https://pier-digital.github.io',
  avatar: '/avatar.png',
  title: 'Building Pier',
  description:
    'Veja como estamos construindo o futuro dos seguros no Brasil :).',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Building Pier',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/pier-digital/pier-digital.github.io',
    },
  ],
});
