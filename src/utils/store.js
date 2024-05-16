import { AiOutlineGift } from "react-icons/ai";
import { BsBank2, BsGraphUpArrow } from "react-icons/bs";
import { GiAlarmClock, GiSpeedometer } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { MdDashboard, MdOutlineLocalPostOffice } from "react-icons/md";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { FaCalendarDay, FaRegIdBadge } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { RiBuilding2Line } from "react-icons/ri";
import { VscFolderActive } from "react-icons/vsc";
import { SiOnlyoffice } from "react-icons/si";

export const navLinks = [
  {
    id: "1",
    title: "ABOUT",
    url: "/about",
  },
  {
    id: "2",
    title: "OUR TEAM",
    url: "/teams",
  },
  {
    id: "3",
    title: "TRAINING",
    url: "/trainings",
  },
  {
    id: "4",
    title: "SERVICES",
    url: "/services",
  },
  // {
  //   id: "4",
  //   title: "RESOURCES",
  //   url: "/resources",
  // },
  {
    id: "5",
    title: "EVENTS",
    url: "/events",
  },
  // {
  //   id: "5",
  //   title: "FAQ",
  //   url: "/faq",
  // },
];

export const heroFeatures = [
  {
    title: "Global Certification Limited",
  },
  {
    title: "America Council for Training",
  },
  {
    title: "African Training Intitute",
  },
  {
    title: "Independent European Certification (IEC)",
  },
];

export const trainingModule = [
  {
    title: "Health, Safety & Environment",
    desc: "This training typically covers topics such as hazard identification and mitigation, emergency response procedures, regulatory compliance, risk assessment, and the promotion of a culture of safety and environmental stewardship within organizations. Ultimately, the aim is to prevent accidents, injuries, illnesses, and environmental harm, thereby safeguarding the well-being of employees, communities, and the natural world.",
    category: "Occupational Safety and Health",
    mode: "Scheduled Virtual",
    image: "/hse.jpg",
  },
  {
    title: "CyberSecurity",
    desc: "This training typically covers topics such as understanding common cyber threats, implementing security measures, safeguarding sensitive information, detecting and responding to incidents, and promoting a culture of cybersecurity awareness within organizations. Ultimately, the aim is to mitigate risks, safeguard confidential information, maintain the integrity and availability of digital assets, and ensure the resilience of digital infrastructure against cyber threats.",
    category: "Digital/Cyber-Space",
    mode: "Scheduled Virtual",
    image: "/cybersecurity.jpg",
  },
  {
    title: "Data Processing",
    desc: "IGTA Data processing training typically aims to equip individuals with the skills and knowledge necessary to effectively manage, manipulate, analyze, and interpret large volumes of data. This training focuses on various aspects of data processing, including data cleaning, transformation, integration, analysis, and visualization. The goal is to enable participants to harness the power of data to make informed decisions, solve complex problems, and drive organizational success.",
    category: "Data Processing",
    mode: "Scheduled Virtual",
    image: "/dataprocessing.webp",
  },
  {
    title: "Logistics & Procurement Management",
    desc: "With the goal of optimizing processes related to sourcing, purchasing, transportation, warehousing, and distribution to ensure timely delivery, cost-efficiency, and customer satisfaction. Participants learn strategies for supplier selection, negotiation, contract management, inventory control, and risk mitigation to enhance organizational competitiveness and achieve strategic objectives. IGTA Logistics and Procurement Management training aims to provide individuals with the skills and knowledge needed to effectively manage the flow of goods, services, and information throughout the supply chain.",
    category: "Supply Chain Management",
    mode: "Scheduled Virtual",
    image: "/logistics.png",
  },
  {
    title: "Consultacy",
    desc: "Our Consultancy training aims to equip individuals with the skills needed for effective problem-solving, strategic thinking, and project management, while enhancing analytical, communication, and relationship-building abilities. It focuses on understanding client needs, providing industry-specific knowledge, and maintaining high ethical standards, ultimately enabling consultants to deliver tailored, data-driven solutions and build lasting client trust.",
    category: "Management and Administration",
    mode: "Scheduled Virtual",
    image: "/Consultancy.webp",
  },

  {
    title: "NGO Management",
    desc: "IGTA's NGO management training aims to develop skills in strategic planning, project management, fundraising, and financial management, while enhancing leadership, communication, and stakeholder engagement abilities. It focuses on understanding community needs, ensuring effective program implementation, promoting transparency and accountability, and fostering sustainable development practices, ultimately enabling NGO professionals to drive impactful change and achieve organizational goals.",
    category: "Management and Administration",
    mode: "Scheduled Virtual",
    image: "/ngo.jpg",
  },
  {
    title: "Accountancy",
    desc: "The Accountancy training aims to develop expertise in financial reporting, auditing, tax planning, and compliance, while enhancing analytical, ethical, and problem-solving skills. It focuses on understanding accounting principles, mastering financial software, ensuring accuracy and transparency in financial records, and providing strategic financial advice, ultimately enabling accountants to support informed decision-making and maintain the financial health of organizations.",
    category: "Management and Administration",
    mode: "Scheduled Virtual",
    image: "/accounting.png",
  },
  {
    title: "Project Management",
    desc: "Our Project management training aims to develop skills in planning, executing, and closing projects, while enhancing leadership, communication, and risk management abilities. It focuses on mastering project management methodologies, optimizing resource allocation, ensuring timely delivery, and maintaining budget control, ultimately enabling project managers to achieve project goals efficiently and effectively while meeting stakeholder expectations.",
    category: "Management and Administration",
    mode: "Scheduled Virtual",
    image: "/project.jpg",
  },
  {
    title: "Human Resource Management",
    desc: "Human resource management training aims to develop skills in recruitment, employee relations, performance management, and compliance, while enhancing leadership, communication, and strategic planning abilities. It focuses on understanding labor laws, fostering a positive workplace culture, implementing effective HR policies, and promoting employee development, ultimately enabling HR professionals to support organizational goals and enhance employee satisfaction and productivity.",
    category: "Management and Administration",
    mode: "Scheduled Virtual",
    image: "/hr.webp",
  },
];

