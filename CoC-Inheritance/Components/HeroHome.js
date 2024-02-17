// Importing necessary modules and components from React and Next.js
import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal"; // Importing a custom Modal component
import Image from "next/image";
import Link from "next/link";

// Loader function for Next.js Image component
const myLoader = ({ src }) => {
  return `${src}`;
};

// Functional component for the hero section of the home page
function HeroHome() {
  // State and ref initialization
  const [videoModalOpen, setVideoModalOpen] = useState(false); // State to manage video modal open/close
  const video = useRef(null); // Ref to the video element

  // Effect hook to play or pause the video based on modal state
  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);

  // Rendering the hero section
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* SVG illustration for the background */}
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient definition for the illustration */}
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          {/* Circles drawn with the gradient fill */}
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      {/* Container for the hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            {/* Main title with a gradient text effect */}
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            >
              Email Spam{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Detector
              </span>
            </h1>
            {/* Subtitle text */}
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                {/* Description of the spam email detector */}
                A software tool that helps to classify spam emails and categorize them.
              </p>
              {/* CTA button to start the spam detector */}
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div>
                  <Link
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="/verify"
                  >
                    Start Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            {/* Modal component for playing a video */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              {/* Responsive video container */}
              <div className="relative pb-9/16">
                {/* Video element with source and fallback message */}
                <video
                  ref={video}
                  className="absolute w-full h-full"
                  width="1920"
                  height="1080"
                  loop
                  autoPlay
                  controls
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exporting the HeroHome component as the default export
export default HeroHome;