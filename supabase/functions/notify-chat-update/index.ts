// deno-lint-ignore-file
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export default async (req: Request): Promise<Response> => {
  const url = Deno.env.get("SUPABASE_URL")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(url, service);
  const body = await req.json();
  const type = body?.type as string;
  const message = body?.message as { id: string; content: string; author_id: string; channel_id: string; created_at: string };
  if (type === "message.new" && message?.id) {
    const ch = supabase.channel("chat-updates");
    await ch.send({ type: "broadcast", event: "message:new", payload: { message } });
    await ch.send({ type: "broadcast", event: "notification:update", payload: {} });
    await ch.send({ type: "broadcast", event: "channel:update", payload: {} });
    await ch.unsubscribe();
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }
  return new Response(JSON.stringify({ ok: false }), { status: 200 });
};