export const servicesData = [
  {
    title: "Consulting and advising",
    desc: "We dive into a broad range of issues, develop our findings, and present our recommendations to empower your organization.",
    sub: "We give strategic advice.",
    image: "/consulting.jpg",
  },
  {
    title: "Events and meetings",
    desc: "We manage in-person and online events – such as conferences, forums, and meetings – and position them on the global stage..",
    sub: "We organize large-scale events.",
    image: "/events.jpg",
  },
  {
    title: "Development Cooperation",
    desc: "We provide long-term support to project teams around the world, in areas like human resources, finance, and monitoring and evaluation.",
    sub: "We manage development projects.",
    image: "/product.jpg",
  },
  {
    title: "Communication and advocacy",
    desc: "We write interactive, human-centered stories, launch digital products like podcasts and social media campaigns, and monitor data-driven digital marketing strategies along the way.",
    sub: "We communicate for impact.",
    image: "/advocacy.jpg",
  },
  {
    title: "Training products",
    desc: "We work with you to co-create a learning journey that includes innovative training activities, delivered online, on campus, and in the field.",
    sub: "We build learning products.",
    image: "/trainingandproducts.png",
  },
  {
    title: "Innovation",
    desc: "We use cutting-edge products, services, and processes to accelerate innovation at the organizational level.",
    sub: "We create innovative solutions.",
    image: "/innovation.jpg",
  },
  {
    title: "Data-driven services",
    desc: "We help you strategize on the right approaches to improve your institutional processes, using platform-based channels and data analysis tools.",
    sub: "We analyze data.",
    image: "/datadriven.jpg",
  },
];

export const aboutData = [
  {
    title: "Upskilling for the",
    desc: "IGTA was birthed 10 years ago by a renowed team of educators who had a revolutionary idea to offer a plaform that brings individuals seeking for carreer growth knowledge and professionals ready for mentorship and training of talents together for free. The mission is to create an internationally accessible plaform that provides training and resources to empowers everyone from any part of the world sustainably and affordably. Over 50000 students in more than 20 countries trained, with continuous demand of a new and easily accessible way to deliver education and trainings. This revelation sparked a mission to make lifelong learning more equitable and inclusive. We have consistently implemented different trainings that spans accross individual personal development and organization career advancement.",
    sub: "careers of the future",
    image: "/about.webp",
  },
  {
    title: "Driving outcomes that",
    desc: "IGTA’s proven playbook is globally scalable, addressing the widespread proffessional talent shortages that impact growth, productivity, and innovation. We collaborate with enterprises and highly motivated individuals to design a tailored skills transformation journey. Our exclusive content is co-created and continually refined with proffesionals and industry leaders. Each Udacity program is deeply focused—eliminating guesswork in selecting the right course. Projects and learners assesment go far beyond step-by-step guides, cultivating the critical thinking required for workplace relevance. Expert mentors unblock learning with personalized support, and verify complete mastery of competencies.",
    sub: "empower learners, organizations and nations",
    image: "/about2.jpg",
  },
];

