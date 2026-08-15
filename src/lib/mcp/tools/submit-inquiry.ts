import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseAnon } from "../supabase";
import { eventTypes } from "../data";

export default defineTool({
  name: "submit_inquiry",
  title: "Submit a booking inquiry",
  description:
    "Send a booking inquiry to B2 Studio, exactly like the website's public contact form. Inquiries cannot be read back.",
  inputSchema: {
    full_name: z.string().trim().min(1).describe("Name of the person inquiring."),
    email: z.string().trim().email().describe("Contact email address."),
    phone: z.string().trim().min(1).optional().describe("Optional contact phone number."),
    event_type: z
      .string()
      .trim()
      .min(1)
      .describe(`Type of shoot or event. Common values: ${eventTypes.join(", ")}.`),
    preferred_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional()
      .describe("Optional preferred date in YYYY-MM-DD format."),
    message: z.string().trim().min(1).describe("Details about the shoot or event."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async (input) => {
    const supabase = supabaseAnon();
    const { error } = await supabase.from("inquiries").insert([
      {
        full_name: input.full_name,
        email: input.email,
        phone: input.phone ?? null,
        event_type: input.event_type,
        preferred_date: input.preferred_date ?? null,
        message: input.message,
      },
    ]);
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return {
      content: [
        {
          type: "text",
          text: "Inquiry submitted. The B2 Studio team will get back to you shortly.",
        },
      ],
      structuredContent: { submitted: true },
    };
  },
});
