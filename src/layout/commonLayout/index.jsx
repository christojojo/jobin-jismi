import Footer from "@/components/Footer";
import MainHeader from "@/components/Header";

import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
