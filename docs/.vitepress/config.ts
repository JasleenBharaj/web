import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DWWW",
  description: "Documentation for DWWW web repo",

  base: "/web/",
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      dark: "/assets/dwww-logo-dark.svg",
      light: "/assets/dwww-logo-light.svg",
      alt: "DWWW Logo",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Dsek-LTH/web" }],

    search: {
      provider: "local",
    },
  },
});
