// @ts-check

const fs = require("fs")
const path = require("path")

/** @type {import("@docusaurus/types").Config} */
const docusaurusConfig = {
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  title: "Initium",
  tagline: "Get your code deployed on day zero.",
  url: "https://pablos4nt0s.github.io",
  baseUrl: "/sample-initium/",
  projectName: "sample-initium",
  organizationName: "pablos4nt0s",
  deploymentBranch: 'gh-pages',
  favicon: "img/favicon.ico",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/nightOwl"),
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
      ],
    },
    navbar: {
      title: "Initium",
      logo: {
        alt: "Initium Logo",
        src: "img/logo/logo-xs.webp",
      },
      items: [
        {
          to: "/about",
          activeBasePath: "/about",
          label: "About",
          position: "left",
        },
        {
          to: "/getting-started/introduction",
          activeBasePath: "/getting-started/",
          label: "Getting started",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: "https://github.com/nearform/initium/releases",
              label: "All Releases",
            },
          ],
        },
        {
          to: "https://www.npmjs.com/package/initium",
          label: "npm",
          position: "right",
        },
        {
          to: "https://github.com/nearform/initium",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    announcementBar: {
      id: "new-major-announcement",
      content:
        "<a target='_blank' rel='noopener noreferrer' href='https://initium.nearform.com'>Initium</a> Announcemenrt Area! 🎉 <a target='_blank' rel='noopener noreferrer' href='https://www.nearform.com/blog/'>Read the announcement.</a> Note, this project is under active development. 🏗",
      backgroundColor: "#000",
      textColor: "#fff",
    },
    footer: {
      links: [
        {
          title: "About Initium",
          items: [
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Get Started",
              to: "/getting-started/introduction",
            },
          ],
        },
        {
          title: "Download",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/nearform/initium",
            },
            {
              label: "NPM",
              to: "https://www.npmjs.com/package/initium",
            },
          ],
        },
        {
          title: "Acknowledgements",
          items: [
            {
              label: "Sponsors",
              to: "https://www.nearform.com",
            },
            {
              label: "Security",
              to: "/security",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nearform.`
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [require("@sapphire/docusaurus-plugin-npm2yarn2pnpm").npm2yarn2pnpm],
          versions: {
            current: {
              label: "experimental",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/index.css"),
        },
      },
    ],
  ],
}

docusaurusConfig.headTags = [
  {
    tagName: "meta",
    attributes: {
      charSet: "utf-8",
    },
  },
  {
    tagName: "link",
    attributes: {
      rel: "canonical",
      href: docusaurusConfig.url,
    },
  },
  {
    tagName: "meta",
    attributes: {
      property: "og:title",
      content: docusaurusConfig.title,
    },
  },
  {
    tagName: "meta",
    attributes: {
      property: "og:description",
      content: docusaurusConfig.tagline,
    },
  },
  {
    tagName: "meta",
    attributes: {
      property: "og:image",
      content: `${docusaurusConfig.url}/img/og-image.png`,
    },
  },
  {
    tagName: "meta",
    attributes: {
      property: "og:url",
      content: docusaurusConfig.url,
    },
  },
  {
    tagName: "meta",
    attributes: {
      name: "twitter:card",
      content: "summary_large_image",
    },
  },
  {
    tagName: "meta",
    attributes: {
      name: "twitter:title",
      content: docusaurusConfig.title,
    },
  },
  {
    tagName: "meta",
    attributes: {
      name: "twitter:description",
      content: docusaurusConfig.tagline,
    },
  },
  {
    tagName: "meta",
    attributes: {
      name: "twitter:image",
      content: `${docusaurusConfig.url}/img/og-image.png`,
    },
  },
]

module.exports = docusaurusConfig
