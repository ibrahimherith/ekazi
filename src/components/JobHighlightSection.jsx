import { CheckCircle } from "lucide-react";
import { jobItems } from "../data/job-categories";
import { Button } from "./ui/Button";

export default function JobHighlightSection() {
  return (
    <section className="w-full py-6 sm:py-8 lg:py-10">
      <div className="w-full flex flex-col items-center py-10">
        {/* Job Cards */}
        <div className="w-full py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {jobItems.map((job, index) => (
              <div key={index} className="flex flex-col items-center">
                <CheckCircle className="text-Orange" size={38} />
                <h3 className="text-Blue text-lg font-semibold mt-3">
                  {job.title}
                </h3>
                <p className="text-gray-700 mt-1">{job.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full mx-auto text-center mt-12 px-4 space-y-4">
          <div className="w-full mx-auto max-w-3xl border-2 border-Blue rounded-full flex items-center gap-4 p-1.5 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none text-Blue placeholder-Blue px-4"
            />

            <Button className="bg-Orange text-white font-medium px-6 py-2 rounded-full border-none hover:bg-orange-600">
              Subscribe
            </Button>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800">
              Subscribe to receive job notifications.
            </h2>
            <p className="text-gray-600 mt-1">Join our weekly Newsletter</p>
          </div>
        </div>
      </div>
    </section>
  );
}
