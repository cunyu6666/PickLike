"use client"

import * as React from "react"
import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

export function PickLikePreview() {
  const [name, setName] = React.useState("Personal workspace")
  const [notifications, setNotifications] = React.useState(true)
  const [status, setStatus] = React.useState("")

  function resetPreview() {
    setName("Personal workspace")
    setNotifications(true)
    setStatus("Preview reset to defaults.")
  }

  return (
    <Card className="w-full shadow-none">
      <CardHeader>
        <div className="mb-3 flex items-center justify-between">
          <span
            className="flex size-10 items-center justify-center rounded-xl bg-primary font-semibold text-primary-foreground"
            aria-hidden="true"
          >
            P
          </span>
          <Badge variant="secondary">Live preview</Badge>
        </div>
        <CardTitle>
          <h2>Your workspace</h2>
        </CardTitle>
        <CardDescription>
          A few familiar pieces, working together.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setStatus(
              `Preview updated for ${name.trim() || "Untitled workspace"}. Notifications ${notifications ? "on" : "off"}.`
            )
          }}
          className="space-y-6"
        >
          <Tabs defaultValue="workspace">
            <TabsList
              className="w-full"
              aria-label="Workspace preview settings"
            >
              <TabsTrigger value="workspace">Workspace</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            <TabsContent value="workspace" className="min-h-36 space-y-3 pt-4">
              <Label htmlFor="preview-workspace">
                Workspace name (optional)
              </Label>
              <Input
                id="preview-workspace"
                value={name}
                onChange={(event) => setName(event.target.value)}
                maxLength={60}
                autoComplete="off"
                aria-describedby="preview-name-hint"
              />
              <p
                id="preview-name-hint"
                className="text-sm text-muted-foreground"
              >
                Try editing the name, then update the preview.
              </p>
            </TabsContent>
            <TabsContent value="preferences" className="min-h-36 pt-4">
              <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
                <div className="space-y-1.5">
                  <Label htmlFor="preview-notifications">
                    Email notifications
                  </Label>
                  <p
                    id="preview-notifications-hint"
                    className="text-sm text-muted-foreground"
                  >
                    A switch demo. No emails are sent.
                  </p>
                </div>
                <Switch
                  id="preview-notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  aria-describedby="preview-notifications-hint"
                />
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex flex-wrap gap-2">
            <Button type="submit">
              Update preview <ArrowUpRightIcon aria-hidden="true" />
            </Button>
            <Button type="button" variant="outline" onClick={resetPreview}>
              Reset
            </Button>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p
              role="status"
              className="min-h-8 text-sm break-words text-foreground"
            >
              {status}
            </p>
            <p>
              Preview only. Nothing is stored or sent; reload to start fresh.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
