"use client";

import React from "react";
import WelcomeHeader from "@/components/Navbar";
import {
  Gauge,
  Book,
  Users,
  Image,
  Bell,
  Rss,
  Utensils,
  Award,
  Plus,
} from "lucide-react";

const features = [
  {
    title: "GPA Calculator",
    description:
      "Easily calculate and track your GPA throughout the semester with an accurate, user-friendly tool.",
    icon: <Gauge className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Curriculum Listing",
    description:
      "View your full course curriculum and access subject details at any time.",
    icon: <Book className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Lounges",
    description:
      "Join lounges to connect with classmates, share ideas, and collaborate on projects.",
    icon: <Users className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Gallery",
    description:
      "Browse and share photos from campus events, student activities, and special occasions.",
    icon: <Image className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Reminders",
    description:
      "Stay on top of deadlines, assignments, and important university events with personalized reminders.",
    icon: <Bell className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Social Hub",
    description:
      "Engage in discussions, follow updates, and participate in the campus community.",
    icon: <Rss className="w-12 h-12 text-green-500" />,
  },
  {
    title: "News",
    description:
      "Stay informed with the latest announcements and news from the university.",
    icon: <Award className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Cafeteria Schedule",
    description:
      "Check daily cafeteria menus and schedules right from your phone.",
    icon: <Utensils className="w-12 h-12 text-green-500" />,
  },
  {
    title: "More Coming Soon",
    description:
      "We’re constantly adding new features to make your university life easier and more enjoyable.",
    icon: <Plus className="w-12 h-12 text-green-500" />,
  },
];

const Page = () => {
  return (
    <main>
      <WelcomeHeader />

      {/* Hero Section */}
      <section className="bg-gray-50 py-10 sm:py-16 px-6 sm:px-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center">
          Features
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto text-center">
          The ASU Student App comes packed with tools designed to make your
          academic and campus life easier, more connected, and more enjoyable.
        </p>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 sm:px-20 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-white border border-gray-200 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mx-auto mb-4 flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <p className="text-center text-gray-400 py-6">
        &copy; 2025. All rights reserved.
      </p>
    </main>
  );
};

export default Page;
