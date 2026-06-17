//app/courses/[categorySlug]/[courseSlug]/SingleCoursepage.jsx
'use client';
import React from "react";
import { FaChild, FaUserGraduate, FaChalkboardTeacher, FaGamepad, FaLanguage, FaPuzzlePiece, FaLightbulb, FaCertificate } from "react-icons/fa";
import coursesData from "../coursesData";
import './styles.css';
import { newCourseData } from "@/app/data/newCourseData";
import NewInternalCourse from "@/app/components/CourseLayout/NewInternalCourse";

const kidsHighlights = [
  { icon: <FaChild />, label: "Age Group", value: "7 - 14 Years" },
  { icon: <FaUserGraduate />, label: "Coaches", value: "Kid-Friendly Mentors" },
  { icon: <FaChalkboardTeacher />, label: "Class mode", value: "Online/Offline" },
  { icon: <FaGamepad />, label: "Method", value: "Game-Based Learning" },
  { icon: <FaLanguage />, label: "Language", value: "Tamil/English" },
  { icon: <FaPuzzlePiece />, label: "Activities", value: "Fun Puzzles & Games" },
  { icon: <FaLightbulb />, label: "Focus", value: "Creative Thinking" },
  { icon: <FaCertificate />, label: "Certificate", value: "Supercoder Certificate" },
];

const newCourseMapping = {
  "mern-stack": "mern-stack",
  "mean-stack": "mean-stack",
  ".net-angular": "dotnet-angular",
  "data-analytics": "data-analytics",
  "ai-and-ml": "ai-ml",
  "aws-devops": "aws-devops",
  "automation-testing": "automation-testing",
};

