import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";
import { navLinks } from "../data/nav-links";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-[0_2px_6px_-1px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-25 h-25 rounded-lg bg-linear-to-br from-primary to-primary/80 flex items-center justify-center">
              <a href="/">
                <img src="../assets/images/logo2.png" />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base text-Blue font-medium text-muted-foreground hover:text-blue-600 hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-4 rounded-full text-Orange border border-Orange hover:bg-Orange hover:border-Orange hover:text-white"
            >
              Login
            </Button>
            <Button
              size="lg"
              className="bg-Blue text-white rounded-full px-8 py-4 hover:bg-blue-700 transition"
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-Blue">
            <div className="flex flex-col text-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-md text-Blue font-medium text-muted-foreground hover:text-blue-600 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="ghost"
                  size="md"
                  className=" px-8 py-4 rounded-full text-white bg-Orange border border-Orange hover:bg-orange-600 hover:border-orange-600 hover:text-white"
                >
                  Login
                </Button>
                <Button
                  size="md"
                  className=" bg-Blue text-white rounded-full px-8 py-4 hover:bg-blue-700 transition"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
