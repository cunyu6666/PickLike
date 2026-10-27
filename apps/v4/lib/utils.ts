import { siteConfig } from "@/lib/config"

export { cn } from "cn"

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`
}
