import { afterEach, describe, expect, it, vi } from "vitest"

afterEach(() => {
  vi.unstubAllEnvs()
  vi.resetModules()
})

describe("PickLike site configuration", () => {
  it("uses a local origin when no deployment URL is configured", async () => {
    vi.stubEnv("NEXT_PUBLIC_APP_URL", undefined)
    const { siteConfig } = await import("./config")

    expect(siteConfig.url).toBe("http://localhost:4000")
    expect(siteConfig.ogImage).toBe("http://localhost:4000/og")
  })

  it("uses the deployment origin consistently, without double slashes", async () => {
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://picklike.example/")
    const { siteConfig } = await import("./config")
    const { absoluteUrl } = await import("./utils")

    expect(siteConfig.url).toBe("https://picklike.example")
    expect(siteConfig.ogImage).toBe("https://picklike.example/og")
    expect(absoluteUrl("/docs/components")).toBe(
      "https://picklike.example/docs/components"
    )
  })

  it("identifies the fork while keeping explicit upstream credit", async () => {
    const { siteConfig } = await import("./config")

    expect(siteConfig.name).toBe("PickLike")
    expect(siteConfig.links.github).toBe(
      "https://github.com/cunyu6666/PickLike"
    )
    expect(siteConfig.links.upstream).toBe("https://github.com/shadcn-ui/ui")
    expect(siteConfig.navItems).toEqual(
      expect.arrayContaining([
        { href: "/docs/components", label: "Components" },
        { href: "/docs/theming", label: "Theming" },
      ])
    )
  })
})
