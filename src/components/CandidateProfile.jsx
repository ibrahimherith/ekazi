import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
} from "lucide-react";
import { candidate } from "../data/candidates";

export default function CandidateProfile() {
  return (
    <section className="w-full pb-10 px-4">
      <div className="container mx-auto px-4 space-y-6 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="w-full flex items-center justify-center h-20 bg-Orange">
            <h2 className="text-xl text-white font-semibold">
              Featured Candidate
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 p-6 sm:p-10 font-sans text-gray-900">
          {/* HEADER */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <div>
              <img
                src={candidate.image}
                alt="candidate"
                className="w-25 h-auto rounded object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl text-Blue font-bold">{candidate.name}</h1>
              <p>{candidate.title}</p>
              <p className="flex items-center gap-2 mt-1">
                <MapPin size={16} /> {candidate.location}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> {candidate.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> {candidate.phone}
              </p>
            </div>
          </div>

          {/* SECTION WRAPPER */}
          <div className="mt-10 space-y-8">
            {/* ABOUT */}
            <Section title="About">
              <p>{candidate.about}</p>
              <h4 className="font-semibold mt-4">Career Objectives</h4>
              <p className="text-gray-700">{candidate.objective}</p>
            </Section>

            {/* EXPERIENCE */}
            <Section title="Experience" className="space-y-4">
              {candidate.experience.map((exp, i) => (
                <div key={i} className="p-4 shadow-lg rounded-lg bg-white">
                  <h3 className="font-semibold text-lg">{exp.company}</h3>
                  <p className="text-gray-600">{exp.role}</p>
                  <p className="text-sm text-gray-500">{exp.years}</p>
                  <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                  <p className="text-sm mt-2 text-gray-600">
                    <span className="font-semibold">Reason for Leaving:</span>{" "}
                    {exp.reason}
                  </p>
                </div>
              ))}
            </Section>

            {/* EDUCATION */}
            <Section title="Education">
              {candidate.education.map((edu, i) => (
                <div key={i} className="p-4 rounded-lg bg-white shadow-lg">
                  <h3 className="font-semibold">{edu.school}</h3>
                  <p>{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.years}</p>
                </div>
              ))}
            </Section>

            {/* CERTIFICATIONS */}
            <Section title="Certifications">
              <ul className="list-disc ml-5">
                {candidate.certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </Section>

            {/* WORKSHOPS */}
            <Section title="Training & Workshops">
              <ul className="list-disc ml-5 space-y-1">
                {candidate.workshop.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </Section>

            {/* LANGUAGES */}
            <Section title="Languages">
              <div className="flex gap-3">
                {candidate.languages.map((l, i) => (
                  <span
                    key={i}
                    className="bg-white px-4 py-1 border rounded-lg shadow-sm"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </Section>

            {/* SKILLS */}
            <Section title="Skills & Competencies">
              <SkillGroup
                label="Culture Fit"
                items={candidate.skills.cultureFit}
              />
              <SkillGroup
                label="Personality"
                items={candidate.skills.personality}
              />
              <SkillGroup
                label="Skills & Knowledge"
                items={candidate.skills.knowledge}
              />
              <SkillGroup label="Software" items={candidate.skills.software} />
              <SkillGroup label="Tools" items={candidate.skills.tools} />
            </Section>

            {/* JOB FIT */}
            <Section title="Job Fit">
              <ul className="list-disc ml-5 space-y-1">
                {candidate.jobFit.map((j, i) => (
                  <li key={i}>{j}</li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-xl text-Blue uppercase font-bold mb-3">{title}</h2>
      {children}
    </section>
  );
}

function SkillGroup({ label, items }) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold">{label}</h4>
      <div className="flex flex-wrap gap-2 mt-1">
        {items.map((item, i) => (
          <span
            key={i}
            className="bg-white px-3 py-1 rounded-md border text-sm shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
