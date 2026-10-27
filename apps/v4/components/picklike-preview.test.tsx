import * as React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"

import { GitHubLink } from "@/components/github-link"
import { PickLikePreview } from "@/components/picklike-preview"
import { SiteFooter } from "@/components/site-footer"
import IndexPage, { metadata } from "@/app/(app)/(root)/page"

describe("PickLike homepage", () => {
  it("links to the fork and credits upstream without using its popularity", () => {
    const github = renderToStaticMarkup(<GitHubLink />)
    const footer = renderToStaticMarkup(<SiteFooter />)

    expect(github).toContain('href="https://github.com/cunyu6666/PickLike"')
    expect(github).toContain('aria-label="PickLike on GitHub"')
    expect(github).not.toContain("shadcn-ui/ui")
    expect(footer).toContain('href="https://github.com/shadcn-ui/ui"')
    expect(footer).toContain("MIT licensed")
  })

  it("renders real, labeled preview controls instead of a screenshot", () => {
    const html = renderToStaticMarkup(<PickLikePreview />)

    expect(html).toContain('for="preview-workspace"')
    expect(html).toContain('id="preview-workspace"')
    expect(html).toContain('value="Personal workspace"')
    expect(html).toContain('aria-label="Workspace preview settings"')
    expect(html).toContain('role="status"')
    expect(html).toContain("Update preview")
    expect(html).toContain("Nothing is stored or sent")
  })

  it("provides component and theme entry points with fork-only structured identity", () => {
    const html = renderToStaticMarkup(<IndexPage />)
    const jsonLd = html.match(
      /<script type="application\/ld\+json">(.*?)<\/script>/
    )?.[1]

    expect(html.match(/<h1\b/g)).toHaveLength(1)
    expect(html).toContain('href="/docs/components"')
    expect(html).toContain('href="/docs/theming"')
    expect(html).toContain('href="/docs/installation"')
    expect(html).toContain("not a separate published package")
    expect(JSON.parse(jsonLd!)).toMatchObject({
      name: "PickLike",
      sameAs: ["https://github.com/cunyu6666/PickLike"],
    })
    expect(metadata.title).toEqual({
      absolute: "PickLike - Your components. Your system.",
    })
  })
})
