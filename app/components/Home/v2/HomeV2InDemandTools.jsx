"use client";

import Link from "next/link";
import "./HomeV2InDemandTools.css";

/** Unique tools from legacy InDemandTools (row1 + row2 + row3). */
const TOOLS = [
  {
    name: "Angular",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "GitHub",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    link: "/courses/programming-languages",
  },
  {
    name: "Vue.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "Figma",
    icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    link: "/courses/database",
  },
  {
    name: "Terraform",
    icon: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
    link: "/courses/cloud-and-devops",
  },
  {
    name: "Power Automate",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Power_Automate.svg",
    link: "/courses/automation",
  },
  {
    name: "Power BI",
    icon: "https://cdn.svgporn.com/logos/microsoft-power-bi.svg",
    link: "/courses/ai-and-data-science",
  },
  {
    name: "GraphQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "Kubernetes",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
    link: "/courses/cloud-and-devops",
  },
  {
    name: "AWS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    link: "/courses/cloud-and-devops",
  },
  {
    name: "Azure",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    link: "/courses/cloud-and-devops",
  },
  {
    name: "Jenkins",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
    link: "/courses/cloud-and-devops",
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    link: "/courses/cloud-and-devops",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "Tableau",
    icon: "/images/home/tableau_logo.svg",
    link: "/courses/ai-and-data-science",
  },
  {
    name: "SharePoint",
    icon: "/images/home/sharepoint_logo1.png",
    link: "/courses/fullstack-development",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "Redis",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
    link: "/courses/database",
  },
  {
    name: "Data Engineering",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apachespark/apachespark-original.svg",
    link: "/courses/data-engineering",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "Tailwind",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "TensorFlow",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
    link: "/courses/ai-and-data-science",
  },
  {
    name: "PyTorch",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
    link: "/courses/ai-and-data-science",
  },
  {
    name: "Flutter",
    icon: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    link: "/courses/programming-languages",
  },
  {
    name: "JavaScript",
    icon: "/images/home/js_logo.jpg",
    link: "/courses/programming-languages",
  },
  {
    name: "Excel",
    icon: "/images/home/excel_logo.svg",
    link: "/courses/ai-and-data-science",
  },
  {
    name: "Selenium",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg",
    link: "/courses/fullstack-development",
  },
  {
    name: "LambdaTest KaneAI",
    icon: "/images/home/tools/lambdatest.svg",
    link: "/courses/software-testing",
  },
  {
    name: "ContextQA",
    icon: "/images/home/tools/contextqa.png",
    link: "/courses/software-testing",
  },
  {
    name: "Katalon",
    icon: "/images/home/tools/katalon.svg",
    link: "/courses/software-testing",
  },
  {
    name: "mabl",
    icon: "/images/home/tools/mabl.png",
    link: "/courses/software-testing",
  },
  {
    name: "BrowserStack",
    icon: "/images/home/tools/browserstack.svg",
    link: "/courses/software-testing",
  },
  {
    name: "AI and ML",
    icon: "/images/home/aiml_new.svg",
    link: "/courses/ai-and-data-science",
  },
  {
    name: "Gen AI",
    icon: "https://cdn.svgporn.com/logos/openai-icon.svg",
    link: "/courses/ai-and-data-science",
  },
];

const MID = Math.ceil(TOOLS.length / 2);
const ROW1 = TOOLS.slice(0, MID);
const ROW2 = TOOLS.slice(MID);

/** Triple for seamless CSS loop (translate by 1/3). */
function loopTools(tools) {
  return [...tools, ...tools, ...tools];
}

function ToolCard({ tool }) {
  return (
    <Link
      href={tool.link}
      className="home-v2-tools-card"
      aria-label={`${tool.name} courses`}
    >
      <span className="home-v2-tools-icon-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tool.icon}
          alt=""
          className="home-v2-tools-icon"
          loading="lazy"
          draggable={false}
        />
      </span>
      <span className="home-v2-tools-name">{tool.name}</span>
    </Link>
  );
}

function MarqueeRow({ tools, direction, label }) {
  const items = loopTools(tools);

  return (
    <div className="home-v2-tools-marquee" aria-label={label}>
      <div
        className={`home-v2-tools-track home-v2-tools-track--${direction}`}
      >
        {items.map((tool, index) => (
          <ToolCard key={`${label}-${tool.name}-${index}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default function HomeV2InDemandTools() {
  return (
    <section
      className="home-v2-tools"
      aria-labelledby="home-v2-tools-title"
    >
      <div className="home-v2-tools-inner">
        <header className="home-v2-tools-head">
          <h2 id="home-v2-tools-title" className="home-v2-tools-title">
            In-Demand Tools You’ll Master.
          </h2>
        </header>

        <div className="home-v2-tools-rows">
          <MarqueeRow
            tools={ROW1}
            direction="right"
            label="Tools row 1"
          />
          <MarqueeRow
            tools={ROW2}
            direction="left"
            label="Tools row 2"
          />
        </div>
      </div>
    </section>
  );
}
