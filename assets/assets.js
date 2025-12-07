import user_image from './user-image.png';
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
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_img.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import computer from './computer.png'; 
import computer_dark from './computer_dark.png'; 
import database from './database.png'; 
import project1 from './project-1.png'; 
import project2 from './project-2.jpeg'; 
import project3 from './project-3.jpeg'; 
import project4 from './project-4.jpeg'; 
import project5 from './project-5.png'; 
import project6 from './project-6.png'; 
import project7 from './project-7.png'; 
import catheart from './cat-heart.png'; 
import catback from './cat-back.png';
import project8 from './portfolio.png'; 
import hoppycat from './hoppy-cat.gif';
import byecat from './bye-cat.gif';
import phone from './phone-call.png';
import peepcat from './cat-peep.jpg'; 
import partycat from './partycat.gif'; 
import parlogo from './parlogo.jpeg';
import testrail from './testrail.jpeg'; 
import testexecute from './testexecute.png';
import testcomplete from './testcomplete.png'; 
import smartgit from './smartgit.svg';
import whitemail from './white_mail.png';
import exercisecat from './exercisecat.gif'; 
import catquestion from './cap-peep-copy.jpg';
import dayforcelogo from './dayforce_logo.jpeg';
import dogandgirl from './dog-and-i.png';

export const assets = {
    user_image,
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
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark, 
    computer, 
    computer_dark, 
    database, 
    project1, 
    project2, 
    project3, 
    project4, 
    project5, 
    project6, 
    project7, 
    project8,
    catheart, 
    catback,
    hoppycat, 
    byecat, 
    phone, 
    peepcat, 
    partycat, 
    parlogo, 
    testrail, 
    testexecute,
    testcomplete, 
    smartgit, 
    whitemail, 
    exercisecat, 
    catquestion, 
    dayforcelogo, 
    dogandgirl
};

export const projectData = [
    {
        title: 'Climate Solutions App',
        description: 'An app built for changemakers — share your passion projects, connect with others, and make a lasting impact.',
        bgImage: '/project-1.png',
    },
    {
        title: 'Coffee Cloud Cafe',
        description: 'My first full-stack CRUD application — a cozy cafe management app built with love and lots of coffee!',
        bgImage: '/project-2.jpeg', 
    },
    {
        title: 'ChatTime',
        description: 'A simple real-time chat application built to learn more about Python. Also my first project in exploring the complexities of network communication.',
        bgImage: '/project-3.jpeg',
    },
    {
        title: 'BiteByte',
        description: 'Designed at my very first hackathon, ElleHacks, my team and I created an app to enable diabetic seniors to make healthier decisions.',
        bgImage: '/project-4.jpeg',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        description: [
            'Computer Programming & Analysis',
            'Seneca Polytechnic', 
            'Expected: Dec 2026', 
            'GPA: 4.0'
        ]
    },
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Skills', 
        description: [
            'Full Stack Development', 
            'OOP',
            'Software Testing', 
            'QA Automation'
        ],
    },
    // { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];
