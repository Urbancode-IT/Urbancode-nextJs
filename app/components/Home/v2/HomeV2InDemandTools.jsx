"use client";

import Link from "next/link";
import "./HomeV2InDemandTools.css";

const T = "/images/home/tools";

/** Unique tools from legacy InDemandTools (row1 + row2 + row3). */
const TOOLS = [
  { name: "Angular", icon: `${T}/angular.svg`, link: "/courses/fullstack-development" },
  { name: "GitHub", icon: `${T}/github.svg`, link: "/courses/fullstack-development" },
  { name: "React", icon: `${T}/react.svg`, link: "/courses/fullstack-development" },
  { name: "Python", icon: `${T}/python.svg`, link: "/courses/programming-languages" },
  { name: "Vue.js", icon: `${T}/vue.svg`, link: "/courses/fullstack-development" },
  { name: "Figma", icon: `${T}/figma.svg`, link: "/courses/ui-ux-designing" },
  { name: "MongoDB", icon: `${T}/mongodb.svg`, link: "/courses/fullstack-development" },
  { name: "Terraform", icon: `${T}/terraform.svg`, link: "/courses/cloud-and-devops" },
  { name: "Power Automate", icon: `${T}/power-automate.svg`, link: "/courses/ai-and-data-science" },
  { name: "Power BI", icon: `${T}/power-bi.svg`, link: "/courses/ai-and-data-science" },
  { name: "GraphQL", icon: `${T}/graphql.svg`, link: "/courses/fullstack-development" },
  { name: "JSON", icon: `${T}/json.svg`, link: "/courses/fullstack-development" },
  { name: "Kubernetes", icon: `${T}/kubernetes.svg`, link: "/courses/cloud-and-devops" },
  { name: "AWS", icon: `${T}/aws.svg`, link: "/courses/cloud-and-devops" },
  { name: "Azure", icon: `${T}/azure.svg`, link: "/courses/cloud-and-devops" },
  { name: "Jenkins", icon: `${T}/jenkins.svg`, link: "/courses/cloud-and-devops" },
  { name: "Docker", icon: `${T}/docker.svg`, link: "/courses/cloud-and-devops" },
  { name: "Postman", icon: `${T}/postman.svg`, link: "/courses/fullstack-development" },
  { name: "Tableau", icon: "/images/home/tableau_logo.svg", link: "/courses/ai-and-data-science" },
  { name: "SharePoint", icon: "/images/home/sharepoint_logo1.png", link: "/courses/fullstack-development" },
  { name: "Node.js", icon: `${T}/nodejs.svg`, link: "/courses/fullstack-development" },
  { name: "Redis", icon: `${T}/redis.svg`, link: "/courses/fullstack-development" },
  { name: "Data Engineering", icon: `${T}/spark.svg`, link: "/courses/data-engineering" },
  { name: "Express", icon: `${T}/express.svg`, link: "/courses/fullstack-development" },
  { name: "Tailwind", icon: `${T}/tailwind.svg`, link: "/courses/fullstack-development" },
  { name: "TensorFlow", icon: `${T}/tensorflow.svg`, link: "/courses/ai-and-data-science" },
  { name: "PyTorch", icon: `${T}/pytorch.svg`, link: "/courses/ai-and-data-science" },
  { name: "Flutter", icon: `${T}/flutter.svg`, link: "/courses/app-development" },
  { name: "Java", icon: `${T}/java.svg`, link: "/courses/programming-languages" },
  { name: "JavaScript", icon: "/images/home/js_logo.jpg", link: "/courses/programming-languages" },
  { name: "Excel", icon: "/images/home/excel_logo.svg", link: "/courses/ai-and-data-science" },
  { name: "Selenium", icon: `${T}/selenium.svg`, link: "/courses/software-testing" },
  { name: "LambdaTest KaneAI", icon: `${T}/lambdatest.svg`, link: "/courses/software-testing" },
  { name: "ContextQA", icon: `${T}/contextqa.png`, link: "/courses/software-testing" },
  { name: "Katalon", icon: `${T}/katalon.svg`, link: "/courses/software-testing" },
  { name: "mabl", icon: `${T}/mabl.png`, link: "/courses/software-testing" },
  { name: "BrowserStack", icon: `${T}/browserstack.svg`, link: "/courses/software-testing" },
  { name: "AI and ML", icon: "/images/home/aiml_new.svg", link: "/courses/ai-and-data-science" },
  { name: "Gen AI", icon: `${T}/openai.svg`, link: "/courses/ai-and-data-science" },
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
