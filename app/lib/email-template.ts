type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function escape(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildContactEmailHtml(payload: ContactPayload): string {
  const { name, email, phone, subject, message } = payload;
  const messageHtml = escape(message).replace(/\n/g, "<br>");

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #e5e5e5;">
            <tr>
              <td style="padding:24px 28px;border-bottom:3px solid #B22234;">
                <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#6b6b6b;font-weight:600;">AccuraCap &middot; New Enquiry</p>
                <h1 style="margin:6px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#1a1a1a;font-weight:normal;">${escape(subject)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:6px 0;width:110px;font-size:12px;color:#6b6b6b;text-transform:uppercase;letter-spacing:0.12em;vertical-align:top;">Name</td>
                    <td style="padding:6px 0;font-size:14px;color:#1a1a1a;">${escape(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;width:110px;font-size:12px;color:#6b6b6b;text-transform:uppercase;letter-spacing:0.12em;vertical-align:top;">Email</td>
                    <td style="padding:6px 0;font-size:14px;color:#1a1a1a;"><a href="mailto:${escape(email)}" style="color:#B22234;text-decoration:none;">${escape(email)}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;width:110px;font-size:12px;color:#6b6b6b;text-transform:uppercase;letter-spacing:0.12em;vertical-align:top;">Phone</td>
                    <td style="padding:6px 0;font-size:14px;color:#1a1a1a;">${escape(phone)}</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding:18px 0 0;border-top:1px solid #e5e5e5;margin-top:8px;">
                      <p style="margin:18px 0 6px;font-size:12px;color:#6b6b6b;text-transform:uppercase;letter-spacing:0.12em;">Message</p>
                      <p style="margin:0;font-size:14px;line-height:1.65;color:#1a1a1a;">${messageHtml}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px;background:#fafafa;border-top:1px solid #e5e5e5;font-size:11px;color:#6b6b6b;">
                Sent from the AccuraCap contact form. Reply to this email to respond directly to ${escape(name)}.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildContactEmailText(payload: ContactPayload): string {
  const { name, email, phone, subject, message } = payload;
  return [
    `New enquiry from the AccuraCap contact form`,
    ``,
    `Subject: ${subject}`,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone}`,
    ``,
    `Message:`,
    message,
  ].join("\n");
}
