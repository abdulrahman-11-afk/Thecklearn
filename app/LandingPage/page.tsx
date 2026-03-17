"use client";
import About from "@/app/LandingPage/Components/aboutSection";
import Banner from "@/components/banner";
import Faq from "@/app/LandingPage/Components/FAQSection";
import Footer from "@/components/footer";
import Herosection from "@/app/LandingPage/Components/herosection";
import Review from "@/app/LandingPage/Components/reviewSection";
import Why from "@/app/LandingPage/Components/whySection";
import Course from "@/app/LandingPage/Components/CourseSection";
import Youtube from "@/app/LandingPage/Components/YoutubeVideoSection";

export default function LandingPage() {
    return (
        <div className="scroll-mt-20 bg-white text-black">
            {/* header section */}
            <Banner />
            {/* hero section */}
            <Herosection />
            {/* youtube video */}
            <Youtube/>
            {/* course section */}
            <Course/>
            {/* why section */}
           <Why/>
            {/* about section */}
           <About/>
            {/* review section */}
           <Review/>
            {/* faq section */}
            <Faq />
            {/* footer */}
                <Footer />
        </div>
    );
}
