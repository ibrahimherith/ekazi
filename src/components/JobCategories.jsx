import React, { useState } from "react";
import { data, tabs } from "../data/job-categories";

export default function JobCategories() {
  const [activeTab, setActiveTab] = useState("job");

  return (
    <section className="w-full py-10 sm:py-16 lg:py-24 bg-Orange text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-start text-3xl font-bold mb-8">Job Categories</h2>

        {/* Tabs */}
        <div className="flex justify-start mb-6">
          <div className="flex rounded-xl border border-gray-200 bg-gray-50 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm rounded-lg transition-all
                ${
                  activeTab === tab.key
                    ? "bg-white shadow text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Grid */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8">
            {data[activeTab].map(([title, count], index) => (
              <a
                key={index}
                href="#"
                className="text-blue-600 hover:underline text-sm"
              >
                {title} ({count})
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
