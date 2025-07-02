"use client";

import Cards from "@/components/Cards";
import Header from "@/components/Header";
import { useState, useEffect } from "react";

const Home = () => {
  const [isLightMode, setIsLightMode] = useState(false); // Dark by default
  const [filter, setFilter] = useState("all");
  
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
          status: "active",
    },
    {
      id: 2,
      name: "StyleSpy",
      icons: "/images/logo-style-spy.svg",
      desc: "Instantly anakyze and copy CSS from any webpage element ",
          status: "active",
    },
    {
      id: 3,
      name: "SpeedBoost",
      icons: "/images/logo-speed-boost.svg",
      desc: "optimizes browser resource usage to accelerate page  loading.",
          status: "active",
    },
    {
      id: 4,
      name: "JSONWizard",
      icons: "/images/logo-json-wizard.svg",
      desc: "Format, validates, and prettifies JSON responses in-browser ",
          status: "inactive",
    },
    {
      id: 5,
      name: "TabMaster Pro",
      icons: "/images/logo-tab-master-pro.svg",
      desc: "Organize broswser tabs into groups and sessions.",
          status: "active",
    },
    {
      id: 6,
      name: "ViewportBuddy",
      icons: "/images/logo-viewport-buddy.svg", // ✅ fixed
      desc: "Simulates various screen resolutions directly within the broweser ",
          status: "inactive",
    },
    {
      id: 7,
      name: "Markup Notes",
      icons: "/images/logo-markup-notes.svg", // ✅ add `.svg`
      desc: "Enable annotation and notes directly onto webpages for collaborative debugging. ",
          status: "active",
    },
    {
      id: 8,
      name: "GridGuide",
      icons: "/images/logo-grid-guides.svg",
      desc: "Overlay customizable grids and alignment guides on any webpage.",
          status: "inactive",
    },
    {
      id: 9,
      name: "ConsolePlus ",
      icons: "/images/logo-console-plus.svg", // ✅ fixed path
      desc: "Enhanced developer console with advanced filtering and logging  ",
          status: "active",
    },
    {
      id: 10,
      name: "Palette Picker",
      icons: "/images/logo-palette-picker.svg",
      desc: "Instantly extract color palettes from any webpage",
          status: "inactive",
    },
    {
      id: 11,
      name: "LinkChecker",
      icons: "/images/logo-link-checker.svg",
      desc: "Scans and highlights broken links on page.",
          status: "active",
    },
    {
      id: 12,
      name: "DOM Snapshot",
      icons: "/images/logo-dom-snapshot.svg",
      desc: "Capture and export DOM structures quickly ",
          status: "inactive",
    },
  ];
  const filteredData = data.filter((item) =>
    filter === "all" ? true : item.status === filter
  );

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
           {["all", "active", "inactive"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-5 py-2 rounded-3xl transition-colors ${
              isLightMode
                ? "text-black bg-white shadow-sm"
                : "text-white bg-[hsl(226,25%,17%)] border border-[#565a66]"
            } ${filter === status ? "bg-red-500 text-white" : ""}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {filteredData.map((item) => (
          <Cards
            key={item.id}
            name={item.name}
            desc={item.desc}
            src={item.icons}
            isLightMode={isLightMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
