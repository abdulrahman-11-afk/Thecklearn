import Footer from "@/components/footer";
import Header from "@/components/header";
import Aside from "./Components/Aside";
import Curriculum from "./Components/Curriculum";
import Faq from "./Components/faq";
import HeroSection from "./Components/HeroSection";
import CourseHighlight from "./Components/CourseHighlight";
import Description from "./Components/Description";
import WhatYouWillLearn from "./Components/WhatYouWillLearn";
import Video from "./Components/Video";
import Review from "./Components/Review";
export default function Buycourse() {
  return (
    <div className="scroll-mt-20 min-h-screen bg-white text-black ">
      <Header />
      <HeroSection />
      <section className="px-12 pb-20 flex gap-8 items-start">
        <div className="flex flex-col gap-10 w-[760px]">
          <Video />
          <WhatYouWillLearn />
          <Description />
          <CourseHighlight />
          <Curriculum />
          <Faq />
          <Review/>
        </div>
        <Aside />
      </section>
      <Footer />
    </div>
  );
}