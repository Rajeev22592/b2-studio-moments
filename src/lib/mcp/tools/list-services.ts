import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../data";

export default defineTool({
  name: "list_services",
  title: "List photography services",
  description:
    "List the photography and video services B2 Studio offers, with their descriptions and included features.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
