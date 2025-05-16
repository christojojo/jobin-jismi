import { HOME_PAGE } from "@/constants/apiRoutes";
import { nextFetch } from "@/utilities/nextFetch";
import { fetchPageMetadata } from "@/utilities/seoUtils";
import HomeBanner from "@/widgets/HomeBanner";

const WIDGETS = {
  HomeBanner, // Add other widget components here as needed
};

const DefaultComponent = () => <div>Component not found</div>;

// Utility to get the appropriate component for a widget type
const getComponent = (widgetType) => WIDGETS[widgetType] || DefaultComponent;

// Generate page metadata
export async function generateMetadata() {
  return fetchPageMetadata(HOME_PAGE);
}

// HomePage component
const HomePage = async () => {
  let data;

  try {
    data = await nextFetch(
      `${process.env.NEXT_PUBLIC_API_URL}${HOME_PAGE}`
    );
  } catch (error) {
    console.error("Failed to fetch homepage data:", error);
    return <div>Failed to load homepage content.</div>;
  }

  if (!data?.data?.widgets?.length) {
    return <div>No widgets available</div>;
  }

  return (
    <main className="isHome">
      {data.data.widgets.map((widget, index) => {
        const WidgetComponent = getComponent(widget.widget_type);
        return (
          <div key={widget.id || index}>
            <WidgetComponent data={widget.data} />
          </div>
        );
      })}
    </main>
  );
};

export default HomePage;

// Force dynamic rendering to ensure fresh content
export const dynamic = "force-dynamic";
