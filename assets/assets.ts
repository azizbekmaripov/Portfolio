import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import brush from '../assets/icon_brush.png'
import world from '../assets/icon_world.png'
import lighthing from '../assets/icon_ligthing.png'
import atom from '../assets/icon_atom.png'

export const assets = {

    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    download_icon,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

    export const workData = [
        {
            title: 'Frontend project',
            description: 'Web Design, running on Next.JS and TailwindCSS',
            bgImage: '/work-1.png',
        },
        {
            title: 'Simple weather app',
            description: 'Developed using Next.JS and TailwindCSS',
            bgImage: '/work-2.png',
        },
        {
            title: 'My first simple ecommerce',
            description: 'Developed using React.JS and TailwindCSS',
            bgImage: '/work-3.png',
        },
        {
            title: 'Avia-sales',
            description: 'UI/UX Design',
            bgImage: '/work-4.png',
        },
        
    ]

export const serviceData = [
    { icon: world, title: 'Web Design & Development ', description: 'Professional and modern websites built with the latest technologies. I ensure high performance, responsiveness, and an intuitive user experience. From simple landing pages to complex web applications – I create solutions that meet your needs.', link: '' },
    { icon: brush, title: 'UI/UX Design', description: 'Crafting user-friendly and visually appealing designs that enhance usability. I focus on intuitive navigation, accessibility, and a seamless digital experience. Every element is carefully designed to improve user engagement.', link: '' },
    { icon: atom, title: 'React & Next.js Web Applications ', description: 'Building high-performance, SEO-friendly, and scalable web applications using React and Next.js. My approach ensures optimized rendering, fast load times, and a smooth user experience for modern web solutions.', link: '' },
    { icon: lighthing, title: 'Code Optimization & Refactoring', description: 'Enhancing existing code by improving structure, readability, and efficiency. I refactor outdated or inefficient codebases to increase performance, maintainability, and scalability without altering core functionality.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, Tailwind' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'CoddyCamp IT academy' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Builted some projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];