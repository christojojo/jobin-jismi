import { motion } from "framer-motion";
import Style from "./Header.module.scss"; // Assuming SCSS styl
import LinkItem from "./LinkItem";
import Image from "next/image";
import { useMobileNav } from "./useMobileNav";

const MobileNav = ({ menuItems, logo }) => {
  const {isOpen, steps, handleIndex, toggleMenu, menuRef} = useMobileNav()

  return (
    <>
      {/* Menu Open Button */}
      {!isOpen && (
        <motion.div
          className="xl:hidden z-[9999] absolute hamburger"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8, rotate: -45 },
            visible: { opacity: 1, scale: 1, rotate: 0 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <button
            aria-label="Open Menu"
            onClick={() => {
              toggleMenu();
            }}
            className={`${Style.hamburger}`}
          >
            <svg
              className="fill-current h-8 w-8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </motion.div>
      )}

      <motion.nav
        ref={menuRef}
        className="fixed top-0 left-0 w-full max-w-[450px] h-[100dvh] z-[999] bg-[#fff] text-[#000]"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={{
          hidden: { x: "-100%" },
          visible: { x: 0 },
        }}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        {/* Menu Close Button */}

        <div className="h-full w-full relative overflow-hidden">
          <div className="w-full absolute flex left-0 top-0 h-[56px] px-[16px] justify-between z-[1] bg-[#fff]">
            <div className="w-auto h-full relative flex items-center">
              <div
                className={`block absolute w-[36px] aspect-square transition-all duration-300 ${
                  steps.currentStep !== 0 ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  className="absolute z-50 white-logo block" // Visible on mobile, hidden on medium and up
                  src={logo}
                  alt="applexus"
                  fill
                />
              </div>
              <button
                onClick={() =>
                  handleIndex(
                    steps.activeIndex,
                    steps.subActiveIndex,
                    steps.currentStep > 0 ? steps.currentStep - 1 : 0
                  )
                }
                className={`back-icon transition-all duration-300 ${
                  steps.currentStep === 0 ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="font-medium text-[16px] leading-[1.3] ml-[5px]">
                  Go back
                </span>
              </button>
            </div>
            {isOpen && (
              <motion.button
                onClick={() => {
                  toggleMenu();
                }}
                className="mr-[-3px]"
                aria-label="Close Menu"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotate: -45 },
                  visible: { opacity: 1, scale: 1, rotate: 0 },
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <svg
                  width="34"
                  height="38"
                  viewBox="0 0 34 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.8684 9.75L10.1319 28.4865"
                    stroke="black"
                    stroke-width="2"
                  />
                  <path
                    d="M28.8684 28.4854L10.1319 9.74886"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </motion.button>
            )}
          </div>
          <div
            className={`w-full h-full absolute flex left-0 top-0 ${
              isOpen ? "transition-all duration-300" : ""
            }`}
            style={{
              transform: `translateX(${steps.currentStep * 100 * -1}%)`,
            }}
          >
            <div className="w-full absolute h-full left-0 top-0 px-[16px] pt-[55px] overflow-x-hidden overflow-y-auto">
              <ul>
                {menuItems &&
                  menuItems?.map((item, index) => {
                    return (
                      <li key={index} onClick={() => handleIndex(index, 0, 1)}>
                      {
                        item?.link && 
                        <LinkItem
                          haveSub={true}
                          title={item?.title}
                          url={item?.link}
                          toggleMenu={toggleMenu}
                        />
                      }
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="w-full absolute h-full left-0 top-0 px-[16px] pt-[55px] overflow-x-hidden overflow-y-auto translate-x-[100%]">
              <ul>
              <li>
                <LinkItem toggleMenu={toggleMenu} haveSub={false} url={`${menuItems[steps?.activeIndex].link} || '/'`} title={'Overview'}/>
              </li>
                {menuItems &&
                  menuItems[steps?.activeIndex]?.sublinks?.map((item, index) => {
                    const haveInnerMenus =
                      menuItems[steps?.activeIndex].sublinks[
                        steps?.subActiveIndex
                      ]?.childLinks;
                    return (
                      <li
                        key={index}
                        onClick={() =>
                          haveInnerMenus &&
                          handleIndex(steps?.activeIndex, index, 2)
                        }
                      >
                        <LinkItem
                          haveSub={haveInnerMenus}
                          title={item?.title}
                          url={item?.link}
                          toggleMenu={toggleMenu}
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="w-full absolute h-full left-0 top-0 px-[16px] pt-[55px] overflow-x-hidden overflow-y-auto translate-x-[200%]">
              <ul>
              <li>
                <LinkItem toggleMenu={toggleMenu} haveSub={false} url={`${menuItems[steps?.activeIndex].sublinks[
                    steps?.subActiveIndex
                  ].link || '/'}`} title={'Overview'}/>
              </li>
                {menuItems &&
                  menuItems[steps?.activeIndex]?.sublinks[
                    steps?.subActiveIndex
                  ]?.childLinks?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() =>
                          handleIndex(
                            steps?.activeIndex,
                            steps?.subActiveIndex,
                            2
                          )
                        }
                      >
                      {item?.link && 
                        <LinkItem
                          haveSub={false}
                          title={item?.title}
                          url={item?.link}
                          toggleMenu={toggleMenu}
                        />
                      }
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default MobileNav;
