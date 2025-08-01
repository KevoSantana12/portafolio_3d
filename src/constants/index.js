import { tek, freelance } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    spring_boot,
    noteflow
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: spring_boot,
        name: "Spring Boot",
        type: "Backend",
    }
];

export const experiences = [

    {
        title: "Tech Support Stage 2",
        company_name: "Tek Experts",
        icon: tek,
        iconBg: "#ebf2f8ff",
        date: "Jun 2024 - Act",
        points: [
            "In this role I have to troubleshoot complex issues, debug Java and JavaScript code, and support custom solutions built on the client’s internal tools, performance bottlenecks, and network configurations.",
            "Proficient in interpreting logs and traces to troubleshoot errors and collaborate with cross-functional teams to ensure swift and effective issue resolution.",
            "Adept at delivering detailed reports and strategic recommendations, leveraging advanced expertise in Microsoft Entra, networking, Azure, coding, and Intune to optimize overall support system performance.",
            "Specialized in Tier 2 technical support with a focus on Microsoft Intune and Azure."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Freelancer",
        icon: freelance,
        iconBg: "#F2F2F2",
        date: "Jun 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js, Spring boot, MySQL and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/KevoSantana12',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kevin-santana-linarte/',
    }
];

export const projects = [
    {
        iconUrl: noteflow,
        theme: 'btn-white',
        name: 'Noteflow',
        description: 'This is a fully responsive demo landing page designed to showcase the capabilities of an AI-powered writing assistant. The goal was to create a sleek, modern interface that demonstrates how users can generate high-quality written content in seconds using artificial intelligence.',
        link: 'https://eloquent-pothos-2ea258.netlify.app/',
    },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];