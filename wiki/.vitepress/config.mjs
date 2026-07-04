import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ESB Wiki",
  description: "A site with guides on various things",
  lastUpdated: true,
  vite: {
    plugins: [llmstxt()]
  },
  themeConfig: {
     editLink: {
      pattern: 'https://github.com/EducatedSuddenBucket/esb-wiki/edit/main/wiki/:path'
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Minecraft',
        link: '/minecraft/',
        collapsed: true,
        items: [
          {
            text: 'Minecraft Java Edition',
            collapsed: true,
            items: [
              { text: 'Index : Minecraft Java', link: '/minecraft/java/' },
              { text: 'Custom Authentication and Session Server', link: '/minecraft/java/custom-auth-and-sessionserver' }
            ]
          },
          {
            text: 'Minecraft Bedrock Edition',
            collapsed: true,
            items: [
              { text: 'Custom 3D Skins and Custom Capes', link: '/minecraft/bedrock/custom-3d-skin' },
              { text: 'Index : Minecraft Bedrock', link: '/minecraft/bedrock/' }
            ]
          }
        ]
      },
      {
        text: 'Android',
        link: '/android/',
        collapsed: true,
        items: [
          { text: 'Index : Android', link: '/android/' }
        ]
      },
      {
        text: 'Linux',
        link: '/linux/',
        collapsed: true,
        items: [
          { text: 'Index : Linux', link: '/linux/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EducatedSuddenBucket/esb-wiki' }
    ]
  }
})
