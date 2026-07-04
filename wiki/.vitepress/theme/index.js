import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Footer from './Footer.vue'

// Extend the default theme to render a site-wide footer via the
// `layout-bottom` slot, which (unlike themeConfig.footer) still shows
// on pages that have a sidebar.
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Footer)
    })
  }
}
