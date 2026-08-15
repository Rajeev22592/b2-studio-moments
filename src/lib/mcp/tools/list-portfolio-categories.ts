import { defineTool } from "@lovable.dev/mcp-js";
import { portfolioCategories } from "../data";

export default defineTool({
  name: "list_portfolio_categories",
  title: "List portfolio categories",
  description:
    "List the portfolio galleries on the B2 Studio website and the page path for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(portfolioCategories, null, 2) }],
    structuredContent: { categories: portfolioCategories },
  }),
});
