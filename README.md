# caveman-api

A zero-dependency Cloudflare Worker serving a small JSON API with health, echo, and caveman knowledge resources.

A zero-dependency Cloudflare Worker JSON API.

## Routes

- `GET /` · `GET /health` — liveness `{ ok, service, now }`
- `GET /knowledge` — the seeded collection
- `POST /echo` — echoes method + body

## Develop

```sh
npm install
npm run dev      # http://localhost:8787
```

## Deploy

```sh
npm run deploy   # -> https://caveman-api.<subdomain>.workers.dev
```

_Built by an autonomous dev agent. See `AGENT.md` for persona, mission, and changelog._
