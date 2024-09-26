import { AiOutlineGift } from "react-icons/ai";
import { BsBank2, BsGraphUpArrow } from "react-icons/bs";
import { GiAlarmClock, GiSpeedometer } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { MdDashboard, MdOutlineLocalPostOffice } from "react-icons/md";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { FaCalendarDay, FaRegIdBadge } from "react-icons/fa";
import { LuBookOpenCheck } from "react-icons/lu";
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
    title: "TRAINING",
    url: "/trainings",
  },
  {
    id: "3",
    title: "SERVICES",
    url: "/services",
  },
  // {
  //   id: "4",
  //   title: "RESOURCES",
  //   url: "/resources",
  // },
  {
    id: "4",
    title: "EVENTS",
    url: "/events",
  },
  {
    id: "5",
    title: "NOTES",
    url: "/notes",
  },
  {
    id: "6",
    title: "OUR TEAM",
    url: "/teams",
  },
  // {
  //   id: "5",
  //   title: "FAQ",
  //   url: "/faq",
  // },
];

export const heroFeatures = [
  {
    title: "Providing Accessible Education For All",
  },
  {
    title: "Identifying and Solving The World’s Problems",
  },
  {
    title: "Support Individuals Attain Their Full Potentials",
  },
  {
    title: "Fostering Innovation & Creativity",
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
    desc: "IGTA was birthed 10 years ago by a renowed team of educators who had a revolutionary idea to offer a plaform that brings individuals seeking for carreer growth knowledge and professionals ready for mentorship and training of talents together for free. IGTA has two (2) head offices in Canada and Cameroon and three (3) operational offices in Germany, UAE and Nigeria.  Our mission is to create an internationally accessible plaform that provides training and resources to empowers everyone from any part of the world sustainably and affordably. Over 50000 students in more than 20 countries trained, with continuous demand of a new and easily accessible way to deliver education and trainings. This revelation sparked a mission to make lifelong learning more equitable and inclusive. We have consistently implemented different trainings that spans accross individual personal development and organization career advancement.",
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
  "Student",
  "Facilitator",
  "Coordinator",
  "Trainer",
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
    title: "Profile",
    icon: <FaArrowsTurnToDots />,
    link: "/profile",
    slug: "profile",
  },
  {
    title: "Notes",
    icon: <LuBookOpenCheck />,
    link: "/notes",
    slug: "notes",
  },
  {
    title: "Events",
    icon: <FaCalendarDay />,
    link: "/viewevents",
    slug: "viewevents",
  },
  // {
  //   title: "Complaints",
  //   icon: <TfiWrite />,
  //   link: "/complaints",
  //   slug: "complaints",
  // },
  // {
  //   title: "Profile",
  //   icon: <CgProfile />,
  //   link: "/profile",
  //   slug: "profile",
  // },
];

