# PickLike

A personal design system built on [shadcn/ui](https://github.com/shadcn-ui/ui).
Thoughtful components, shared foundations, and open code to make your own.

## Current scope

- PickLike homepage with an interactive component preview and semantic color samples.
- Component documentation, themes, blocks, and charts inherited from shadcn/ui.
- PickLike navigation, metadata, social image, and GitHub links, with upstream attribution preserved.

This is an independent fork, not the official shadcn/ui website. The registry,
CLI packages, and installation examples retain their upstream names and behavior.
There is no separate published PickLike package or hosted registry yet. Preview
form changes are in-memory only; they are not sent to a backend.

## Local development

Use Node.js 24 (see `.nvmrc`), pnpm 10.33.4 (see `packageManager`), and
[Bun](https://bun.sh/docs/installation) for the registry build scripts.

```sh
git clone https://github.com/cunyu6666/PickLike.git
cd PickLike
pnpm install --frozen-lockfile
cp apps/v4/.env.example apps/v4/.env.local
pnpm --filter=v4 registry:build
pnpm v4:dev
```

Open http://localhost:4000. The registry build is required on a fresh clone:
generated styles are intentionally not committed. See the
[registry guide](apps/v4/registry/README.md) for targeted rebuilds.

For deployment, set `NEXT_PUBLIC_APP_URL` to the actual site origin (without a
trailing slash) before building. It controls canonical URLs, the sitemap, and
social metadata; without it, the site uses `http://localhost:4000`. No production
domain is assumed. Run `pnpm v4:build` to build the site.

### Checks

```sh
pnpm --filter=v4 lint
pnpm --filter=v4 typecheck
pnpm test:picklike
```

The complete upstream monorepo checks remain available via `pnpm check` and
`pnpm test`; the latter builds the registry and starts a local server.

## Documentation

The local site provides `/docs/installation`, `/docs/components`, and
`/docs/theming`. These guides currently describe the upstream shadcn/ui tooling.
The official upstream documentation is at https://ui.shadcn.com/docs.

## Keeping up with upstream

Keep PickLike-specific website changes focused in `apps/v4` and preserve the
upstream registry and package structure. Review updates on a separate branch:

```sh
# Once per clone (skip if the upstream remote already exists).
git remote add upstream https://github.com/shadcn-ui/ui.git
git fetch upstream
git switch main
git pull --ff-only origin main
git switch -c chore/sync-shadcn
git merge upstream/main
```

Resolve conflicts without overwriting PickLike branding, rebuild the registry,
run the checks, and open a PR into **cunyu6666/PickLike:main**. If your clone is
shallow, fetch full history before merging. Do not use an upstream sync option
that discards local commits.

## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

## License

Licensed under the [MIT license](./LICENSE.md).
