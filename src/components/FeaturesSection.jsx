import React, { useState } from "react";
import { candidates } from "../data/data";
import { Eye, ThumbsUp } from "lucide-react";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

export default function FeaturesSection() {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const visibleCandidates = showAll ? candidates : candidates.slice(0, 6);

  return (
    <section className="w-full py-10 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-start mb-10 text-Blue">
          Featured Candidate
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCandidates.map((c) => (
            <div
              key={c.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-20 h-auto rounded object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-Blue">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.position}</p>
                  <p className="text-sm text-gray-600">{c.location}</p>
                  <p className="text-xs text-Orange mt-1">
                    Available for Job Vacancies
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-5 text-sm text-gray-600">
                <Button
                  onClick={() => navigate(`/candidate/${c.id}`)}
                  className="text-Blue hover:text-blue-600 hover:underline transition-all"
                >
                  View Profile
                </Button>
                <Button className="text-Blue hover:text-blue-600 hover:underline transition-all">
                  Hire Me
                </Button>
              </div>

              <div className="flex items-center justify-end gap-4 mt-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span role="img" aria-label="views">
                    <Eye size={16} className="text-Blue" />
                  </span>{" "}
                  {c.views}
                </span>
                <span className="flex items-center gap-1">
                  <span role="img" aria-label="likes">
                    <ThumbsUp size={16} className="text-Orange" />
                  </span>{" "}
                  {c.likes}
                </span>
              </div>
            </div>
          ))}
        </div>

        {!showAll && candidates.length > 9 && (
          <div className="flex justify-start mt-10">
            <Button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-Blue text-white rounded-lg hover:bg-blue-700 transition"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
