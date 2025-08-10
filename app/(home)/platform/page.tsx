"use client";

import React from "react";
import WelcomeHeader from "@/components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <WelcomeHeader />

      {/* Hero Section */}
      <section className="bg-white py-10 sm:py-16 px-6 sm:px-20">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 text-center">
          About the ASU Student App Platform
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto text-center">
          Our platform bridges the gap between students and the university by
          combining a powerful web dashboard for admins with a mobile app for
          students. It’s designed to keep every student informed, engaged, and
          supported — all in one place.
        </p>
      </section>

      {/* Two-Column Layout */}
      <section className="my-16 sm:flex items-center gap-12 px-6 sm:px-20">
        {/* Image */}
        <div className="sm:w-1/2">
          <Image
            src="/web-dashboard.png"
            alt="Platform Preview"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="sm:w-1/2">
          <p className="text-gray-600 mb-6">
            The website acts as the control center for university staff and
            admins. They can post announcements, update the cafeteria schedule,
            share curriculum details, and manage student resources. The **mobile
            app, built with React Native, instantly syncs this information,
            allowing students to access it anywhere, anytime.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>✅ Real-time updates from the university</li>
            <li>✅ Accessible on any device, anywhere</li>
            <li>✅ Secure login and personalized dashboard</li>
            <li>✅ Designed for both academic and social needs</li>
          </ul>
        </div>
      </section>

      <p className="text-center text-gray-400 py-6">copy right &copy; 2025</p>
    </main>
  );
};

export default page;
