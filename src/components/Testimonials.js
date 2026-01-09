"use client";

import React from "react";
import { FiQuoteRight, FiQuoteLeft } from "react-icons/fi";
// import Summaries from "@/components/Summaries"; // adjust path

export default function Testimonial({ testimonial, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      key={testimonial.id}
      style={{
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: isEven ? "#800000" : "white",
        // RN elevation/shadow conversion for web:
        boxShadow: isEven ? "none" : "0 10px 20px rgba(0,0,0,0.25)",
        position: "relative",
      }}
    >
      {/* quote-a-right */}
      <FiQuoteRight
        size={24}
        color="#800000"
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          // if the card is maroon, you might want white icons; keep your original if you want:
          opacity: 1,
        }}
      />

      {/* body */}
      <div style={{ paddingTop: 14 }}>
        <Summaries summary={testimonial.testimonial} index={index} />

        <p
          style={{
            fontFamily: "Times New Roman",
            lineHeight: "150%",
            color: isEven ? "#ffffff" : "black",
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 0,
          }}
        >
          -- {testimonial.person}
        </p>
      </div>

      {/* quote-a-left */}
      <FiQuoteLeft
        size={24}
        color="#800000"
        style={{
          position: "absolute",
          bottom: 12,
          right: 12,
          opacity: 1,
        }}
      />
    </div>
  );
}