export const adminTabsLink = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    link: "/admin",
    slug: "admin",
  },
  {
    title: "All Users",
    icon: <FaArrowsTurnToDots />,
    link: "/admin/users",
    slug: "users",
  },
  {
    title: "Events",
    icon: <FaCalendarDay />,
    link: "/admin/events",
    slug: "events",
  },
  {
    title: "Trainings",
    icon: <TfiWrite />,
    link: "/admin/trainings",
    slug: "trainings",
  },
  {
    title: "Notes",
    icon: <LuBookOpenCheck />,
    link: "/admin/notes",
    slug: "notes",
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    link: "/admin/profile",
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
    desc: "IGTA Facilitator Canada/IGTA USA Ambassador",
    img: "/adelina.jpeg",
  },
  {
    name: "Ghislain Nde Fosah, Germany",
    desc: "IGTA Ambassador for Europe",
    img: "/forsab.jpg",
  },
  {
    name: "Lolia Apiriala Atedoghu",
    desc: "IGTA International Secretary",
    img: "/apiriala.jpg",
  },
  {
    name: "Ngum Mirabelle. (Yaoundé, Cameroon)",
    desc: "Teacher, IGTA Aministrative Secretary",
    img: "/mirabelle.jpg",
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
    name: "PAUL BAU MOKI MOKI MOTITI",
    desc: "IGTA Facilitator Dubai",
    img: "/paul.jpeg",
  },
  {
    name: "SHOLAJA SULAIMON OLADITI",
    desc: "IGTA Facilitator Ewekoro, Ogun State",
    img: "/sholaja.jpeg",
  },
  {
    name: "Vukwusi Lawrence Chongong",
    desc: "IGTA Facilitator Cameroon",
    img: "/law.jpeg",
  },
  {
    name: "Zainab Oiza Yusuf",
    desc: "IGTA Facilitator Kaduna",
    img: "/yusuf.jpeg",
  },
  {
    name: "Mercy Ukamaka Maryann Adah",
    desc: "IGTA Facilitator Benin City",
    img: "/mercy.jpeg",
  },
  {
    name: "Adah Mondaddy Monday",
    desc: "IGTA Facilitator Benin City",
    img: "/monday.jpeg",
  },
  {
    name: "OKOSUN ELIJAH",
    desc: "IGTA Facilitator Edo State",
    img: "/okosun.jpeg",
  },
  {
    name: "Godwin Iliya Mathias",
    desc: "IGTA Facilitator",
    img: "/godwin.jpeg",
  },
  {
    name: "Dr. Odeh Emmanuel Udama",
    desc: "IGTA Facilitator - Uyo",
    img: "/udama.jpeg",
  },
  {
    name: "Tetteh David Adey ",
    desc: "IGTA Facilitator Accra-Ghana ",
    img: "/tetteh.jpeg",
  },
  {
    name: "Victor John K.K Phd",
    desc: "IGTA Facilitator/Trainer - Texas",
    img: "/victor.jpeg",
  },
  {
    name: "Dr. Daniel A. Dwede",
    desc: "IGTA Facilitator/Trainer - Liberia",
    img: "/daniel.jpeg",
  },
  {
    name: "Yusuf Moshood Olayinka",
    desc: "IGTA Coordinator/Facilitator - Lagos",
    img: "/moshood.jpeg",
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
    name: "Mrs. Olabode Afolake Olayinka",
    desc: "IGTA Coordinator/Consultant - Lagos State",
    img: "/olabode.jpeg",
  },
  {
    name: "Engr. Aminu, K. A",
    desc: "IGTA Cordinator Lagos State",
    img: "/aminu.jpg",
  },
  {
    name: "Bebenimibo Seyiefa Esther",
    desc: "IGTA Coordinator Abuja",
    img: "/bebenimibo.jpg",
  },
  {
    name: "Jullian Achieng Oduor",
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
  {
    name: "Amb. Sabina Nanyonge Ngando",
    desc: "Administrator, Director IGTA",
    img: "/sabina.jpg",
  },
];

