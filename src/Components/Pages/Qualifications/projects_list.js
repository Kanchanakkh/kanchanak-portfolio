import pic1 from '../../../Images/id-1.png'
import pic3 from '../../../Images/id-3.png'
import catImage from '../../../Images/catwithwool.png'
const projects_list = [
    
    {id: 1,
    src: pic1,
    title: 'this.Kanchanak\'s Porfolio',
    programmingLang: 'JavaScript (React.js Frontend Library), HTML/CSS',
    description: 'My portfolio website to showcase my profile, resume and project lists, blog posts and online code editor env',
    status: 'Ongoing',
    link:'https://github.com/Kanchanakkh/kanchanak-portfolio'

    },

    {id:2,
    src: catImage,
    title: 'Mini Web Alumni Tracker',
    programmingLang: 'Java (Spring MVC and Hibernate), MySQL',
    description: 'A mini web application that allows users to manage a list of detailed info of alumni',
    status: 'Ongoing',
    link:'https://github.com/Kanchanakkh/Mini-Webapp-Alumini-Tracker-Spring-Hibernate'

    },
    
    {id:3, 
    src: pic3,
    title: "School Resources Web Application",
    programmingLang: 'JavaScript, HTML/CSS, Node.js, Express.js, MongoDB' ,
    description: 'A full-stack web application for SJSU students to search, comment,filter and rate school resources',
    status: 'Completed',
    link: 'https://github.com/nichui/2020-fall-cs160-teamspiritworld'},
    
    {id:4,
    src: catImage,
    title: "Malware Classification",
    programmingLang: "Python & Java",
    description: 'A program that uses HMM model combined with SVM as a meta-classifier to classify Zeroaccess, Winwebsec and Zbot malware from each other, determined by AUC scores',
    status: 'Completed',
    link: null
    },
    {id:5,
    src: catImage,
    title: 'Decryptoid',
    programmingLang: "PHP, HTML, SQL (MySQL)",
    description: 'A small program that enables users to encrypt and decrypt their text input through file upload/text box',
    status: 'Completed',
    link: 'https://github.com/MonicaNS/Decryptoid'
    }


]

export default projects_list