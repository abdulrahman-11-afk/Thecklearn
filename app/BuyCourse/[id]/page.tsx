import { courses } from '@/data/courseData'
import { notFound } from 'next/navigation'
import HeroSection from './Components/HeroSection'
import Aside from './Components/Aside'
import Video from './Components/Video'
import WhatYouWillLearn from './Components/WhatYouWillLearn'
import Description from './Components/Description'
import CourseHighlight from './Components/CourseHighlight'
import Curriculum from './Components/Curriculum'
import Faq from './Components/faq'
import Review from './Components/Review'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default async function BuyCoursePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const course = courses.find((c) => c.id === id)

    if (!course) return notFound()

    return (
        <div className="scroll-mt-20 bg-white text-black">
            <Header />                     
            <HeroSection course={course} />
            <div className="md:flex md:gap-10 md:px-12 md:pt-10 md:items-start">
               <div className='md:hidden flex items-center justify-center mt-10'>
                 <Aside course={course} />
               </div>
                <div className="flex flex-col gap-8 md:gap-10 flex-1 px-5 md:px-0 pt-6 md:pt-0">
                    <Video course={course} />
                    <WhatYouWillLearn course={course} />
                    <Description course={course} />
                    <CourseHighlight course={course} />
                    <Curriculum course={course} />
                    <Faq course={course} />
                    <Review course={course} />
                </div>
               
                 <Aside course={course} />
               
            </div>
            <Footer />
        </div>
    )
}