import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
const features = [
  {
    name: "Age:",
    description: "27 years old",
    icon: CalendarIcon,
  },
  {
    name: "Email:",
    description: "romankhan03346869717@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Islamabad, Pakistan",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7">Get to know more</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                I specialize in creating intuitive and beautiful user interfaces
                using modern web technologies like React Native. With over 2
                years of experience in mobile app development, I am passionate
                about designing user experiences that make a real difference in
                people's lives. I focus on delivering high-quality,
                user-friendly mobile applications that provide seamless
                interactions, solve problems, and meet the unique needs of
                users. My goal is to blend creativity and functionality to build
                products that users love and enjoy using." Let me know if you'd
                like to make any changes!
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://fastly.picsum.photos/id/473/5000/3333.jpg?hmac=OrrE0aUqLbLCJ9PAlSn0dIRHjOnuuuev9IjuO3PGZf8"
            alt="Person"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className="text-2xl text-center font-bold tracking-tight">
                  Experience
                </h2>
                <p className="mt-3 list-item list-inside">
                  I have over 2 years of experience in mobile app development,
                  primarily specializing in React Native.
                </p>
                <p className="mt-3 list-item list-inside">
                  I have worked on various projects, including eCommerce
                  applications, profile management systems, and integration of
                  features like notifications, background tasks, and secure
                  credential storage.
                </p>
                <p className="mt-3 list-item list-inside">
                  I focus on building high-quality, user-friendly mobile
                  applications that provide seamless interactions across both
                  iOS and Android platforms.
                </p>
              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tight">
                  Education
                </h2>

                <p className="mt-3 list-item list-inside">
                  <a
                    href="https://www.ustb.edu.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bachelor of Computer Science (Honors) - UST Bannu, KPK,
                    Pakistan
                  </a>
                </p>
                <p className="mt-3 list-item list-inside">
                  <a
                    href="https://navttc.gov.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Data Science (NAVTTC) - Peshawar, KPK, Pakistan
                  </a>
                </p>

                <p className="mt-3 list-item list-inside">
                  <a
                    href="https://technicalboard.kp.gov.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Diploma in Information Technology (DIT) - Board of Technical
                    Education, Peshawar, KPK, Pakistan
                  </a>
                </p>
              </div>
            </div>
            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