export const results = [
  { name: "Hammed Ganiyat Olawumi", score: "94%" }, 
  { name: "Ogbonnaya Ikechukwu Charles", score: "92%" }, 
  { name: "Sambo Sambo Balarabe", score: "91%" }, 
  { name: "Airhen Sophia Osayemwenre", score: "91%" }, 
  { name: "Umanah Iboro Josiah", score: "90%" }, 
  { name: "Yusuf Oiza Zainab", score: "89%" }, 
  { name: "Yusuf Ismail Adubazi", score: "88.5%" }, 
  { name: "Tumban Leslie Yeban", score: "88%" }, 
  { name: "Iheduru Ogemdi Paul", score: "87%" }, 
  { name: "Usman Shehu Abdulrazak", score: "86%" }, 
  { name: "Aiki Simbiat Folashade", score: "85%" }, 
  { name: "Okunfolami Temidayo Bright", score: "84%" }, 
  { name: "Fombo Blessing Boma", score: "84%" }, 
  { name: "Usman Hajara Shehu", score: "83%" }, 
  { name: "Engr. Olowo Sheriff Olamide", score: "83.5%" }, 
  { name: "Itepu Victor Ifedon", score: "82%" }, 
  { name: "Ahmed Musa Rilwanu", score: "81%" }, 
  { name: "Owolabi Kabir", score: "80%" }, 
  { name: "Ahmed Fatima Muhammed Tukur", score: "79.5%" }, 
  { name: "Toboat Ahmed", score: "79%" }, 
  { name: "Lawan Abdullahi Banjaba", score: "79%" }, 
  { name: "Muhammad Muhammad Lawan", score: "78%" }, 
  { name: "Ogunnaike Abba Olamiotan", score: "77.5%" }, 
  { name: "Umanhonlen Ebinehita", score: "76%" }, 
  { name: "Engr. Afolabi Akinola Abraham", score: "75%" }, 
  { name: "Muhammad Nasir Adamu", score: "74%" }, 
  { name: "Musa Ummisalam", score: "73%" }, 
  { name: "Adams Andrew Attah", score: "71%" }, 
  { name: "Dahiru Murtala Mohammed", score: "70%" }, 
  { name: "Mutuku Norah Kamene", score: "69.5%" }, 
  { name: "Aiyanyor Magdalene", score: "69%" }, 
  { name: "Onyebuchi James Chukwuemeka", score: "69%" }, 
  { name: "Molumo Akpoemi Richard", score: "69%" }, 
  { name: "Egbomeade Randy Efe", score: "69%" }, 
  { name: "Garba Amina Ali", score: "68.5%" }, 
  { name: "Idibie Emmanuel Emuesiri", score: "67.5%" }, 
  { name: "Sheriff Abdullahi", score: "66.5%" }, 
  { name: "Ikeaba Chinedu Augustine", score: "66%" }, 
  { name: "Anagaba Rita", score: "65.5%" }, 
  { name: "Duruvwe Okiemute Anderson", score: "65%" }, 
  { name: "Mohammed Usman", score: "65%" }, 
  { name: "Abdulwahab Abdulmalik Akinwale", score: "64%" }, 
  { name: "Agbani Memmiten", score: "64%" }, 
  { name: "Porbeni Augustine Izon-Ebi", score: "63.5%" }, 
  { name: "Onyeanusi Elizabeth Chiamago", score: "63.5%" }, 
  { name: "Essien Akaninyene Udo", score: "63%" }, 
  { name: "Ebinehita Umanhonlen", score: "62.5%" }, 
  { name: "Hussaini Abdullahi", score: "62.5%" }, 
  { name: "Abdulkadir Muritala Olarewaju", score: "62.5%" }, 
  { name: "Jimoh Abdulrahman Adekunle", score: "62%" }, 
  { name: "Yusuf Bilkis", score: "61%" }, 
  { name: "Onyeso Jackson Alozie", score: "61%" }, 
  { name: "Mbanaso Ann", score: "60.5%" }, 
  { name: "Aiyedun Abdulrahman Olanrewaju", score: "60%" }, 
  { name: "Ismail Bashirat Oyiza", score: "59.5%" }, 
  { name: "Oyebola Sunday Olawale", score: "59.5%" }, 
  { name: "Godday Queency Dabor", score: "59%" }, 
  { name: "Eburu Kelly Akpoyovwi", score: "58%" }, 
  { name: "Ifioko Goodluck", score: "57%" }, 
  { name: "Essien Mondenghe Akaninyene", score: "56.5%" }, 
  { name: "Taiwo Abdulrazaq Ohinoyi", score: "56%" }, 
  { name: "Popoola Oluwatomisin", score: "56%" }, 
  { name: "Ogunsanya Babatola Gabriel", score: "55.5%" }, 
  { name: "Nwaefulu Darlington Nwacheli", score: "55%" }, 
  { name: "Adebo Ugochi", score: "54%" }, 
  { name: "Talibi Lateef Olawale", score: "53%" }, 
  { name: "Oluwatomisin Popoola", score: "52%" }, 
  { name: "Omeili Ifeanyi", score: "51" }, 
  { name: "Onodjaimue A. Charity", score: "50" }
];