// Tool matching logic based on course title keywords
const getToolsForCourse = (title) => {
    const t = title.toLowerCase();
    const defaultTools = newCourseData["mern-stack"]?.toolsData || [];
    
    if (t.includes("power automate") || t.includes("automate flow")) {
        return [
            { id: 1, name: "Power Automate", icon: "https://api.iconify.design/simple-icons:powerautomate.svg?color=%230066FF" },
            { id: 2, name: "SharePoint", icon: "https://api.iconify.design/simple-icons:microsoftsharepoint.svg?color=%23036C70" },
            { id: 3, name: "Office 365", icon: "https://api.iconify.design/simple-icons:microsoft.svg?color=%2300A4EF" },
            { id: 4, name: "MS Teams", icon: "https://api.iconify.design/simple-icons:microsoftteams.svg?color=%236264A7" },
            { id: 5, name: "AI Builder", icon: "https://api.iconify.design/simple-icons:microsoft.svg?color=%2300A4EF" },
            { id: 6, name: "Excel Online", icon: "https://api.iconify.design/simple-icons:microsoftexcel.svg?color=%23217346" },
            { id: 7, name: "Outlook", icon: "https://api.iconify.design/simple-icons:microsoftoutlook.svg?color=%230072C6" }
        ];
    }
    if (t.includes("sharepoint")) {
        return [
            { id: 1, name: "SharePoint", icon: "https://api.iconify.design/simple-icons:microsoftsharepoint.svg?color=%23036C70" },
            { id: 2, name: "Power Automate", icon: "https://api.iconify.design/simple-icons:powerautomate.svg?color=%230066FF" },
            { id: 3, name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { id: 4, name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { id: 5, name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { id: 6, name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { id: 7, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ];
    }
    if (t.includes("salesforce")) {
        return [
            { id: 1, name: "Salesforce", icon: "https://api.iconify.design/simple-icons:salesforce.svg?color=%2300A1E0" },
            { id: 2, name: "Apex", icon: "https://api.iconify.design/simple-icons:salesforce.svg?color=%2300A1E0" },
            { id: 3, name: "LWC", icon: "https://api.iconify.design/simple-icons:salesforce.svg?color=%2300A1E0" },
            { id: 4, name: "Visualforce", icon: "https://api.iconify.design/simple-icons:salesforce.svg?color=%2300A1E0" },
            { id: 5, name: "Flow Builder", icon: "https://api.iconify.design/simple-icons:salesforce.svg?color=%2300A1E0" },
            { id: 6, name: "Salesforce CLI", icon: "https://api.iconify.design/simple-icons:salesforce.svg?color=%2300A1E0" },
            { id: 7, name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { id: 8, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ];
    }
    if (t.includes("react native") || t.includes("mobile app")) {
        return [
            { id: 1, name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { id: 2, name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
            { id: 3, name: "Android Studio", icon: "https://api.iconify.design/simple-icons:androidstudio.svg?color=%233DDC84" },
            { id: 4, name: "Xcode", icon: "https://api.iconify.design/simple-icons:xcode.svg?color=%231575F9" },
            { id: 5, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { id: 6, name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { id: 7, name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { id: 8, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ];
    }
    if (t.includes("testing") || t.includes("qa") || t.includes("selenium")) {
        return [
            { id: 1, name: "Selenium", icon: "https://api.iconify.design/simple-icons:selenium.svg?color=%2343B02A" },
            { id: 2, name: "JUnit", icon: "https://api.iconify.design/simple-icons:junit5.svg?color=%2325A162" },
            { id: 3, name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { id: 4, name: "Postman", icon: "https://api.iconify.design/simple-icons:postman.svg?color=%23FF6C37" },
            { id: 5, name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
            { id: 6, name: "Maven", icon: "https://api.iconify.design/simple-icons:apachemaven.svg?color=%23C71A22" },
            { id: 7, name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { id: 8, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ];
    }
    if (t.includes("devops") || t.includes("aws") || t.includes("cloud") || t.includes("kubernetes") || t.includes("docker")) {
        return [
            { id: 1, name: "AWS", icon: "https://api.iconify.design/simple-icons:amazonaws.svg?color=%23232F3E" },
            { id: 2, name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { id: 3, name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { id: 4, name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
            { id: 5, name: "Terraform", icon: "https://api.iconify.design/simple-icons:terraform.svg?color=%23844FBA" },
            { id: 6, name: "Ansible", icon: "https://api.iconify.design/simple-icons:ansible.svg?color=%23EE0000" },
            { id: 7, name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { id: 8, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ];
    }
    if (t.includes("ui/ux") || t.includes("ux design") || t.includes("figma") || t.includes("graphic") || t.includes("designing")) {
        return [
            { id: 1, name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { id: 2, name: "Adobe XD", icon: "https://api.iconify.design/simple-icons:adobexd.svg?color=%23FF61F6" },
            { id: 3, name: "Photoshop", icon: "https://cdn.jsdelivr.net/npm/simple-icons@10.0.0/icons/adobephotoshop.svg" },
            { id: 4, name: "Illustrator", icon: "https://cdn.jsdelivr.net/npm/simple-icons@10.0.0/icons/adobeillustrator.svg" },
            { id: 5, name: "Sketch", icon: "https://api.iconify.design/simple-icons:sketch.svg?color=%23F7B500" },
            { id: 6, name: "InVision", icon: "https://api.iconify.design/simple-icons:invision.svg?color=%23FF3366" }
        ];
    }
    if (t.includes("cyber") || t.includes("security") || t.includes("hacking") || t.includes("penetration")) {
        return [
            { id: 1, name: "Wireshark", icon: "https://api.iconify.design/simple-icons:wireshark.svg?color=%231679A7" },
            { id: 2, name: "Nmap", icon: "https://cdn.jsdelivr.net/npm/simple-icons@10.0.0/icons/linux.svg" },
            { id: 3, name: "Metasploit", icon: "https://api.iconify.design/simple-icons:metasploit.svg?color=%23000000" },
            { id: 4, name: "Burp Suite", icon: "https://api.iconify.design/simple-icons:portswigger.svg?color=%23FF6633" },
            { id: 5, name: "Kali Linux", icon: "https://api.iconify.design/simple-icons:kalilinux.svg?color=%23557C94" },
            { id: 6, name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { id: 7, name: "OWASP ZAP", icon: "https://api.iconify.design/simple-icons:owasp.svg?color=%23000000" }
        ];
    }
    if (t.includes("marketing") || t.includes("seo") || t.includes("search engine")) {
        return [
            { id: 1, name: "Analytics", icon: "https://api.iconify.design/simple-icons:googleanalytics.svg?color=%23E37400" },
            { id: 2, name: "Search Console", icon: "https://api.iconify.design/simple-icons:googlesearchconsole.svg?color=%234285F4" },
            { id: 3, name: "SEMrush", icon: "https://api.iconify.design/simple-icons:semrush.svg?color=%23F26F21" },
            { id: 4, name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
            { id: 5, name: "Mailchimp", icon: "https://api.iconify.design/simple-icons:mailchimp.svg?color=%23FFE01B" }
        ];
    }
    if (t.includes("medical") || t.includes("anatomy")) {
        return [
            { id: 1, name: "ICD-10", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
            { id: 2, name: "CPT Guides", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
            { id: 3, name: "HCPCS II", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
            { id: 4, name: "Anatomy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
            { id: 5, name: "Terminology", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" }
        ];
    }
    if (t.includes("english") || t.includes("spoken") || t.includes("communication") || t.includes("language") || t.includes("ielts") || t.includes("pte")) {
        return [
            { id: 1, name: "Grammar", icon: "https://api.iconify.design/simple-icons:grammarly.svg?color=%2311A683" },
            { id: 2, name: "Vocabulary", icon: "https://api.iconify.design/simple-icons:grammarly.svg?color=%2311A683" },
            { id: 3, name: "Pronunciation", icon: "https://api.iconify.design/simple-icons:grammarly.svg?color=%2311A683" },
            { id: 4, name: "Speaking", icon: "https://api.iconify.design/simple-icons:grammarly.svg?color=%2311A683" },
            { id: 5, name: "Writing", icon: "https://api.iconify.design/simple-icons:grammarly.svg?color=%2311A683" }
        ];
    }
    if (t.includes("angular")) {
        return [
            { id: 1, name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
            { id: 2, name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { id: 3, name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { id: 4, name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { id: 5, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { id: 6, name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { id: 7, name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { id: 8, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { id: 9, name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
        ];
    }
    if (t.includes("java full stack") || (t.includes("java") && !t.includes("javascript"))) {
        return [
            { id: 1, name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { id: 2, name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { id: 3, name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { id: 4, name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { id: 5, name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { id: 6, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { id: 7, name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { id: 8, name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { id: 9, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ];
    }
    if (t.includes("ai powered fullstack")) {
        return [
            { id: 1, name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { id: 2, name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { id: 3, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { id: 4, name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { id: 5, name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { id: 6, name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { id: 7, name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { id: 8, name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { id: 9, name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
            { id: 10, name: "ChatGPT", icon: "https://cdn.svgporn.com/logos/openai-icon.svg" },
            { id: 11, name: "GitHub Copilot", icon: "https://api.iconify.design/simple-icons:githubcopilot.svg?color=%23000000" },
            { id: 12, name: "Cursor", icon: "https://api.iconify.design/simple-icons:cursor.svg?color=%23000000" },
            { id: 13, name: "Claude", icon: "https://api.iconify.design/simple-icons:anthropic.svg" },
            { id: 15, name: "Vercel", icon: "https://api.iconify.design/simple-icons:vercel.svg?color=%23000000" },
            { id: 16, name: "Netlify", icon: "https://api.iconify.design/simple-icons:netlify.svg?color=%2300C7B7" },
        ];
    }
    if (t.includes("python for data analyst")) {
        return [
            { id: 1, name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { id: 2, name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { id: 3, name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
            { id: 4, name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
            { id: 5, name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
            { id: 8, name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { id: 9, name: "CSV", icon: "https://api.iconify.design/mdi:file-delimited.svg?color=%23219653" },
            { id: 10, name: "JSON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
        ];
    }
    if (t.includes("python") || t.includes("data") || t.includes("ai") || t.includes("machine")) {
        return [
            { id: 1, name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { id: 2, name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
            { id: 3, name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
            { id: 4, name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
            { id: 5, name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
            { id: 6, name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
            { id: 7, name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { id: 8, name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { id: 9, name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { id: 10, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ];
    }
    if (t.includes("c ") || t.includes("c++") || t.includes("dsa") || t.includes("structures")) {
        return [
            { id: 1, name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
            { id: 2, name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { id: 3, name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { id: 4, name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
            { id: 5, name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
            { id: 6, name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { id: 7, name: "GCC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gcc/gcc-original.svg" },
            { id: 8, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ];
    }
    if (t.includes("html") || t.includes("css")) {
        return [
            { id: 1, name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { id: 2, name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { id: 3, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { id: 4, name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { id: 5, name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { id: 6, name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { id: 7, name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { id: 8, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ];
    }
    
    return defaultTools;
};

export default function SingleCoursepage({ params }) {
  const { categorySlug, courseSlug } = params;

  const category = Object.entries(coursesData).find(
    ([key]) => key.toLowerCase().replace(/\s+/g, "-") === categorySlug
  )?.[1];

  if (!category) return <div>Category not found</div>;

  const course = category.courses.find(
    (c) => c && c.title && c.title.toLowerCase().replace(/\s+/g, "-") === courseSlug
  );

  if (!course) return <div>Course not found</div>;

  // Check if this course should use the directly mapped new layout data
  const newCourseKey = newCourseMapping[courseSlug];
  if (newCourseKey && categorySlug !== "kidz-space" && newCourseData[newCourseKey]) {
    const combinedData = {
      ...newCourseData[newCourseKey],
      batches: course.batches || newCourseData[newCourseKey].batches
    };
    return <NewInternalCourse data={combinedData} />;
  }

  // Use hero images from new internal course pages and shuffle based on title length
  const heroImages = [
    "/images/courses/z1.webp",
    "/images/courses/z2.webp",
    "/images/courses/z3.webp"
  ];
  const imageIndex = course.title.length % heroImages.length;
  const heroImage = heroImages[imageIndex];

  // Map the old course curriculum format to the new NewInternalCourse format
  const mappedCurriculum = (course.courseContentData || []).map((module, index) => {
    return {
      id: module.id || index + 1,
      title: module.title,
      content: (
        <ul className="mb-0 ps-3">
          {(module.items || []).map((subitem, i) => {
            if (typeof subitem === "string") {
              return <li key={i} className="mb-1 lh-base text-secondary">{subitem}</li>;
            }
            return (
              <li key={i} className="mb-2">
                <strong className="text-dark">{subitem.title}</strong>
                <ul className="mt-1 ps-3">
                  {(subitem.details || []).map((detail, di) => (
                    <li key={di} className="mb-1 text-secondary">{detail}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      )
    };
  });

  const transformedData = {
    heroData: {
      titleTop: "Advanced training in",
      highlightText: course.title,
      subtitle: course.aboutData?.content1 || course.desc,
      rating: course.rating || 4.5,
      reviewCount: `${course.students || 500}+`,
      totalStars: 5,
      image: course.img || heroImage,
      isLegacyImage: !!course.img,
      brochure: course.curriculumUrls?.[0]
    },
    highlightsData: categorySlug === "kidz-space" ? kidsHighlights : (newCourseData["mern-stack"]?.highlightsData || []),
    curriculumData: mappedCurriculum,
    toolsData: getToolsForCourse(course.title),
    faqData: newCourseData["mern-stack"]?.faqData || [],
    locked: course.locked,
    isKidsSpace: categorySlug === "kidz-space",
    batches: course.batches
  };

  return <NewInternalCourse data={transformedData} />;
}