export type Lesson = string

export type CurriculumSection = {
    title: string
    lectures: number
    duration: string
    lessons: Lesson[]
}

export type Review = {
    img: string
    name: string
    text: string
}

export type CourseData = {
    id: string
    title: string
    instructor: string
    instructorImg: string
    instructorTitle: string
    category: string
    price: string
    oldPrice: string
    discount: string
    lessons: number
    hours: number
    rating: number
    students: number
    badge: string
    language: string
    videoSrc: string
    description: string[]
    whatYouWillLearn: string[]
    highlights: { title: string; body: string }[]
    curriculum: CurriculumSection[]
    faqs: { q: string; a: string }[]
    reviews: Review[]
}

export const courses: CourseData[] = [
    // ─── Web Development ──────────────────────────────────────────────────────
    {
        id: "web-development",
        title: "Complete Html, Css, Javascript Course — Frontend Web Development Course.",
        instructor: "Oluwasegun Peter",
        instructorImg: "/Ellipse 21980.png",
        instructorTitle: "Instructor",
        category: "Web Development",
        price: "₦15,000",
        oldPrice: "₦50,000",
        discount: "70%",
        lessons: 70,
        hours: 30,
        rating: 4.5,
        students: 100,
        badge: "Hot and New",
        language: "English",
        videoSrc: "#",
        description: [
            "Master the Art of Web Development with This Hands-On, Project-Based Course. Designed for aspiring developers, designers, entrepreneurs, and professionals seeking to create impactful, interactive, and high-performing websites and web applications.",
            "Whether you're taking your first step into coding or looking to refine your skills with modern frameworks, this course equips you with the practical knowledge and confidence to bring your ideas to life — from basic page structures to fully deployed applications.",
        ],
        whatYouWillLearn: [
            "Understand the core building blocks of the web: HTML, CSS, and JavaScript, and how they work together.",
            "Structure web pages using semantic HTML elements to improve accessibility and SEO.",
            "Style websites with CSS, including layout techniques (Flexbox, Grid), responsive design, and custom animations.",
            "Write clean, efficient JavaScript to add interactivity and dynamic behavior to websites.",
            "Use modern ES6+ JavaScript features like arrow functions, destructuring, and async/await.",
            "Connect to third-party APIs and render live data on the browser.",
            "Use Git and GitHub to manage and collaborate on codebases.",
            "Deploy projects to platforms like Netlify and Vercel with custom domains.",
        ],
        highlights: [
            { title: "Web Development Fundamentals", body: "Whether you're taking your first step into coding or looking to refine your skills with modern frameworks, this course equips you with the practical knowledge and confidence to bring your ideas to life — from basic page structures to fully deployed applications." },
            { title: "HTML & CSS Essentials", body: "Craft semantic, accessible, and responsive layouts. Master styling with CSS, including Flexbox, Grid, animations, and transitions, to create visually appealing and mobile-friendly designs." },
            { title: "JavaScript for the Web", body: "Write dynamic and interactive functionality using modern ES6+ JavaScript features. Learn to manipulate the DOM, handle events, and integrate third-party APIs for real-time data." },
            { title: "Version Control & Collaboration", body: "Use Git and GitHub to manage your codebase, track changes, and collaborate effectively on projects with others." },
            { title: "Responsive Design & Cross-Browser Compatibility", body: "Ensure your websites work seamlessly across all devices and browsers, applying mobile-first design principles and accessibility best practices." },
            { title: "Deployment & Hosting", body: "Deploy your projects to modern platforms like Netlify or Vercel, connect custom domains, and optimize performance for fast loading times." },
        ],
        curriculum: [
            { title: "Getting Started", lectures: 4, duration: "12m", lessons: ["What's HTML?", "Setting Up VS Code", "HTML Boilerplate", "Your First Web Page", "Practice Project"] },
            { title: "CSS Fundamentals", lectures: 5, duration: "18m", lessons: ["Selectors & Properties", "The Box Model", "Flexbox Layout", "Grid Layout", "Responsive Design"] },
            { title: "JavaScript Basics", lectures: 6, duration: "22m", lessons: [] },
            { title: "DOM Manipulation", lectures: 4, duration: "15m", lessons: [] },
            { title: "APIs & Async JavaScript", lectures: 5, duration: "20m", lessons: [] },
            { title: "Version Control with Git", lectures: 3, duration: "10m", lessons: [] },
            { title: "Deployment", lectures: 3, duration: "10m", lessons: [] },
        ],
        faqs: [
            { q: "Are the videos downloadable?", a: "Yes! You can download all videos and watch them offline at your own pace." },
            { q: "How do I access the course videos and materials?", a: "After purchase, log in to your dashboard and all course content is available instantly." },
            { q: "How can I obtain my certificate after completing the course?", a: "Your certificate is auto-generated once you complete all lessons and the final project." },
            { q: "How do I purchase this course?", a: "Click 'Buy Course Now', complete payment via card or bank transfer, and get instant access." },
        ],
        reviews: [
            { img: "/Ellipse 21981.png", name: "Dan", text: "I had zero experience but this course made everything click. The projects are real and practical — I built and deployed my first website in just 3 weeks!" },
            { img: "/Ellipse 21980.png", name: "Sarah Johnson", text: "The JavaScript section is gold. I've tried other courses before but the way it's broken down here finally made async/await make sense to me." },
            { img: "/Ellipse 21982.png", name: "Dora", text: "Great pace, great instructor, and great support. I now have 3 projects in my portfolio and just landed my first internship!" },
        ],
    },

    // ─── UI/UX Design ─────────────────────────────────────────────────────────
    {
        id: "ui-ux-design",
        title: "Complete UI/UX Design Course — From Wireframes to World-Class Products.",
        instructor: "Oluwasegun",
        instructorImg: "/Ellipse 21981.png",
        instructorTitle: "Instructor",
        category: "Product Design",
        price: "₦30,000",
        oldPrice: "₦50,000",
        discount: "40%",
        lessons: 60,
        hours: 25,
        rating: 4.8,
        students: 100,
        badge: "Hot and New",
        language: "English",
        videoSrc: "#",
        description: [
            "This comprehensive UI/UX Design course takes you from absolute beginner to job-ready designer. Whether you're switching careers, growing your freelance skills, or launching your own product, you'll learn how to think like a designer and build experiences users love.",
            "Through hands-on projects, real-world case studies, and guided Figma walkthroughs, you'll develop a strong design foundation — from wireframing and prototyping to building a polished portfolio that stands out to employers and clients.",
        ],
        whatYouWillLearn: [
            "Understand the principles of user-centred design and how to apply them to real products.",
            "Create low and high-fidelity wireframes using industry-standard tools like Figma.",
            "Design intuitive user interfaces with proper spacing, typography, and color theory.",
            "Build interactive prototypes and conduct usability testing to validate your designs.",
            "Master Figma from scratch — components, auto layout, variants, and design systems.",
            "Learn UX research methods including user interviews, surveys, and competitive analysis.",
            "Understand accessibility standards and design inclusive experiences for all users.",
            "Prepare a professional design portfolio to land your first UI/UX design role.",
        ],
        highlights: [
            { title: "UX Research & Strategy", body: "Learn how to define user problems through research. You'll conduct interviews, build personas, map user journeys, and translate insights into design decisions that solve real problems." },
            { title: "Wireframing & Information Architecture", body: "Structure your designs before you build them. Master low-fidelity wireframing, sitemap creation, and content hierarchy to ensure your product is logical and easy to navigate." },
            { title: "UI Design & Visual Principles", body: "Apply the fundamentals of visual design — color theory, typography, spacing, and iconography — to create interfaces that are both beautiful and functional." },
            { title: "Figma Mastery", body: "Go deep into Figma: components, variants, auto layout, design tokens, and shared libraries. Learn the same workflows used by professional product teams at top companies." },
            { title: "Prototyping & Usability Testing", body: "Turn your designs into interactive prototypes and validate them with real users. Learn how to run usability tests, gather feedback, and iterate quickly based on findings." },
            { title: "Portfolio & Career Preparation", body: "Build a professional design portfolio with 3–5 case studies that demonstrate your process. Get guidance on crafting your resume, preparing for design interviews, and landing your first role." },
        ],
        curriculum: [
            { title: "Introduction to UI/UX Design", lectures: 5, duration: "18m", lessons: ["What is UI/UX Design?", "UI vs UX — What's the Difference?", "The Design Thinking Process", "Tools You'll Need", "Overview of the Course Projects"] },
            { title: "UX Research Methods", lectures: 6, duration: "22m", lessons: ["User Interviews", "Surveys & Questionnaires", "Competitive Analysis", "Building User Personas", "User Journey Mapping", "Defining the Problem Statement"] },
            { title: "Wireframing & Information Architecture", lectures: 4, duration: "15m", lessons: [] },
            { title: "UI Design Fundamentals", lectures: 6, duration: "24m", lessons: [] },
            { title: "Figma from Scratch", lectures: 8, duration: "35m", lessons: [] },
            { title: "Prototyping & Usability Testing", lectures: 5, duration: "20m", lessons: [] },
            { title: "Portfolio & Career Prep", lectures: 4, duration: "16m", lessons: [] },
        ],
        faqs: [
            { q: "Do I need any design experience to take this course?", a: "Not at all! This course is designed for complete beginners. We start from the very basics and take you step-by-step to a professional level." },
            { q: "Which design tools will I be using?", a: "The course is primarily taught using Figma, which is free to use. You'll also get brief exposure to FigJam for collaboration and ideation." },
            { q: "Will I build real projects during the course?", a: "Yes! You'll design a mobile app, a web dashboard, and a landing page — all of which can go straight into your portfolio." },
            { q: "How do I get my certificate after completing the course?", a: "Once you complete all lessons and the final project, your certificate is automatically generated and available to download from your dashboard." },
        ],
        reviews: [
            { img: "/Ellipse 21981.png", name: "Dan", text: "This course completely changed how I approach design. The Figma lessons alone were worth it — I went from zero to designing full app screens in just a few weeks!" },
            { img: "/Ellipse 21980.png", name: "Sarah Johnson", text: "The UX research section was eye-opening. I never realized how much goes into understanding users before touching Figma. I now feel confident running my own user interviews." },
            { img: "/Ellipse 21982.png", name: "Dora", text: "I landed my first freelance UI/UX gig after completing this course. The portfolio guidance was practical and the instructor's feedback was incredibly helpful throughout." },
        ],
    },

    // ─── Data Analytics ───────────────────────────────────────────────────────
    {
        id: "data-analytics",
        title: "Complete Data Analytics Course — From Raw Data to Powerful Insights.",
        instructor: "Bidemi",
        instructorImg: "/Ellipse 21982.png",
        instructorTitle: "Instructor",
        category: "Data Analytics",
        price: "₦30,000",
        oldPrice: "₦50,000",
        discount: "40%",
        lessons: 65,
        hours: 28,
        rating: 4.7,
        students: 100,
        badge: "Hot and New",
        language: "English",
        videoSrc: "#",
        description: [
            "This hands-on Data Analytics course equips you with the tools and mindset to turn raw data into meaningful business decisions. From Excel and SQL to Python and Power BI, you'll cover the full analyst workflow used in real companies.",
            "Whether you're a complete beginner or a professional looking to upskill, this course will help you confidently clean, analyse, visualise, and present data — and build a portfolio that gets you hired.",
        ],
        whatYouWillLearn: [
            "Understand the data analytics lifecycle from collection to decision-making.",
            "Clean, transform, and analyse data using Microsoft Excel and Google Sheets.",
            "Write SQL queries to extract and manipulate data from relational databases.",
            "Use Python (Pandas, NumPy, Matplotlib) to automate analysis and visualise data.",
            "Build interactive dashboards with Power BI and Tableau.",
            "Apply statistical thinking to identify trends, outliers, and patterns in datasets.",
            "Present data insights clearly using storytelling and data visualisation principles.",
            "Complete real-world projects and build an analytics portfolio from scratch.",
        ],
        highlights: [
            { title: "Excel & Google Sheets for Analysis", body: "Start with the tools every analyst uses daily. Master formulas, pivot tables, VLOOKUP, data cleaning, and charting to handle real business datasets confidently." },
            { title: "SQL for Data Querying", body: "Write SQL queries to extract, filter, join, and aggregate data from databases. Learn to answer business questions directly from raw data using structured queries." },
            { title: "Python for Data Analytics", body: "Use Pandas and NumPy for data wrangling, Matplotlib and Seaborn for visualisation, and learn how to automate repetitive analysis tasks with Python scripts." },
            { title: "Power BI & Tableau Dashboards", body: "Build interactive, shareable dashboards that communicate insights at a glance. Learn DAX formulas, calculated fields, and best practices for dashboard design." },
            { title: "Statistics & Data Storytelling", body: "Apply descriptive and inferential statistics to real datasets. Learn how to frame your analysis as a story that non-technical stakeholders can act on." },
            { title: "Portfolio & Career Prep", body: "Complete 3 end-to-end analytics projects covering sales, marketing, and operations data. Package your work into a portfolio and prepare for analyst job interviews." },
        ],
        curriculum: [
            { title: "Introduction to Data Analytics", lectures: 4, duration: "14m", lessons: ["What is Data Analytics?", "Types of Analytics: Descriptive, Diagnostic, Predictive", "The Data Analyst Workflow", "Tools Overview & Setup"] },
            { title: "Excel & Google Sheets", lectures: 7, duration: "28m", lessons: ["Formulas & Functions", "Pivot Tables", "VLOOKUP & XLOOKUP", "Data Cleaning Techniques", "Charts & Visualisation", "Conditional Formatting", "Mini Project: Sales Report"] },
            { title: "SQL Fundamentals", lectures: 6, duration: "24m", lessons: [] },
            { title: "Python for Data Analytics", lectures: 8, duration: "32m", lessons: [] },
            { title: "Data Visualisation with Power BI", lectures: 6, duration: "25m", lessons: [] },
            { title: "Statistics for Analysts", lectures: 5, duration: "20m", lessons: [] },
            { title: "Capstone Projects & Portfolio", lectures: 4, duration: "18m", lessons: [] },
        ],
        faqs: [
            { q: "Do I need coding experience to take this course?", a: "No coding experience is needed. We introduce Python gradually after covering Excel and SQL, so you'll build up comfortably." },
            { q: "Which tools will I need?", a: "You'll use Excel or Google Sheets (free), SQL via DB Browser (free), Python via Anaconda (free), and Power BI Desktop (free for Windows)." },
            { q: "Will I work on real datasets?", a: "Yes! Every module uses real-world datasets from industries like e-commerce, finance, and healthcare so your learning is immediately applicable." },
            { q: "How do I get my certificate?", a: "Complete all lessons and submit your capstone project. Your certificate will be generated automatically and available in your dashboard." },
        ],
        reviews: [
            { img: "/Ellipse 21980.png", name: "Frey", text: "I went from knowing nothing about data to building Power BI dashboards for my team at work. The SQL section especially was a game changer for me." },
            { img: "/Ellipse 21981.png", name: "Dan", text: "The Python lessons are beginner-friendly without being dumbed down. I now write scripts that save me hours of manual Excel work every week." },
            { img: "/Ellipse 21982.png", name: "Dora", text: "Best investment I've made this year. The capstone projects gave me real portfolio pieces and I got called for 2 analyst interviews within a month of finishing." },
        ],
    },
]