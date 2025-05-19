import Footer from "@/components/Footer";
import MainHeader from "@/components/Header";
import { nextFetch } from "@/utilities/nextFetch";


const CommonLayout = async ({ children }) => {

    let headerData = await nextFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/header`);
    let footerData= await nextFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/footer`);  
    
  return (
    <>
      <MainHeader data={headerData}/>
      {children}
      <Footer data={footerData} />
    </>
  );
};

export default CommonLayout;
