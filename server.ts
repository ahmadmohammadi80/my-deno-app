import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 8000;

const handler = (request: Request): Response => {
  return new Response("Hello from Deno!", { status: 200 });
};

console.log(`Server running on http://localhost:${PORT}`);
await serve(handler, { port: PORT });
