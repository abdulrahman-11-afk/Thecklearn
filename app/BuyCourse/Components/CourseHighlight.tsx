import React from 'react'

export default function CourseHighlight() {
    return (
        <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Course Highlight</h2>

            <h3 className="text-sm md:text-md font-semibold mb-3">Web Development Fundamentals</h3>
            <p className="text-[13px] md:text-[14px] text-[#555] leading-relaxed">
                Whether you're taking your first step into coding or looking to refine your skills with modern frameworks, this course
                equips you with the practical knowledge and confidence to bring your ideas to life—from basic page structures to
                fully deployed applications.
            </p>

            <h3 className="text-sm md:text-md font-semibold my-3 md:my-4">HTML & CSS Essentials</h3>
            <p className="text-[13px] md:text-[14px] text-[#555] leading-relaxed">
                Craft semantic, accessible, and responsive layouts. Master styling with CSS, including Flexbox, Grid, animations,
                and transitions, to create visually appealing and mobile-friendly designs.
            </p>

            <h3 className="text-sm md:text-md font-semibold my-3 md:my-4">JavaScript for the Web</h3>
            <p className="text-[13px] md:text-[14px] text-[#555] leading-relaxed">
                Write dynamic and interactive functionality using modern ES6+ JavaScript features. Learn to manipulate the DOM,
                handle events, and integrate third-party APIs for real-time data.
            </p>

            <h3 className="text-sm md:text-md font-semibold my-3 md:my-4">Version Control & Collaboration</h3>
            <p className="text-[13px] md:text-[14px] text-[#555] leading-relaxed">
                Use Git and GitHub to manage your codebase, track changes, and collaborate effectively on projects with others.
            </p>

            <h3 className="text-sm md:text-md font-semibold my-3 md:my-4">Responsive Design & Cross-Browser Compatibility</h3>
            <p className="text-[13px] md:text-[14px] text-[#555] leading-relaxed">
                Ensure your websites work seamlessly across all devices and browsers, applying mobile-first design principles and
                accessibility best practices.
            </p>

            <h3 className="text-sm md:text-md font-semibold my-3 md:my-4">Deployment & Hosting</h3>
            <p className="text-[13px] md:text-[14px] text-[#555] leading-relaxed">
                Deploy your projects to modern platforms like Netlify or Vercel, connect custom domains, and optimize performance
                for fast loading times.
            </p>
        </div>
    )
}