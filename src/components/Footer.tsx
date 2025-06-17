import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return <footer className="bg-black text-white py-8 mt-8">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-400 to-white">
              Stadium876
            </h2>
            <p className="text-gray-400 mb-4">
              Your premier destination for Jamaican sports news, analysis, and
              commentary.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<FacebookIcon className="h-5 w-5" />} />
              <SocialLink href="https://twitter.com" icon={<TwitterIcon className="h-5 w-5" />} />
              <SocialLink href="https://instagram.com" icon={<InstagramIcon className="h-5 w-5" />} />
              <SocialLink href="https://youtube.com" icon={<YoutubeIcon className="h-5 w-5" />} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Sports</h3>
            <ul className="space-y-2">
              <FooterLink href="/football">Football</FooterLink>
              <FooterLink href="/netball">Netball</FooterLink>
              <FooterLink href="/basketball">Basketball</FooterLink>
              <FooterLink href="/track-field">Track & Field</FooterLink>
              <FooterLink href="/gaming">Gaming</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/advertise">Advertise</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
              <FooterLink href="/accessibility">Accessibility</FooterLink>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Stadium876. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({
  href,
  icon
}: SocialLinkProps) => {
  return <a href={href} className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-300" aria-label="Social media">
      {icon}
    </a>;
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({
  href,
  children
}: FooterLinkProps) => {
  return <li>
      <a href={href} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
        {children}
      </a>
    </li>;
};

export default Footer;