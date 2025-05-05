import "./Header.module.scss";
import MegaNavigationMenu from "../MegaNavigationMenu";
const DesktopMenu = ({ data, handleScroll }) => {
  return (
    <>
      <MegaNavigationMenu MenuNav={data} handleScroll={handleScroll} />
    </>
  );
};

export default DesktopMenu;
