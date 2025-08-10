"use client";

import React, { useState } from "react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Step 1: Open the Expo Link",
    description:
      "Click the 'Get App' button to open the Expo app install page.",
    image: "/about.png",
  },
  {
    id: 2,
    title: "Step 2: Install Expo Go",
    description:
      "If you don't have the Expo Go app, download it from the App Store or Google Play.",
    image: "/assets/images/step2.png",
  },
  {
    id: 3,
    title: "Step 3: Open the App in Expo Go",
    description:
      "Once Expo Go is installed, open it and scan the QR code or open the link you just clicked.",
    image: "/assets/images/step3.png",
  },
  {
    id: 4,
    title: "Step 4: Install the App on Your Phone",
    description:
      "In Expo Go, tap the '...' menu and select 'Add to Home Screen' to install the app like a native app.",
    image: "/assets/images/step4.png",
    isFinal: true,
  },
];

const Installation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8 sm:p-16 flex flex-col sm:flex-row items-center gap-10">
          {/* Left side */}
          <div className="sm:w-1/2 flex flex-col items-center text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
              {step.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              {step.description}
            </p>

            <div className="flex gap-4">
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition"
                >
                  Previous
                </button>
              )}

              {!step.isFinal && (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
                >
                  Next
                </button>
              )}

              {step.isFinal && (
                <Link href="/">
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition">
                    Go Back Home
                  </button>
                </Link>
              )}
            </div>

            <p className="mt-8 text-gray-400 text-sm">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>

          {/* Right side */}
          <div className="sm:w-1/2 flex justify-center">
            <img
              src={step.image}
              alt={step.title}
              className="max-h-[400px] w-full object-contain rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>

      <footer className="py-4 text-center text-gray-400 text-sm">
        &copy; 2025 Your Company Name
      </footer>
    </main>
  );
};

export default Installation;
