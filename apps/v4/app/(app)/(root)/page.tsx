import { type Metadata } from "next"
import Link from "next/link"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BlocksIcon,
  Code2Icon,
  PaletteIcon,
} from "lucide-react"

import { siteConfig } from "@/lib/config"
import { PickLikePreview } from "@/components/picklike-preview"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

const title = "Your components. Your system."
const metadataTitle = `${siteConfig.name} - ${title}`
const description = siteConfig.description

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: "en-US",
  sameAs: [siteConfig.links.github],
}

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title: {
    absolute: metadataTitle,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: metadataTitle,
    description,
    siteName: siteConfig.name,
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description,
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <div className="container-wrapper flex flex-1 flex-col px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section
        aria-labelledby="picklike-heading"
        className="grid gap-12 border-b py-12 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-20"
      >
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium tracking-widest uppercase">
            <span>PickLike / Design system</span>
            <Badge variant="outline" className="tracking-normal normal-case">
              Foundation preview
            </Badge>
          </div>
          <h1
            id="picklike-heading"
            className="text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl xl:text-7xl"
          >
            Pick thoughtfully.
            <br />
            <span className="text-muted-foreground">Build consistently.</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/docs/components">
                Explore components <ArrowRightIcon aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                View source <ArrowUpRightIcon aria-hidden="true" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Open source. MIT licensed. Built on shadcn/ui.
          </p>
        </div>
        <div className="rounded-2xl border bg-muted/40 p-4 sm:p-8">
          <PickLikePreview />
        </div>
      </section>
      <section
        aria-labelledby="foundations-heading"
        className="grid gap-8 border-b py-12 md:grid-cols-2 md:gap-16 md:py-16"
      >
        <div className="space-y-4">
          <p className="font-mono text-xs text-muted-foreground">
            01 / FOUNDATIONS
          </p>
          <h2
            id="foundations-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Shared decisions. Less guesswork.
          </h2>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Start with semantic colors, consistent spacing, and accessible
            primitives. Keep the foundations familiar; make the details yours.
          </p>
          <Link
            href="/docs/theming"
            className="inline-flex items-center gap-2 rounded-sm text-sm font-medium underline underline-offset-4"
          >
            Explore the theme{" "}
            <ArrowRightIcon className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid content-center gap-6 rounded-xl border p-6">
          <div className="flex items-center justify-between gap-2 text-sm">
            <span className="font-medium">Semantic palette</span>
            <span className="text-muted-foreground">Light & dark ready</span>
          </div>
          <ul
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            aria-label="Theme color tokens"
          >
            {[
              { name: "Background", className: "bg-background" },
              { name: "Primary", className: "bg-primary" },
              { name: "Muted", className: "bg-muted" },
              { name: "Accent", className: "bg-accent" },
            ].map((token) => (
              <li key={token.name} className="space-y-2">
                <div
                  className={`h-16 rounded-lg border ${token.className}`}
                  aria-hidden="true"
                />
                <span className="text-xs text-muted-foreground">
                  {token.name}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2 border-t pt-5">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="explore-heading"
        className="space-y-8 py-12 md:py-16"
      >
        <div className="space-y-3">
          <p className="font-mono text-xs text-muted-foreground">
            02 / THE TOOLKIT
          </p>
          <h2
            id="explore-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Make it your own, one piece at a time.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Components",
              href: "/docs/components",
              icon: BlocksIcon,
              description:
                "Buttons, forms, dialogs, and the building blocks in between. Explore the inherited shadcn/ui library.",
            },
            {
              title: "Themes",
              href: "/docs/theming",
              icon: PaletteIcon,
              description:
                "Use shared tokens to keep color, radius, and dark mode consistent across your interface.",
            },
            {
              title: "Get started",
              href: "/docs/installation",
              icon: Code2Icon,
              description:
                "Follow the upstream installation guide. PickLike is a fork, not a separate published package.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group space-y-5 rounded-xl border p-6 transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <item.icon
                className="size-5 text-muted-foreground"
                aria-hidden="true"
              />
              <h3 className="flex items-center justify-between font-semibold">
                {item.title}
                <ArrowUpRightIcon
                  className="size-4 text-muted-foreground"
                  aria-hidden="true"
                />
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
