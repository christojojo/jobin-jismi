const data = {
  heading: "Ready to elevate your data quality?",
  buttons: [{ label: "Contact Us" }, { label: "Book A Demo" }],
  image: {
    url: "/images/logo.png",
    alternativeText: "logo image",
  },
  footer_items: [
    {
      Netsuite: [
        "Implementation",
        "Consulting",
        "Customization",
        "Integration",
        "Optimization",
        "Support & Maintenance",
        "Implementation Rescue",
        "Suite Commerce",
        "Advanced Suite Commerce",
      ],
      Services: [
        "Celigo",
        "E-commerce",
        "Web Application",
        "IoT and Robotics",
        "VR",
        "3D Animation",
      ],
      Products: [
        "Netsuite Products",
        "E-commerce Extensions",
        "Web Application",
        "VR",
      ],
      Company: ["About", "Case Studies", "Careers", "Insights", "Contact Us"],
      "Connect Us": {
        Sales: "+91 70344 99881",
        "General Enquiry": "+91 85698 83344",
        "HR Enquiry": "+91 70344 99822",
        Email: "contactus@jobinandjismi.com",
      },
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