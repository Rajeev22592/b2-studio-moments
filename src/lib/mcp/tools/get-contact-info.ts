import { defineTool } from "@lovable.dev/mcp-js";
import { contactInfo } from "../data";

export default defineTool({
  name: "get_contact_info",
  title: "Get studio contact info",
  description:
    "Get B2 Studio's public contact details: phone, WhatsApp, emails, address, working hours and social links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contactInfo, null, 2) }],
    structuredContent: { contact: contactInfo },
  }),
});
