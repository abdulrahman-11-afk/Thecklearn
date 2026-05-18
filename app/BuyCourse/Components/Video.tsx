import React from 'react'

export default function Video() {
    return (
        <section className="w-full">
            <video
                className="w-full h-[220px] sm:h-[320px] md:min-h-[400px] rounded-xl md:rounded-2xl shadow-lg object-cover"
                controls
            >
                <source src="#" type="video/mp4" />
            </video>
        </section>
    )
}