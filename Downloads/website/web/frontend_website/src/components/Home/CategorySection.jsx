import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShopNowBtn from "../Helpers/Buttons/ShopNowBtn";

function CategorySection({ sectionTitle, categories, adsOne, adsTwo }) {
  return (
    <div className="category-section-wrapper w-full">
      <div className="container-x mx-auto md:py-[60px] py-[30px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px] lg:mb-[60px] mb-[30px]">
{adsOne && parseInt(adsOne.status) === 1 && (
  <div
    data-aos="fade-right"
    className="item w-full rounded-2xl overflow-hidden"
  >
    <Link
      href={{ pathname: '/products', query: { category: adsOne.product_slug } }}
      passHref
    >
      <a rel="noopener noreferrer">
        <div
          className="w-full h-[453px] rounded bg-center"
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_BASE_URL + adsOne.image
            })`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <div className="px-[40px] pt-[40px]"></div>
        </div>
      </a>
    </Link>
    <div class="text-container">
      <h1 className="pl-40 text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]">
        MEN
      </h1>
    </div>
  </div>
)}

{adsTwo && parseInt(adsTwo.status) === 1 && (
  <div
    data-aos="fade-up"
    className="item w-full rounded-2xl overflow-hidden"
  >
    <Link
      href={{ pathname: '/products', query: { category: adsTwo.product_slug } }}
      passHref
    >
      <a rel="noopener noreferrer">
        <div
          className="w-full h-[453px] rounded bg-center"
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_BASE_URL + adsTwo.image
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="px-[40px] pt-[40px]"></div>
        </div>
      </a>
    </Link>
    <div class="text-container">
      <h1 className="pl-40 text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]">
        WOMEN
      </h1>
    </div>
  </div>
)}


{adsTwo && parseInt(adsTwo.status) === 1 && (
  <div
    data-aos="fade-up"
    className="item w-full rounded-2xl overflow-hidden"
  >
    <Link
      href={{ pathname: '/products', query: "category=Kids" }}
      passHref
    >
      <a rel="noopener noreferrer">
        <div
          className="w-full h-[453px] rounded bg-center"
          style={{
            backgroundImage: `url(https://ecommerce.cdcscui.com/kids.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="px-[40px] pt-[40px]"></div>
        </div>
      </a>
    </Link>
    <div class="text-container">
      <h1 className="pl-40 text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]">
        KIDS
      </h1>
    </div>
  </div>
)}



        </div>
        <div>
             
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
