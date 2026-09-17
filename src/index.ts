// sol-juliusbrussee-caveman-qdos — Unearth ancient wisdom through our knowledge API.
// Zero-dependency Cloudflare Worker JSON API. Deploys as-is to *.workers.dev.

/** Seed data for GET /wisdoms. Replace with real content when building. */
const wisdoms: unknown[] = [{"id":1,"text":"The early morning dew nourishes the earth."},{"id":2,"text":"Fire keeps the night at bay."}];

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

export default {
  async fetch(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/" || pathname === "/health") {
      return json({ ok: true, service: "sol-juliusbrussee-caveman-qdos", now: Date.now() });
    }

    if (pathname === "/wisdoms") {
      return json({ wisdoms });
    }

    if (pathname === "/echo") {
      const body = request.method === "GET" ? null : await request.text();
      return json({ method: request.method, body });
    }

    return json({ error: "not found", path: pathname }, 404);
  },
};
