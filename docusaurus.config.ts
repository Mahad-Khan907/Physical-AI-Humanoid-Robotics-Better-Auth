import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Physical AI & Humanoid Book",
  tagline: "Learn, Build, and Explore Physical AI",
  favicon: "img/favicon.ico",

  // Production URL set karein agar deploy kar rahe hain
  url: "http://localhost:3000",
  baseUrl: "/",

  organizationName: "mahad-khan907",
  projectName: "physical-ai-humanoid-robotics",

  customFields: {
    // Environment variable se URL lega, warna default local use karega
    authBackendURL: process.env.AUTH_BACKEND_URL || 'http://localhost:3001',
  },

  onBrokenLinks: "warn",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Physical AI & Humanoid Book",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: 'custom-AuthNavbarItem',
          position: 'right',
        },
        {
          href: "https://github.com/Mahad-Khan907",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.linkedin.com/in/khan-khan-5772a8347",
          label: "LinkedIn",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Connect",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Mahad-Khan907",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/khan-khan-5772a8347",
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Physical AI. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;