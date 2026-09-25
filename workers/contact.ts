export interface Env {
  CONTACT_TO: string;
  CONTACT_FROM: string;
  MAIL_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ ok: false, error: "Method not allowed" }),
        {
          status: 405,
          headers: { "content-type": "application/json; charset=utf-8" },
        },
      );
    }

    const formData = await request.formData();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    if (website) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "content-type": "application/json; charset=utf-8" },
      });
    }

    if (!email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing fields" }),
        {
          status: 400,
          headers: { "content-type": "application/json; charset=utf-8" },
        },
      );
    }

    const body = {
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO,
      subject: `Neue Kontaktanfrage von ${email}`,
      text: `Absender: ${email}\n\nNachricht:\n${message}`,
    };

    const mailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.MAIL_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!mailResponse.ok) {
      return new Response(
        JSON.stringify({ ok: false, error: "Mail sending failed" }),
        {
          status: 502,
          headers: { "content-type": "application/json; charset=utf-8" },
        },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  },
};
