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
  social_media_links: [
    {
      icon: "/images/footer/social-media-icons/jj-insta.svg",
      link: "https://www.instagram.com/jobinandjismi/",
    },
    {
      icon: "/images/footer/social-media-icons/jj-fb.svg",
      link: "https://www.facebook.com/company/jobinandjismi",
    },
    {
      icon: "/images/footer/social-media-icons/jj-linkidin.svg",
      link: "https://www.linkidin.com/jobinandjismi/",
    },
    {
      icon: "/images/footer/social-media-icons/jj-twitter.svg",
      link: "https://twitter.com/jobinandjismi",
    },
     {
      icon: "/images/footer/social-media-icons/jj-youtube.svg",
      link: "https://youtube.com/jobinandjismi",
    },
  ]
};

export async function GET() {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
