const data = {
  image: {
    url: "/images/logo.png",
    alternativeText: "logo image",
  },
  menu_items: [
    {
      title: "NetSuite",
      url: "/netSuite",
      isExternal: false,
      submenu: [],
    },
    {
      title: "Services",
      url: "/services",
      isExternal: false,
      submenu: [],
    },
    {
      title: "Products",
      url: "/products",
      isExternal: false,
      submenu: [],
    },
    {
      title: "Our Works",
      url: "/ourWorks",
      isExternal: true,
      submenu: [],
    },
    {
      title: "Industries",
      url: "/industries",
      isExternal: false,
      submenu: [],
    },
    {
      title: "Company",
      url: "/company",
      isExternal: false,
    },
  ],
  search_icon: {
    url: "/images/search.svg",
    alternativeText: "Search",
  },
  button: {
    title: "Contact Us",
    url: "/contact-us",
  },
};

export async function GET() {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
