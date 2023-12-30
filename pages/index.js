import { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Cards from "../components/Factors/Cards";
import HeroSection from "../components/HeroSection/HeroSection";
import Spinier from "../components/Spiner/Spiner";

export default function Home() {
  const [timeOutLoading, setTimeOutLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPosition]);

  setTimeout(() => {
    setTimeOutLoading(false);
  }, 1200);

  if (timeOutLoading)
    return (
      <div className="flex justify-center items-center h-screen ">
        <Spinier />
      </div>
    );
  return (
    <div className={`bg-gray-900`}>
      <>
        <div
          className={` ${scrollPosition > 500 ? "bg-[#4650e5]" : ""
            } trn bp-10 h-auto py-10 duration-700`}
        >
          <HeroSection></HeroSection>
        </div>
        <div
          className={` ${scrollPosition > 500 && scrollPosition < 2300
            ? "bg-[#4650e5]"
            : "bg-[#02132b]"
            } trn  pb-10 h-auto py-10 duration-700`}
        >
          <div className="mt-10">
            <h1 className="text-6xl text-center pb-5  font-bold text-purple-50 ">
              Our Services
            </h1>
            <Cards />
          </div>

        </div>
        <div
          className={` ${scrollPosition < 2300 ? "bg-[#4650e5]" : "bg-[#02132b]"
            }   bp-10 h-auto py-10 trn`}
        >
          <ContactForm />
        </div>

      </>
      {/* <MessengerCustomerChat pageId="111854754052829" appId="527602612817067" /> */}
    </div>
  );
}
