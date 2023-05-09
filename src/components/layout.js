import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ColorSwatchIcon,
  UserCircleIcon,
  HomeIcon,
  MenuIcon,
  AdjustmentsIcon,
  CreditCardIcon,
  XIcon,
  TemplateIcon,
  PuzzleIcon,
  LightBulbIcon,
  ViewListIcon,
  SpeakerphoneIcon,
  CollectionIcon,
  DownloadIcon,
  PhoneIcon,
  DatabaseIcon,
  MailIcon,
  CheckIcon,
} from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  UserCircleIcon as UserSolid,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Submit from "../pages/submit";
import { useLocation } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children, small = false }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState(undefined);
  const location = useLocation();
  const navigation = [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
      current: location.pathname == "/",
    },
    {
      name: "Database Statistics",
      icon: DatabaseIcon,
      href: "",
      current: false,
    },
    
    {
      name: "Submit",
      href: "/submit",
      icon: CheckIcon,
      current: location.pathname == "/submit",
    },
    {
      name: "Browse",
      icon: PuzzleIcon,
      href: "#",
      current: false,
      childs: [
        {
          name: "Keywords",
          href: "/browse-keywords",
          current: location.pathname == "/browse-keywords",
        },
        {
          name: "BLAST",
          href: "/browse-blast",
          current: location.pathname == "/browse-blast",
        },
      ],
    },
    {
      name: "Contact Us",
      href: "/contact-us",
      icon: MailIcon,
      current: location.pathname == "/contact-us",
    },
  ];

  // useEffect(() => {
  // const getNullBrand = async () => {
  //   const merchanId = localStorage.getItem("merchantId");
  //   const data = await getBrand(merchanId);
  //   if (data?.properties?.sms_config)
  //     dispatch(
  //       updateSmsConfig({
  //         smsConfig: {
  //           isConfigured: data.properties.sms_config?.is_configured,
  //           country: data.properties.sms_config?.country
  //             ? data.properties.sms_config?.country
  //             : "in"
  //         }
  //       })
  //     );
  //   setData(data);
  // };
  // getNullBrand();
  // }, []);

  return (
    <div className="h-screen flex   bg-white">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  {/* <Image
                      src={`${BASE_PATH}/images/riq_logo.svg`}
                      alt="RetainIQ"
                      width={136}
                      height={32}
                    /> */}
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href}>
                      <Link to={item.href}>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </Link>
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="/">
                  <a className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <a href="/account-information">
                        <a className="flex-shrink-0 w-full group block">
                          <div className="flex items-center">
                            <div>
                              <UserSolid className="h-8 w-8 inline-block text-gray-400 group-hover:text-gray-500" />
                            </div>
                            <div className="ml-2">
                              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                {!!data && !!data.brand && !!data.brand.name
                                  ? data.brand.name
                                  : ""}
                              </p>
                            </div>
                          </div>
                        </a>
                      </a>
                    </div>
                  </a>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div
          className={classNames(
            "flex flex-col",
            small
              ? "w-14  transition-all hover:w-64  duration-500 group whitespace-nowrap ease-in-out"
              : "w-64"
          )}
        >
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div
            className={classNames(
              "flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-900"
            )}
          >
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto rounded-lg">
              <div className="flex items-center px-4">
                <p className="text-white  group flex items-center px-2 text-xl font-medium rounded-md ">
                  MecDb
                </p>
              </div>
              <nav className="mt-5 flex-1 px-2 pt-4 bg-gray-800 space-y-1">
                {navigation.map((item) => (
                  <p key={item.name}>
                    <div className="cursor-pointer">
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "peer flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={classNames(
                            small ? "group-hover:inline-block hidden" : ""
                          )}
                        >
                          {item.name}
                        </span>
                        {item?.childs && item.childs?.length > 0 && (
                          <ChevronDownIcon
                            className={classNames(
                              small ? "group-hover:inline-block hidden" : "",
                              "h-4 w-4 ml-auto mr-2"
                            )}
                          />
                        )}
                      </a>
                      {item?.childs && item.childs?.length > 0 && (
                        <div className="border border-gray-100 shadow-sm pl-9 space-y-1 rounded-md hidden peer-hover:block hover:block">
                          {item.childs.map((subItem) => (
                            <a key={subItem.name} href={subItem.href}>
                              <a
                                className={classNames(
                                  subItem.current
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                  "flex items-center px-2 py-2 text-sm font-medium"
                                )}
                              >
                                <span>{subItem.name}</span>
                              </a>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </p>
                ))}
              </nav>
            </div>
            <div
              className={classNames(
                "flex-shrink-0 flex border-t border-gray-500 p-4 fixed left-0 bottom-0",
                small ? "w-14 group-hover:w-64" : "w-64"
              )}
            >
              <a href="/account-information">
                <a className="flex-shrink-0 w-full group block">
                  <div
                    className={classNames(
                      "flex items-center",
                      small && "justify-center group-hover:justify-start"
                    )}
                  >
                    <div>
                      <UserSolid className="h-8 w-8 inline-block text-gray-400 group-hover:text-gray-500" />
                    </div>
                    <div
                      className={classNames(
                        small
                          ? "hidden group-hover:block group-hover:ml-2"
                          : "ml-2"
                      )}
                    >
                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        {!!data && !!data.brand && !!data.brand.name
                          ? data.brand.name
                          : ""}
                      </p>
                    </div>
                  </div>
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-y-scroll">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
