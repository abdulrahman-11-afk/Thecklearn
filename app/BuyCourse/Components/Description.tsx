import React from 'react'

export default function Description() {
    return (
        <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Description</h2>
            <div className="flex text-[13px] md:text-[14px] flex-col gap-4">
                <p className="text-[#555] leading-relaxed">
                    Master the Art of Web Development with This Hands-On, Project-Based Course Designed for aspiring developers,
                    designers, entrepreneurs, and professionals seeking to create impactful, interactive, and high-performing websites
                    and web applications.
                </p>
                <p className="text-[#555] leading-relaxed">
                    Whether you're taking your first step into coding or looking to refine your skills with modern frameworks, this course
                    equips you with the practical knowledge and confidence to bring your ideas to life—from basic page structures to
                    fully deployed applications.
                </p>
            </div>
        </div>
    )
}