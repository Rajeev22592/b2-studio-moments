import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import listPackages from "./tools/list-packages";
import listPortfolioCategories from "./tools/list-portfolio-categories";
import getContactInfo from "./tools/get-contact-info";
import submitInquiry from "./tools/submit-inquiry";

export default defineMcp({
  name: "b2-studio-moments",
  title: "b2-studio-moments",
  version: "0.1.0",
  instructions:
    "Tools for B2 Studio, a photography and cinematography studio. Use `list_services` and `list_packages` for offerings and pricing, `list_portfolio_categories` for galleries, `get_contact_info` for contact details, and `submit_inquiry` to send a booking request.",
  tools: [
    listServices,
    listPackages,
    listPortfolioCategories,
    getContactInfo,
    submitInquiry,
  ],
});
