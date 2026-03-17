import Footer from "@/components/footer";
import Header from "@/components/header";
import Aside from "./Components/Aside";
import Curriculum from "./Components/Curriculum";
import Faq from "./Components/faq";
import { FaCircleCheck } from "react-icons/fa6";
export default function Buycourse() {
  return (
    <div className="scroll-mt-20 bg-[#F8F9FA] min-h-screen">
      <Header />
      <section className="pt-32 pb-12 px-12 flex flex-col gap-4">
        <h1 className="text-[30px] font-semibold leading-snug">
          Complete Html, Css, Javascript Course <br />
          Frontend Web Development Course.
        </h1>
        <p className="text-[#6F6A6A]">
          A course by <span className="underline">Oluwasegun Peter</span>
        </p>
        <div className="flex items-center gap-4 w-[540px] text-[12px] h-[70px] pl-4 rounded-xl bg-white shadow-sm">          <div className="bg-[#FFE6E6] text-[#FE1010] w-[100px] h-[36px] flex items-center justify-center rounded-md">
          <p className="font-semibold">Hot and New</p>
        </div>
          <div className="bg-[#E8FFE8] text-[#20D013] w-[100px] h-[36px] flex items-center justify-center rounded-md">
            <p className="font-semibold">English</p>
          </div>
          <p>%99 Positive Reviews</p>
          <p>100 students</p>
        </div>
      </section>
      <section className="px-12 pb-20 flex gap-8 items-start">
        <div className="flex flex-col gap-10 w-[760px]">
          <video className="w-full min-h-[400px] rounded-2xl shadow-lg" controls><source src="/Vikings.S06E03.(NKIRI.COM).mkv" type="video/mp4" /></video>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              What you will Learn
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-[14px] text-[#555]">
              <div className="flex items-top">
                <FaCircleCheck className="text-[#FF6B00]" />
                <li>Understand the core building blocks of the web:<br /> HTML, CSS, and JavaScript, and how they work together.</li>
              </div>
              <div>
                <FaCircleCheck className="text-[#FF6B00]" />
                <li>Structure web pages using semantic HTML <br />elements to
                  improve accessibility and SEO.</li>
              </div>
              <div>
                <FaCircleCheck className="text-[#FF6B00]" />
                <li>Style websites with CSS, including layout techniques <br />
                  (Flexbox, Grid), responsive design, and custom animations.</li>
              </div>
              <div>
                <FaCircleCheck className="text-[#FF6B00]" />
                <li>Write clean, efficient JavaScript to add interactivity<br />
                  and dynamic behavior to websites.</li>
              </div>
              <div>
                <FaCircleCheck className="text-[#FF6B00]" />
                <li>Style websites with CSS, including layout techniques
                  (Flexbox, Grid), responsive design, and custom animations.</li>
              </div>
              <div>
                <FaCircleCheck className="text-[#FF6B00]" />
                <li>Write clean, efficient JavaScript to add interactivity<br /> and dynamic behavior to websites.</li>
              </div>
              <div>
                <FaCircleCheck className="text-[#FF6B00]" />
                <li>Style websites with CSS, including layout techniques
                  (Flexbox, Grid), responsive design, and custom animations.</li>
              </div>
              <div>
                <FaCircleCheck className="text-[#FF6B00]" />
                <li>Write clean, efficient JavaScript to add interactivity<br /> and dynamic behavior to websites.</li>
              </div>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <div className="flex flex-col gap-4">
              <p className="text-[12px] text-[#555]">Master the Art of Web Development with This Hands-On, Project-Based Course Designed for aspiring developers, <br />
                designers, entrepreneurs, and professionals seeking to create impactful, interactive, and high-performing websites<br />
                and web applications.</p>
              <p className="text-[12px] text-[#555]">Whether you’re taking your first step into coding or looking to refine your skills with modern frameworks,this course<br />
                equips you with the practical knowledge and confidence to bring your ideas to life—from basic page structures to<br />
                fully deployed applications.</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Course Highlight</h2>
            <h3 className="text-md font-semibold mb-4">Web Development Fundamentals</h3>
            <p className="text-[12px] text-[#555]">Whether you’re taking your first step into coding or looking to refine your skills with modern frameworks,this course<br />
              equips you with the practical knowledge and confidence to bring your ideas to life—from basic page structures to<br />
              fully deployed applications.</p>
            <h3 className="text-md font-semibold my-4">HTML & CSS Essentials</h3>
            <p className="text-[12px] text-[#555]">Craft semantic, accessible, and responsive layouts. Master styling with CSS, including Flexbox, Grid, animations, <br />
              and transitions, to create visually appealing and mobile-friendly designs.</p>
            <h3 className="text-md font-semibold my-4">JavaScript for the Web</h3>
            <p className="text-[12px] text-[#555]">Write dynamic and interactive functionality using modern ES6+ JavaScript features. Learn to manipulate the DOM, <br />
              handle events, and integrate third-party APIs for real-time data.</p>
            <h3 className="text-md font-semibold my-4">Version Control & Collaboration</h3>
            <p className="text-[12px] text-[#555]">Use Git and GitHub to manage your codebase, track changes, and collaborate effectively on projects with others.</p>
            <h3 className="text-md font-semibold my-4">Responsive Design & Cross-Browser Compatibility</h3>
            <p className="text-[12px] text-[#555]">Ensure your websites work seamlessly across all devices and browsers, applying mobile-first design principles and<br />
              accessibility best practices.</p>
            <h3 className="text-md font-semibold my-4">Deployment & Hosting</h3>
            <p className="text-[12px] text-[#555]">Deploy your projects to modern platforms like Netlify or Vercel, connect custom domains, and optimize performance <br />
              for fast loading times.</p>
          </div>
          <Curriculum />
          <Faq />
        </div>
        <Aside />
      </section>

      <Footer />
    </div>
  );
}