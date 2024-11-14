import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const frontend = [
  {
    name: "React Native",
    value: 90,
    icon: CheckCircleIcon,
  },
  {
    name: "Android Development",
    value: 70,
    icon: CheckCircleIcon,
  },
  {
    name: "JavaScript",
    value: 80,
    icon: CheckCircleIcon,
  },
  {
    name: "React Navigation",
    value: 75,
    icon: CheckCircleIcon,
  },
  {
    name: "Redux",
    value: 80,
    icon: CheckCircleIcon,
  },
  {
    name: "Expo",
    value: 80,
    icon: CheckCircleIcon,
  },
  {
    name: "React Native Testing Library",
    value: 50,
    icon: CheckCircleIcon,
  },

  {
    name: "CodePush",
    value: 65,
    icon: CheckCircleIcon,
  },
];

const backend = [
  {
    name: "Redux",
    icon: () => <i className="fa fa-redux"></i>,
    value: 80,
  },
  {
    name: "React Navigation",
    icon: () => <i className="fa fa-arrow-right"></i>,
    value: 85,
  },
  {
    name: "Firebase",
    icon: () => <i className="fa fa-fire"></i>,
    value: 70,
  },

  {
    name: "TypeScript",
    icon: () => <i className="fa fa-terminal"></i>,
    value: 90,
  },

  {
    name: "Axios",
    icon: () => <i className="fa fa-network-wired"></i>,
    value: 75,
  },
  {
    name: "Styled Components",
    icon: () => <i className="fa fa-paint-brush"></i>,
    value: 85,
  },
  {
    name: "React Native Paper",
    icon: () => <i className="fa fa-cogs"></i>,
    value: 70,
  },

  {
    name: "Expo",
    icon: () => <i className="fa fa-android"></i>,
    value: 65,
  },
  {
    name: "CodePush",
    icon: () => <i className="fa fa-refresh"></i>,
    value: 70,
  },

  {
    name: "Push Notifications ( OneSignal)",
    icon: () => <i className="fa fa-bell"></i>,
    value: 80,
  },

  {
    name: "Lottie Animations",
    icon: () => <i className="fa fa-spinner"></i>,
    value: 75,
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-24 sm:py-32" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7">Explore my</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Skills
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-10">
          <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-xl"
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6">
              Frontend Development
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6 ">
              {frontend.map((frontend) => (
                <div key={frontend.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <frontend.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {frontend.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <progress
                      className="progress w-3/4"
                      value={frontend.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-xl"
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6">Other </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {backend.map((backend) => (
                <div key={backend.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <backend.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {backend.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <progress
                      className="progress w-3/4"
                      value={backend.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
