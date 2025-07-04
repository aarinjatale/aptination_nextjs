"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infini-moving-cards";

// Testimonial data
const testimonials = [
  {
    quote:
      "AptiNation made my exam prep so much easier. The mock tests are spot on!",
    name: "Aarin Jatale",
    title: "UPSC Aspirant",
  },
  {
    quote:
      "The interface is clean and the questions are really well curated. Highly recommend!",
    name: "Bishal Das",
    title: "CAT Topper",
  },
  {
    quote:
      "I cracked SSC CGL on my first attempt, thanks to AptiNation's daily quizzes.",
    name: "Goutam Raj Deora",
    title: "SSC CGL Qualified",
  },
  {
    quote:
      "Quality of questions are as expected in the exams. Thank You AptiNation!",
    name: "Abhiraj Singh Solanki",
    title: "Railway Exam Candidate",
  },
  {
    quote:
      "The analytics after each test helped me focus on my weak areas. Brilliant platform.",
    name: "Akshat Chaturvedi",
    title: "Bank PO Aspirant",
  },
];

export default function TestimonialPage() {
  return (
    <div className="relative h-[40rem] flex flex-col items-center justify-center overflow-hidden bg-white ">
      {/* Grid Background */}
      <div
        className="
          absolute inset-0 z-0
          [background-size:40px_40px]
          [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
          pointer-events-none
        "
        aria-hidden="true"
      />
      <h2 className="relative z-10 text-4xl font-extrabold mb-8 mt-2 text-center text-black">
        Successfull Results #proudAptians
      </h2>
      <div className="relative z-10 w-full flex justify-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
