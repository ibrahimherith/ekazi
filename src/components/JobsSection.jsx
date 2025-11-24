import React, { useState } from "react";
import { Eye, Heart } from "lucide-react";
import { Button } from "./ui/Button";
import { jobs } from "../data/data";

export default function JobsList() {
  const [showAll, setShowAll] = useState(false);
  const visibleJobs = showAll ? jobs : jobs.slice(0, 9);

  return (
    <section className="w-full py-10 px-4">
      <div className="container mx-auto px-4 space-y-6 sm:px-6 lg:px-8">
        <h2 className="text-start text-3xl font-bold text-Blue">All Jobs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleJobs.map((job, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg bg-white p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div className="flex justify-between items-start mb-4">
                <img
                  src={job.logo}
                  alt="Company Logo"
                  className="w-20 h-12 object-contain"
                />
                <span className="text-sm bg-orange-500 text-white px-4 py-1 rounded-full">
                  {job.type}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-Blue mb-1">
                  {job.title}
                </h3>
                <p className="text-Orange text-sm mb-2">{job.company}</p>

                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Job Type:</span> {job.type}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Location:</span>{" "}
                  {job.location}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Industry:</span>{" "}
                  {job.industry}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold text-Orange">Deadline:</span>{" "}
                  {job.deadline}
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 mt-4">
                <button className="text-blue-600 text-sm hover:underline">
                  Show
                </button>

                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <span className="flex items-center gap-1">
                    <Eye size={16} color="Blue" /> {job.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={16} color="Red" /> {job.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && jobs.length > 9 && (
          <Button
            size="lg"
            className="bg-Blue text-white hover:bg-blue-700 transition"
            onClick={() => setShowAll(true)}
          >
            Load more jobs
          </Button>
        )}
      </div>
    </section>
  );
}
