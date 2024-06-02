import Common from "@/components/Common";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import FeaturesImage from "@/public/assets/features.svg";
import Bell from "@/public/assets/bell.svg";
import Cstar from "@/public/assets/cStar.svg";
import Vise from "@/public/assets/visa.svg";
import Testimonials from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Started from "@/components/Started";
import Star from "@/public/assets/start.svg";
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Common
        propstyling="sm:mb-[-100px]"
        title="Why Choose Uifry"
        subtitle="ADVANTAGES"
        description="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
        featuresImage={FeaturesImage}
        icon={Bell}
        icon2={Star}
        styling="top-0 right-20"
        iconAlt="bell"
        iconText="Clever Notification"
      />
      <Common
        title=""
        subtitle=""
        propstyling="flex lg:flex-row-reverse items-center flex-col"
        description="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
        featuresImage={Vise}
        icon={Cstar}
        icon2={Star}
        styling="top-0 right-[50%]"
        iconAlt="cstar"
        iconText="Fully Customizable"
      />
      <Testimonials />
      <Faq />
      <Started />
    </>
  );
}