export const genderOptions = ["Gender", "Male", "Female", "Prefer Not to Say"];

export const designationOptions = [
  "Designation",
  "Member",
  "Mentor",
  "Ambassador",
];

export const userTabsLink = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    link: "/dashboard",
    slug: "dashboard",
  },
  {
    title: "Attendance",
    icon: <FaArrowsTurnToDots />,
    link: "/attendance",
    slug: "attendance",
  },
  {
    title: "Leave Managment",
    icon: <FaCalendarDay />,
    link: "/leave",
    slug: "leave",
  },
  {
    title: "Complaints",
    icon: <TfiWrite />,
    link: "/complaints",
    slug: "complaints",
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    link: "/profile",
    slug: "profile",
  },
];

export const teamsData = [
  {
    name: "Elvis ujuater Abiritei",
    desc: "IGTA Class H facilitator-UAE",
    img: "/elvis.png",
  },
  {
    name: "Ava Adelina",
    desc: "IGTA Facilitator Canada",
    img: "/adelina.jpeg",
  },
  {
    name: "Lolia Apiriala Atedoghu",
    desc: "IGTA International Secretary",
    img: "/apiriala.jpg",
  },
  {
    name: "Liam Cody",
    desc: "IGTA Facilitator Texas",
    img: "/liam.png",
  },
  {
    name: "Muhammad Yusuf",
    desc: "IGTA Facilitator Pakistan",
    img: "/muhammad.jpg",
  },
  {
    name: "Karl Jayden",
    desc: "IGTA Facilitator Germany",
    img: "/jayden.jpg",
  },
  {
    name: "Ebinehita Umanhonlen",
    desc: "IGTA CLASS T FACILITATOR",
    img: "/ebinehita.jpg",
  },
  {
    name: "MR . Daniel Alao",
    desc: "IGTA Facilitator (CLASS D)",
    img: "/daniel.png",
  },
  {
    name: "Gwom Elisha Habila",
    desc: "IGTA Class E Facilitator",
    img: "/elisha.png",
  },
  {
    name: "Osakpolor Joseph Aisien",
    desc: "IGTA Facilitator",
    img: "/osakpolor.png",
  },
  {
    name: "Engr. Afolabi Akinola Abraham",
    desc: "IGTA Facilitator",
    img: "/afolabi.png",
  },
  {
    name: "Engr. Godwin A Adoga",
    desc: "IGTA Facilitator Class V",
    img: "/godwin.jpg",
  },
  {
    name: "Kenneth S. Flomo",
    desc: "IGTA Facilitator Liberia",
    img: "/kenneth.jpg",
  },
  {
    name: "Mrs. Juliet Edafe",
    desc: "IGTA Operational Secretary",
    img: "/juliet.png",
  },
  {
    name: "Ismail Busari",
    desc: "IGTA Facilitator Class B",
    img: "/ismail.jpg",
  },
  {
    name: "Bebenimibo Seyiefa Esther",
    desc: "IGTA Coordinator Abuja",
    img: "/bebenimibo.jpg",
  },
  {
    name: "Mrs.Jullian Achieng Oduor",
    desc: "IGTA Ambassador East Africa",
    img: "/jullian.jpg",
  },
  {
    name: "Bertrand Awa - UAE",
    desc: "IGTA Ambassador Northeast Asia",
    img: "/bertrand.jpg",
  },
  {
    name: "H.E. Engr. Justice. Nji Christain Ayafor",
    desc: "Regional President of YEEC, Founder & CEO of IGTA",
    img: "/justice.jpg",
  },
];
