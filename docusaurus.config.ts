import {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Inner Mongolian Dialect',
  tagline: 'Learn to read and speak the beautiful language of Inner Mongolia',
  favicon: 'img/favicon.ico',

  url: 'https://studymongolian.net',
  baseUrl: '/',

  organizationName: 'studymongolian',
  projectName: 'studymongolian.net',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Study Mongolian Logo',
        src: 'img/heading-logo.svg',
      },
      items: [
        {
          to: '/background',
          label: 'Background',
          position: 'left',
          items: [
            {
              to: '/background',
              label: 'Background',
            },
            {
              to: '/background/mongolian-culture',
              label: 'Mongolian Culture',
            },
            {
              to: '/background/history',
              label: 'History',
            },
          ],
        },
        {
          to: '/lessons',
          label: 'Lessons',
          position: 'left',
          items: [
            {
              to: '/lessons/basics/survival-phrases',
              label: 'Survival Phrases',
            },
            {
              to: '/lessons/basics/pronunciation',
              label: 'Pronunciation',
            },
            {
              to: '/lessons/basics/writing',
              label: 'Writing',
            },
            {
              to: '/lessons',
              label: 'Lessons',
            },
          ],
        },
        {
          to: '/resources',
          label: 'Resources',
          position: 'left',
          items: [
            {
              to: '/apps',
              label: 'Apps',
            },
            {
              to: '/resources/anki-flashcards',
              label: 'Anki Flashcards',
            },
            {
              to: '/resources/books',
              label: 'Books',
            },
            {
              to: '/resources/downloads',
              label: 'Downloads',
            },
            {
              to: '/resources/grammar',
              label: 'Grammar Reference Manual',
            },
            {
              to: '/links',
              label: 'Links',
            },
            {
              to: '/tutoring',
              label: 'Tutoring',
            },
          ],
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
          items: [
            {
              to: '/about',
              label: 'About',
            },
            {
              to: '/permission-to-copy',
              label: 'Permission to Copy',
            },
            {
              to: '/technical',
              label: 'Technical',
            },
            {
              to: '/contact',
              label: 'Contact',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;