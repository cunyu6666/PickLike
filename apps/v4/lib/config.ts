const siteUrl = (
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4000"
).replace(/\/$/, "")

export const siteConfig = {
  name: "PickLike",
  url: siteUrl,
  ogImage: `${siteUrl}/og`,
  description:
    "A personal design system built on shadcn/ui. Thoughtful components, shared foundations, and open code to make your own.",
  links: {
    author: "https://github.com/cunyu6666",
    github: "https://github.com/cunyu6666/PickLike",
    upstream: "https://github.com/shadcn-ui/ui",
  },
  navItems: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/docs/installation",
      label: "Docs",
    },
    {
      href: "/docs/components",
      label: "Components",
    },
    {
      href: "/blocks",
      label: "Blocks",
    },
    {
      href: "/charts/area",
      label: "Charts",
    },
    {
      href: "/docs/theming",
      label: "Theming",
    },
  ],
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}
