import {
  Briefcase,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { aboutLinks, employerLinks, freelancerLinks } from "../data/links";

const Footer = () => {
  return (
    <footer className="w-full py-6 sm:py-12 lg:py-18 bg-Blue text-white">
      <div className="container mx-auto px-4 space-y-6 sm:px-6 lg:px-8">
        <div className="grid md:justify-items-center grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-25 h-25 rounded-lg flex items-center justify-center">
                <a href="#">
                  <img src="../assets/images/logo2.png" alt="" />
                </a>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              eKazi is An Online Recruitment Management Platform Designed for
              Employers/Recruiters, Job Seekers and Freelancers.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Freelancer Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              For Freelancer
            </h3>
            <ul className="space-y-2">
              {freelancerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Employer Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">For Employer</h3>
            <ul className="space-y-2">
              {employerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
