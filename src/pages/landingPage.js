/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Menu } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";

const buttonList = [
  {
    name: "Search by keyword",
    initials: "GA",
    href: "/browse-keywords",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Search by BLAST",
    initials: "CD",
    href: "/browse-blast",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Submit",
    initials: "T",
    href: "/submit",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Contact us",
    initials: "RC",
    href: "/contact-us",
    members: 8,
    bgColor: "bg-green-500",
  },
];
const navigation = [
  {
    name: "Search by keyword",
    initials: "GA",
    href: "/browse-keywords",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Search by BLAST",
    initials: "CD",
    href: "/browse-blast",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Submit",
    initials: "T",
    href: "/submit",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Contact us",
    initials: "RC",
    href: "/contact-us",
    members: 8,
    bgColor: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LandingPage() {
  return (
    <div className="relative  overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center "
              aria-label="Global"
            >
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </a>
                  <p className="font-medium text-indigo-600 hover:text-gray-900 text-3xl pl-4">MecDB</p>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900 text-2xl"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                
              </div>
            </nav>
          </div> */}

          {/* alternate nav bar */}
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                  <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="items-center">
                        {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  /> */}
                        {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                        <p className="font-medium text-white  text-4xl pl-4">
                          MecDB{" "}
                        </p>{" "}
                      </div>
                      <div className="hidden sm:block ml-14 pb-0">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-200 hover:bg-gray-700 hover:text-white",
                                "px-3 py-2 rounded-md text-lg font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-end justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                </div>
                {/* <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </a> */}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome to</span>{" "}
              <span className="block text-indigo-600 xl:inline ">MecDB</span>
              <br />
            </h1>
            <p className="font-medium text-gray-700 text-2xl">
              Monocots experimentally characterized gene Database{" "}
            </p>

            <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-5xl">
              Welcome to MecDB, a database of manually curated data of
              experimentally characterized genes in monocots. Each entry
              contains information for gene name, host plant, plant species in
              which it is characterized, accession number, method used for
              characterization, pathway category, and phenotype. All the said
              information can be downloaded by the user in excel format. The
              data is obtained from publicly available databases like PDB and
              NCBI.
              <br />
              MecDB currently contains <b>122</b> experimentally characterized
              gene from five monocot plant species Finger millet, Foxtail
              millet, Sorghum bicolor, Pearl millet, Hordeum vulgare.
            </p>
            
            <div className="mt-5  mx-auto sm:flex sm:justify-center md:mt-8">
              {/* <div className="rounded-md shadow">
                <a
                  href="/browse-keywords"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900  md:text-xl md:px-10"
                >
                  Search
                </a>
              </div> */}
              {/* alternate buttons */}
              {/* <ul
                role="list"
                className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                {buttonList.map((singleButton) => (
                  <li
                    key={singleButton.name}
                    className="col-span-1 flex shadow-sm rounded-md"
                  >
                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-gray-800  rounded-r-md truncate">
                      <div className="flex-1 px-4 py-2 text-sm truncate">
                        <a
                          href={singleButton.href}
                          className="text-gray-200  font-medium text-lg"
                        >
                          {singleButton.name}
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
