"use client";

import React from "react";
import WelcomeHeader from "@/components/Navbar";
import { CloudUpload, MessageSquare, RefreshCcw } from "lucide-react";

const steps = [
  {
    title: "1. Admin Posts Information",
    description:
      "University staff use the web platform to upload announcements, schedules, curriculum updates, events, and more.",
    icon: <CloudUpload className="w-16 h-16 text-green-500" />,
  },
  {
    title: "2. Synchronization",
    description:
      "The app continuously syncs data between the server and students' devices, ensuring all updates are delivered seamlessly and reliably.",
    icon: <RefreshCcw className="w-16 h-16 text-green-500 animate-spin-slow" />,
  },
  {
    title: "3. Students Stay Connected",
    description:
      "Students receive timely notifications, interact with resources, and stay engaged with campus life.",
    icon: <MessageSquare className="w-16 h-16 text-green-500" />,
  },
];

const Page = () => {
  return (
    <main>
      <WelcomeHeader />

      {/* Hero Section */}
      <section className="bg-gray-50 py-10 sm:py-16 px-6 sm:px-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center">
          How It Works
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto text-center">
          The ASU Student App connects university staff and students through a
          simple yet powerful process — ensuring information is always accurate,
          accessible, and up to date.
        </p>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6 sm:px-20 max-w-7xl mx-auto grid gap-12 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-8 bg-white border border-gray-200 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mx-auto mb-4 flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </section>

      {/* Closing Statement */}
      <section className="bg-gray-50 py-10 px-6 sm:px-20 text-center">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          This simple workflow ensures that no important update is missed —
          making campus communication smoother, faster, and more reliable.
        </p>
      </section>

      <p className="text-center text-gray-400 py-6">
        &copy; 2025. All rights reserved.
      </p>
    </main>
  );
};

export default Page;
