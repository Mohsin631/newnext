import { useEffect, useState } from "react";
import settings from "../../../utils/settings";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleOne from "../Helpers/SectionStyleOne";
import SectionStyleThree from "../Helpers/SectionStyleThree";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Layout from "../Partials/Layout";
import Banner from "./Banner";
import BrandSection from "./BrandSection";
import CampaignCountDown from "./CampaignCountDown";
import CategorySection from "./CategorySection";
import TwoColumnAds from "./ProductAds/TwoColumnAds";
import BestSellers from "./BestSellers";
import Ads from "./Ads";
export default function Home({ homepageData }) {
  const [homepage] = useState(homepageData);
  const getsectionTitles = homepageData.section_title;
  const [sectionTitles, setSectionTitles] = useState(null);
  useEffect(() => {
    if (!sectionTitles) {
      let tem =
        getsectionTitles &&
        getsectionTitles.map((item, i) => {
          return {
            [item.key]: item.custom ? item.custom : item.default,
          };
        });
      setSectionTitles(Object.assign.apply(Object, tem));
    }
  }, [sectionTitles]);

  const { enable_multivendor } = settings();
  const [isMultivendor, setIsMultivendor] = useState(false);
  useEffect(() => {
    if (!isMultivendor) {
      setIsMultivendor(enable_multivendor && parseInt(enable_multivendor));
    }
  }, [isMultivendor]);
  return (
    <>
      <Layout childrenClasses="pt-0">
        <Ads />
<div className="banner-wrapper">
  {homepage.sliders.map((slide, index) => (
    <div key={index} className="slide">
      <div className="video-container">
        <video
          className="fullscreen-video"
          src="https://cdn.shopify.com/videos/c/o/v/116f1a7977034ff1982d8e274e788624.mp4"
          preload="auto"
          autoPlay
          muted
          loop
        ></video>
        
      </div>
    </div>
  ))}
</div>
        <CategorySection
          categories={homepage.homepage_categories}
          adsOne={homepage.banner_one}
          adsTwo={homepage.banner_two}
          sectionTitle={sectionTitles && sectionTitles.My_Market_Category}
        />
        <div className="md:py-[60px] py-[30px] bg-qpurplelow/10">
          {homepage && (
            <SectionStyleThree
              products={
                homepage.newArrivalProducts.length > 0
                  ? homepage.newArrivalProducts.slice(
                      0,
                      homepage.newArrivalProducts.length > 16
                        ? 16
                        : homepage.newArrivalProducts.length
                    )
                  : []
              }
              sectionTitle={sectionTitles && sectionTitles.New_Arrivals}
              seeMoreUrl={`/products?highlight=new_arrival`}
              className="new-products"
            />
          )}
        </div>
        {homepage && (
          <CampaignCountDown
            className="md:mb-[60px] mb-[30px]"
            datas={homepage.flashSale}
            products={homepage.flashsale_products.slice(0, 4)}
          />
        )}
        {homepage && (
          <ViewMoreTitle
            className="top-selling-product md:mb-[60px] mb-[30px]"
            seeMoreUrl={`/products?highlight=top_product`}
            categoryTitle={sectionTitles && sectionTitles.Top_Rated_Products}
          >
            <SectionStyleTwo
              products={
                homepage.topRatedProducts.length > 0
                  ? homepage.topRatedProducts
                  : []
              }
            />
          </ViewMoreTitle>
        )}

        {homepage && (
          <SectionStyleOne
            products={homepage.popularCategoryProducts}
            categories={homepage.popularCategories}
            categoryBackground={
              process.env.NEXT_PUBLIC_BASE_URL +
              homepage.popularCategorySidebarBanner
            }
            sectionTitle={sectionTitles && sectionTitles.Popular_Category}
            seeMoreUrl={`/products?highlight=popular_category`}
            className="category-products"
          />
        )}
        <div className="bg-qpurplelow/10">

          {homepage && (
            <SectionStyleFour
              products={
                homepage.bestProducts.length > 0 ? homepage.bestProducts : []
              }
              sectionTitle={sectionTitles && sectionTitles.Best_Products}
              seeMoreUrl={`/products?highlight=best_product`}
              className="category-products md:pt-[60px] pt-[30px] pb-[114px]"
            />
          )}
        </div>
      </Layout>
    </>
  );
}
