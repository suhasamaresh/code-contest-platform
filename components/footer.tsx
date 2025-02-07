"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-400 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo.png"
            alt="Dr. AIT Logo"
            className="h-16 mb-4"
          />
          <p className="text-sm leading-relaxed text-center md:text-left">
            Dr. Ambedkar Institute of Technology <br /> Empowering the Future of Technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-[#50da4c] transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/departments" className="hover:text-[#50da4c] transition-all">
                Departments
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:text-[#50da4c] transition-all">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/placements" className="hover:text-[#50da4c] transition-all">
                Placements
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-[#50da4c] transition-all">
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-sm leading-relaxed">
            Dr. Ambedkar Institute of Technology <br />
            Outer Ring Road, Bangalore - 560056 <br />
            Phone: +91 80 1234 5678 <br />
            Email:{" "}
            <a href="mailto:info@dr-ait.edu" className="hover:text-[#50da4c]">
              info@dr-ait.edu
            </a>
          </p>
        </div>

        {/* Social Media & Follow */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-6">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="text-2xl hover:text-[#50da4c] transition-all" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-2xl hover:text-[#50da4c] transition-all" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-2xl hover:text-[#50da4c] transition-all" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-2xl hover:text-[#50da4c] transition-all" />
            </Link>
            <Link href="https://discord.com" target="_blank">
              <FaDiscord className="text-2xl hover:text-[#50da4c] transition-all" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Dr. Ambedkar Institute of Technology.{" "}
          <br className="md:hidden" /> All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/terms" className="hover:text-[#50da4c]">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-[#50da4c]">
            Privacy Policy
          </Link>
          <Link href="/brand" className="hover:text-[#50da4c]">
            Brand Guidelines
          </Link>
        </div>
      </div>
    </footer>
  );
}
