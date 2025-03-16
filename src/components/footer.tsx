import React from "react";
import { Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/container";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:${hoverColor} transition-colors duration-300 text-xl`}
    >
      {icon}
    </a>
  );
};

export const Footer = () => {
  return (
    <div className="w-full bg-gray-800 text-gray-300 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Column: About Us */}
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold text-2xl text-white mb-4">About Us</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are committed to helping you unlock your full potential with
              AI-powered tools. Our platform offers a wide range of resources to
              improve your interview skills and increase your chances of
              success.
            </p>
          </div>

          {/* Second Column: Contact Us */}
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold text-2xl text-white mb-4">
              Contact Us
            </h3>
            <div className="flex gap-6">
              <SocialLink
                href="https://www.linkedin.com/in/ayushigarg07/"
                icon={<Linkedin size={32} />}
                hoverColor="text-blue-700"
              />
              <SocialLink
                href={`mailto:${import.meta.env.VITE_REACT_APP_CONTACT_EMAIL}`}
                icon={<Mail size={32} />}
                hoverColor="text-red-700"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} IntelliPrep. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};
