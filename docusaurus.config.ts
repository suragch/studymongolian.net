import {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Study Mongolian',
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
      title: 'Study Mongolian',
      logo: {
        alt: 'Study Mongolian Logo',
        src: 'img/heading-logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
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
              to: '/lessons/basics',
              label: 'Basics',
            },
            {
              to: '/lessons/lesson-1',
              label: 'Lesson 1',
            },
            {
              to: '/lessons/lesson-2',
              label: 'Lesson 2',
            },
            {
              to: '/lessons/lesson-3',
              label: 'Lesson 3',
            },
            {
              to: '/lessons/lesson-4',
              label: 'Lesson 4',
            },
            {
              to: '/lessons/lesson-5',
              label: 'Lesson 5',
            },
            {
              to: '/lessons/lesson-6',
              label: 'Lesson 6',
            },
            {
              to: '/lessons/lesson-7',
              label: 'Lesson 7',
            },
            {
              to: '/lessons/lesson-8',
              label: 'Lesson 8',
            },
            {
              to: '/lessons/lesson-9',
              label: 'Lesson 9',
            },
            {
              to: '/lessons/lesson-10',
              label: 'Lesson 10',
            },
            {
              to: '/lessons/lesson-11',
              label: 'Lesson 11',
            },
            {
              to: '/lessons/lesson-12',
              label: 'Lesson 12',
            },
            {
              to: '/lessons/lesson-13',
              label: 'Lesson 13',
            },
            {
              to: '/lessons/lesson-14',
              label: 'Lesson 14',
            },
            {
              to: '/lessons/lesson-15',
              label: 'Lesson 15',
            },
            {
              to: '/lessons/lesson-16',
              label: 'Lesson 16',
            },
            {
              to: '/lessons/lesson-17',
              label: 'Lesson 17',
            },
            {
              to: '/lessons/supplemental-lessons',
              label: 'Supplemental Lessons',
            },
          ],
        },
        {
          to: '/dictionary',
          label: 'Dictionary',
          position: 'left',
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
          to: '/category/news',
          label: 'News',
          position: 'left',
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
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Study Mongolian. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;