export const oldResults1 = [
  { name: "FOMBO BLESSING BOMA", score: "97%" },
  { name: "OMAYE UGBEDE", score: "90%" },
  { name: "ENGR. IBRAHIM BALA", score: "89%" },
  { name: "DAHIRU MURTALA MOHAMMED", score: "88%" },
  { name: "HADIZA MOHAMMED", score: "87%" },
  { name: "MBADIWE SAMUEL KANU", score: "86%" },
  { name: "LOLIA APIRIALA ATEDOGHU", score: "83%" },
  { name: "ABDULRAHMAN HAFSAT TITILADE", score: "82%" },
  { name: "ENGR NELSON UDIM SUNDAY", score: "80%" },
  { name: "SHOLAJA SULAIMON", score: "79%" },
  { name: "ENGR. OLOWO SHERIFF OLAMIDE", score: "79%" },
  { name: "NGUM MIRABELLE", score: "78%" },
  { name: "OWANIKIN AJOKE MORENIKE", score: "77%" },
  { name: "CHIMDIKEH EMMANUEL EZEH", score: "77%" },
  { name: "ODEH, EMMANUEL UDAMA", score: "76%" },
  { name: "NAME: ZAMANI ZACHARIAH ZIGWAI", score: "75%" },
  { name: "ADEBAYO SAMSON SEYI", score: "74%" },
  { name: "ESV KERUWOLE KAFAYAT", score: "70%" },
  { name: "MERCY OTHUKE OZAKPLOR", score: "70%" },
  { name: "UMANAH IBORO JOSIAH", score: "70%" },
  { name: "NKWOCHA KELECHI THANKGOD", score: "69%" },
  { name: "OKHARUA OHIOZIO JULIET", score: "68%" },
  { name: "SHITTU AMIDU OLAMILEKAN", score: "67%" },
  { name: "SHOLAJA SULAIMON", score: "66%" },
  { name: "ISMAIL GBOLAHAN BUSARI", score: "66%" },
  { name: "YUSUF MOSHOOD OLAYINKA", score: "65%" },
  { name: "ZAMANI DONALD ISHAYA", score: "65%" },
  { name: "ADAMS SULUKA OLALEKAN", score: "64%" },
  { name: "BABALOLA OLUSEGUN DAVID", score: "64%" },
  { name: "ENGR. GODWIN A ADOGA", score: "63%" },
  { name: "ERNEST ABULIMEN OKOH", score: "62%" },
  { name: "TABOTNDIP ASHU PRINCETON", score: "61%" },
  { name: "ISOLA ABEL AYOTUNDE", score: "60%" },
  { name: "ADELEYE ADETOKUNBO THOMAS", score: "60%" },
  { name: "OSHIOKPEKHAI ANDREW AFEBUAMHE", score: "59%" },
  { name: "IKELUKA UCHECHUKWU EMEKA", score: "59%" },
  { name: "AKPALAKPA A JAMES", score: "58%" },
  { name: "GOWAP ROTJI INUWA", score: "58%" },
  { name: "VINCENT UBUWERE", score: "55%" },
  { name: "UCHE PEACE EZIUZO UMEUKEJE", score: "54%" },
  { name: "IME NYONG EYO", score: "52%" },
];

