import { nextFetch } from "@/utilities/nextFetch";

export async function fetchPageMetadata(apiUrl) {
    try {
      const data = await nextFetch(`${process.env.NEXT_PUBLIC_API_URL}${apiUrl}`);
      const seo = data?.seo || {};
      const metaTitle = seo.metaTitle || "Swan";
      const metaDescription = seo.metaDescription || "Swan Description";
        
      // Convert IS_PRODUCTION to a boolean
      const isProduction = process.env.IS_PRODUCTION === "true";
  
      return {
        title: metaTitle,
        description: metaDescription,
        robots: {
          index: isProduction,
          follow: isProduction,
          googleBot: {
            index: isProduction,
            follow: isProduction,
            noimageindex: !isProduction,
          },
        },
      };
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
      return {
        title: "Default Title",
        description: "Default Description",
      };
    }
  }
