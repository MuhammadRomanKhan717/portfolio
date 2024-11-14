import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Project data array
const projects = [
  {
    id: 1,
    name: "VIP Wholesale",
    href: "https://www.vipwholesaletexas.com/",
    imageSrc: require("../../src/projectsImage/vipWholesale.png"),
    used: "React Native, JavaScript, TypeScript, Responsive Design",
    description:
      "VIP Wholesale is an eCommerce app for in-store and wholesale shopping, offering easy browsing, ordering, bulk purchasing, and real-time inventory updates.",
  },
  {
    id: 2,
    name: "PLUS ONE DISTRIBUTION",
    href: "https://www.plusonedistro.com/",
    imageSrc: require("../../src/projectsImage/plusone.png"),
    used: "React Native,JavaScript, TypeScript,Responsive Design",
    description:
      "Plus One Distribution is an upcoming eCommerce app specializing in Nicotine Pouches, Smoke, Supplements, Vape Juice, IR, and Vaporizers, offering a seamless shopping experience for customers.",
  },
  {
    id: 3,
    name: "Olga Music 528",
    href: "https://olgafrance.com/olga-music-528/",
    imageSrc: require("../../src/projectsImage/olgaMusic.png"),
    used: "React Native, JavaScript, TypeScript",
    description:
      "The Olga Music 528 app features calming music tuned to the 528 Hz “Love frequency,” designed to promote healing and relaxation. Created by Olga France, the app provides a soothing listening experience to enhance well-being.",
  },
  {
    id: 4,
    name: "The Budget Bible",
    href: "https://www.thebudgetbible.com/",
    imageSrc: require("../../src/projectsImage/budget.png"),
    used: "React Native, JavaScript,",
    description:
      "Track expenses, set budgets, and reach financial goals effortlessly with Budget Bible.",
  },
  {
    id: 5,
    name: "My books App",
    href: "https://github.com/MuhammadRomanKhan717/My-Book-App",
    imageSrc: require("../../src/projectsImage/myBookApp.png"),
    used: "React Native, JavaScript",
    description:
      "I have experience with a book app that facilitates online book purchases.",
  },
  {
    id: 6,
    name: "TejaraSpace",
    href: "#",
    imageSrc: require("../../src/projectsImage/tejara.png"),
    used: "React Native ,JavaScript,",
    description:
      "TejaraSpace is an eCommerce platform that helps businesses manage online stores, inventory, and orders, offering a seamless experience for both sellers and buyers.",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(4);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const showMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 4); // Show 4 more projects each time
  };

  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href} target="_blank">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="mt-16 flex justify-center">
            <button className="btn btn-outline" onClick={showMoreProjects}>
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
