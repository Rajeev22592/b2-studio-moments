import { defineTool } from "@lovable.dev/mcp-js";
import { packages } from "../data";

export default defineTool({
  name: "list_packages",
  title: "List pricing packages",
  description:
    "List B2 Studio's booking packages with prices and what each one includes.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(packages, null, 2) }],
    structuredContent: { packages },
  }),
});
