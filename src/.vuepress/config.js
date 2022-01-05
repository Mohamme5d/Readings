const { description } = require('../../package')

module.exports = {
  base: "/Readings/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mohammedoz\'s Readings',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Readings',
        link: '/readings/'
      },
      {
        text: 'Linkedin',
        link: 'https://www.linkedin.com/in/alsayani-mohammed/'
      }
    ],
    sidebar: {
      '/about/': [
        {
          title: 'About me',
          collapsable: false,
          children: [
            '',
           // 'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