export const oldResults = [
  { name: "SUNDAY VICTORIA EMMANUEL", score: "99%" },
  { name: "Abdulrahman Hafsat Titilade", score: "95%" },
  { name: "ITOYAH ADESUA ETEMINI AGATHA", score: "94%" },
  { name: "Ugbeni Osemoahu Gregory", score: "90%" },
  { name: "Baghalo Bridget Videkin", score: "88%" },
  { name: "AFOLABI AKINOLA ABRAHAM", score: "88%" },
  { name: "Nwamanah Chukwumah Clement", score: "88%" },
  { name: "Etumnu Nora Chinaza", score: "87.5%" },
  { name: "Damulak Edwina Alexandra", score: "87%" },
  { name: "ALABI EMMANUEL SEGUN", score: "87%" },
  { name: "Aderemi Love Oluwatosin", score: "86%" },
  { name: "Ashiru Ayanwale Akeem", score: "86%" },
  { name: "Ojeniran Josiah Ifeoluwa", score: "86%" },
  { name: "MORDI VERA", score: "86%" },
  { name: "Bassey Bassey Eyo", score: "86%" },
  { name: "YUNUSA SALIM", score: "86%" },
  { name: "Oduh Benson", score: "85.5%" },
  { name: "Adamu Muhammad Nasir", score: "85.5%" },
  { name: "MASSODIH JOHN UYAH", score: "85%" },
  { name: "Ngum Mirabelle", score: "85%" },
  { name: "Adekunle Basirat Tunrayo", score: "85%" },
  { name: "Olisenekwu Kingsley", score: "85%" },
  { name: "Afolabi Tejumojesu Rhoda", score: "84%" },
  { name: "Adah Monday Mondaddy", score: "84%" },
  { name: "JIMOH KABIRU TUNDE", score: "84%" },
  { name: "Mrakpor Kparobor Daniel", score: "84%" },
  { name: "MBAGWU MICHAEL", score: "83%" },
  { name: "Dahiru Murtala Mohammed", score: "83%" },
  { name: "DOMINIC PETER ENOCH", score: "83%" },
  { name: "Onemayin Daniel Yomi", score: "81.5%" },
  { name: "Onine Azuka Alex", score: "81%" },
  { name: "Olaleye Donald Oluwajubelo", score: "81%" },
  { name: "Tumaku Agbeko Charles", score: "80%" },
  { name: "Yakubu samaila", score: "80%" },
  { name: "ITOYAH AYEMHERE JUDE", score: "80%" },
  { name: "DANIEL IMOH ANIETIE", score: "79%" },
  { name: "SHITTU AMIDU OLAMILEKAN", score: "78%" },
  { name: "OMOGBAI ODION MARTHA", score: "77.5%" },
  { name: "Emmanuel Gabriel Subewope", score: "77.5%" },
  { name: "Adeboye Oluwagbemiga Kolawole", score: "77.5%" },
  { name: "OMOGBAI ODION MARTHA", score: "77.5%" },
  { name: "Akorede Ramayana Oluwatoyin", score: "76%" },
  { name: "Anosike Sunday Uchechukwu", score: "76%" },
  { name: "Mathias Aniyitiya", score: "76%" },
  { name: "Peter Aniebiet Bassey", score: "75%" },
  { name: "IZEKOR ISOKEN", score: "74%" },
  { name: "Raifu Mutmohinat Titilayo", score: "74%" },
  { name: "Bakura Hassan Mustapha", score: "74%" },
  { name: "Paul Patience Otuomasirichi", score: "74%" },
  { name: "Young Dagoapu Charis", score: "74%" },
  { name: "EZE UKAMAKA MARYANN", score: "74%" },
  { name: "OYEBADE TOLULOPE TEMITAYO", score: "73%" },
  { name: "Ngushual Gloria Irmya", score: "73%" },
  { name: "Stephen Rebecca", score: "73%" },
  { name: "GWOM ELISHA HABILA", score: "72%" },
  { name: "AFONJA Aderemi Benjamin", score: "72%" },
  { name: "KUROEKIGHA MOSES DUATEI", score: "71%" },
  { name: "OSHUNTUYI  BABATUNDE AYODELE", score: "70%" },
  { name: "Vukwusi Lawrence C", score: "68.5%" },
  { name: "Sunday Zachariah", score: "68%" },
  { name: "OYOYO ORORO KATE", score: "67%" },
  { name: "Seriki Babatunde Rotim", score: "67%" },
  { name: "Musa Oluwayomi Simbiat", score: "67%" },
  { name: "Bitrus Benjamin", score: "67%" },
  { name: "ORIOGU ANTHONY FRIDAY", score: "67%" },
  { name: "Ukpere Chukwuyem", score: "67%" },
  { name: "EHIDIAMHEN EROMOSELE AUGUSTINE", score: "67%" },
  { name: "Irhiawo Aisha Evelyn", score: "67%" },
  { name: "Ekerebi Gift Tamarapreye", score: "67%" },
  { name: "Joseph Asher Uchenna", score: "67%" },
  { name: "Stephen Daniel", score: "67%" },
  { name: "OMEH CHARITY", score: "67%" },
  { name: "Njoku Cecilia", score: "67%" },
  { name: "Yusuf Yunusa", score: "66.5%" },
  { name: "ODUH EFEOGHENE PRECIOUS", score: "66.5%" },
  { name: "Ashibel Israel Emmanuel", score: "66.5%" },
  { name: "Onuigbo Esther Chiamaka", score: "66.5%" },
  { name: "OGOOLUWA PATRICK OLAMIPOSI", score: "66.5%" },
  { name: "Ababio Macsally Ernest", score: "65.5%" },
  { name: "Gbekor Joshua Eyram", score: "65.5%" },
  { name: "ASHIRU Ayanwale Akeem", score: "65%" },
  { name: "Galabu Musa", score: "65%" },
  { name: "Adeleye Thomas Taiwo", score: "64%" },
  { name: "Dauda Funsho Ahmed", score: "64%" },
  { name: "ISOLA ABEL AYOTUNDE", score: "64%" },
  { name: "Oko Stephen Ogbonna", score: "64%" },
  { name: "Amaechi Stephanie Chioma", score: "64%" },
  { name: "MAXWELL KELECHI VINCENT", score: "64%" },
  { name: "CHIBUOKE STANLEY UCHECHUKWU", score: "64%" },
  { name: "Itatu Elizabeth", score: "64%" },
  { name: "Asimole Rosemary Kayorochi", score: "64%" },
  { name: "Gulkawi Emmanuel Binwi", score: "64%" },
  { name: "Lateef Mutiu Abiodun", score: "64%" },
  { name: "AJAH AGNES JONATHAN", score: "63.5%" },
  { name: "ADEGOKE BABARINDE BABAFEMI", score: "63.5%" },
  { name: "UBAH IFEANYI CHRISTOPHER", score: "62%" },
  { name: "Amusan Opeyemi Joseph", score: "62%" },
  { name: "Richard Elizabeth Oyintarela", score: "61%" },
  { name: "Ahgu Emmanuel Barnabas", score: "60%" },
  { name: "OMOKHODION OSEMUDIAMEN ISAIAH", score: "60%" },
  { name: "Umeokeke Ogechukwu James", score: "59%" },
  { name: "Nwakonuche John Udeoganyala", score: "59%" },
  { name: "KWAGHDOO ISRAEL", score: "58.5%" },
  { name: "Abubakar Jamiu Adekilekun", score: "58%" },
  { name: "Agala Priscilla Owanate", score: "58%" },
  { name: "Olugbuyi Adeogo Emmanuel", score: "58%" },
  { name: "JACOB EBIMOBOERE", score: "58%" },
  { name: "Muhammad Zakari Sambo", score: "56%" },
  { name: "Mudasiru Oladipupo Alade", score: "56%" },
  { name: "Abel Benjamin Ugochukwu", score: "55.5%" },
  { name: "Ibe Eke Kalu", score: "55%" },
  { name: "Okoronkwo Chukwuemeka Joseph", score: "55%" },
  { name: "HAMZAT IDRIS OPEYEMI", score: "55%" },
  { name: "Ugboho Soonenter Scholastica", score: "54.5%" },
  { name: "Idokoh Ugochukwu Caleb", score: "54%" },
  { name: "OSHUNTUYI  BABATUNDE AYODELE", score: "53%" },
  { name: "Vivian Bright", score: "53%" },
  { name: "Mwilambwe Ilunga Nelly", score: "52%" },
  { name: "Chado Elizabeth Sunday", score: "51%" },
  { name: "Alpha Anthony Yaya Mansaray", score: "50.5%" },
  { name: "Allison Deborah", score: "50%" },
  { name: "ONI SUNDAY OLUWATOSIN", score: "50%" },
  { name: "ADHEKOVWIGHO EMUEJEVOKE", score: "50%" },
];
