"use client";

import Cards from "@/components/Cards";
import Header from "@/components/Header";
import { useState, useEffect } from "react";

const Home = () => {
  const [isLightMode, setIsLightMode] = useState(false); // Dark by default

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = document.body;
      body.classList.toggle("bg-light-gradient", isLightMode);
      body.classList.toggle("bg-dark-gradient", !isLightMode);
    }
  }, [isLightMode]);
  const data = [
    {
      id: 1,
      name: "DevLens",
      icons: "/images/logo-devlens.svg",
      desc: "Quicky inspect page layout and Visualize element boundaries",
    },
    {
      id: 2,
      name: "StyleSpy",
      icons: "/images/logo-style-spy.svg",
      desc: "Instantly anakyze and copy CSS from any webpage element ",
    },
    {
      id: 3,
      name: "SpeedBoost",
      icons: "/images/logo-speed-boost.svg",
      desc: "optimizes browser resource usage to accelerate page  loading.",
    },
    {
      id: 4,
      name: "JSONWizard",
      icons: "/images/logo-json-wizard.svg",
      desc: "Format, validates, and prettifies JSON responses in-browser ",
    },
    {
      id: 5,
      name: "TabMaster Pro",
      icons: "/images/logo-tab-master-pro.svg",
      desc: "Organize broswser tabs into groups and sessions.",
    },
    {
      id: 6,
      name: "ViewportBuddy",
      icons: "/images/logo-viewport-buddy.svg", // ✅ fixed
      desc: "Simulates various screen resolutions directly within the broweser ",
    },
    {
      id: 7,
      name: "Markup Notes",
      icons: "/images/logo-markup-notes.svg", // ✅ add `.svg`
      desc: "Enable annotation and notes directly onto webpages for collaborative debugging. ",
    },
    {
      id: 8,
      name: "GridGuide",
      icons: "/images/logo-grid-guides.svg",
      desc: "Overlay customizable grids and alignment guides on any webpage.",
    },
    {
      id: 9,
      name: "ConsolePlus ",
      icons: "/images/logo-console-plus.svg", // ✅ fixed path
      desc: "Enhanced developer console with advanced filtering and logging  ",
    },
    {
      id: 10,
      name: "Palette Picker",
      icons: "/images/logo-palette-picker.svg",
      desc: "Instantly extract color palettes from any webpage",
    },
    {
      id: 11,
      name: "LinkChecker",
      icons: "/images/logo-link-checker.svg",
      desc: "Scans and highlights broken links on page.",
    },
    {
      id: 12,
      name: "DOM Snapshot",
      icons: "/images/logo-dom-snapshot.svg",
      desc: "Capture and export DOM structures quickly ",
    },
  ];

  return (
    <div className="mx-auto p-4 max-w-[1150px]">
      <h1 className="">
        <Header onToggleTheme={toggleTheme} isLightMode={isLightMode} />
      </h1>
      <div className="mt-20 flex items-center justify-between flex-col md:flex-row ">
        <h1
          className={`font-bold ${
            isLightMode ? "text-black" : "text-white"
          } text-3xl`}
        >
          Extension List
        </h1>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button
            className={`px-5 py-2 rounded-3xl transition-colors bg-[hsl(226,25%,17%)] hover:bg-red-500 ${
              isLightMode ? "text-black bg-white shadow-sm" : "text-white border border-[#565a66]"
            }`}
          >
            {" "}
            All
          </button>{" "}
          <button
            className={`px-5 py-2 rounded-3xl transition-colors bg-[hsl(226,25%,17%)] hover:bg-red-500 ${
              isLightMode ? "text-black  bg-white shadow-sm" : "text-white  border border-[#565a66]"
            }`}
          >
            {" "}
            Active
          </button>{" "}
          <button
            className={`px-5 py-2 rounded-3xl transition-colors bg-[hsl(226,25%,17%)] hover:bg-red-500 ${
              isLightMode ? "text-black  bg-white shadow-sm" : "text-white  border border-[#565a66]"
            }`}
          >
            {" "}
            Inactive
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {data.map((items) => (
          <Cards
            key={items.id}
            name={items.name}
            desc={items.desc}
            src={items.icons}
            isLightMode={isLightMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
