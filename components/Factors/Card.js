import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonArrow from "../Shared/Buttons/PrimaryButton";

const Card = ({ data, stickyTopSpace }) => {
  const { title, body, img, bg, fs, image, url } = data;
  // console.log(stickyTopSpace);

  if (data.id === 1) {
    stickyTopSpace = 150;
  } else if (data.id === 2) {
    stickyTopSpace = 200;
  } else if (data.id === 3) {
    stickyTopSpace = 250;
  } else if (data.id === 4) {
    stickyTopSpace = 300;
  } else if (data.id === 5) {
    stickyTopSpace = 350;
  }
  return (
    <div
      className={`sticky shadow-md rounded-md  `}
      style={{ top: stickyTopSpace }}
    >
      <div className="flex justify-between  h-[350px]">
        <div className={`${bg} px-5 rounded-l-xl w-full`}>
          <p className=" my-4 text-center md:text-left px-4 font-semibold uppercase">
            {fs}
          </p>
          <div className="flex flex-col  justify-center h-48 pl-4 text-2xl w-full ">
            <div className="flex gap-4 my-4 pt-8 items-center">
              {image &&
                image?.map((item, index) => (
                  <Image
                    key={index}
                    src={item}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                  />
                ))}
              <div></div>
            </div>
            <h2 className="font-serif font-bold  uppercase">{title}</h2>
            <p className="w-11/12 text-lg pl-4">{body}</p>

            <div className="mt-4">
              <Link href={url}>
                <ButtonArrow h={"10"}>Buy Now</ButtonArrow>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" bg-white hidden md:block rounded-r-xl ">
            <Lottie
              className=" h-[350px] w-72"
              animationData={img}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
