// caveman-api — A zero-dependency Cloudflare Worker serving a small JSON API with health, echo, and caveman knowledge resources.
// Zero-dependency Cloudflare Worker JSON API. Deploys as-is to *.workers.dev.

/** Seed data for GET /knowledge. Replace with real content when building. */
const knowledge: unknown[] = [{"id":1,"text":"Cavemen used fire for cooking and warmth."},{"id":2,"text":"The earliest known cave paintings are over 40,000 years old."}];

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

export default {
  async fetch(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/" || pathname === "/health") {
      return json({ ok: true, service: "caveman-api", now: Date.now() });
    }

    if (pathname === "/knowledge") {
      return json({ knowledge });
    }

    if (pathname === "/echo") {
      const body = request.method === "GET" ? null : await request.text();
      return json({ method: request.method, body });
    }

    return json({ error: "not found", path: pathname }, 404);
  },
};
