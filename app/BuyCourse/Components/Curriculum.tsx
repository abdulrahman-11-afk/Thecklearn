"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Curriculum() {
  const [open, setOpen] = useState<number | null>(0);

  const sections = [
    {
      title: "Getting Started",
      lectures: 4,
      duration: "12m",
      lessons: [
        "What's Webflow?",
        "Sign up in Webflow",
        "Webflow Terms & Conditions",
        "Teaser of Webflow",
        "Practice Project",
      ],
    },
    {
      title: "Secret of Good Design",
      lectures: 4,
      duration: "12m",
      lessons: [],
    },
    {
      title: "Design Like an Artist",
      lectures: 4,
      duration: "12m",
      lessons: [],
    },
    {
      title: "Web Development (Webflow)",
      lectures: 4,
      duration: "12m",
      lessons: [],
    },
  ];

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="max-w-3xl mt-12">
      <h2 className="text-xl font-semibold mb-4">Curriculum</h2>

      {sections.map((section, index) => (
        <div key={index} >

          <div
            onClick={() => toggle(index)}
            className="flex justify-between items-center p-4 cursor-pointer"
          >
             {open === index ? <FaChevronUp /> : <FaChevronDown />}
            <div className="flex items-center gap-3">

              <span className="text-sm font-medium">
                {section.title}
              </span>

              <span className="text-xs text-gray-500">
                {section.lectures} lectures
              </span>

              <span className="text-xs text-gray-500">
                {section.duration}
              </span>

            </div>
          </div>

          {open === index && (
            <ul className="px-6 pb-4 text-sm text-gray-600">
              {section.lessons.map((lesson, i) => (
                <li key={i} className="py-1">
                  {lesson}
                </li>
              ))}
            </ul>
          )}

        </div>
      ))}
    </div>
  );
}