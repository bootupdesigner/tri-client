"use client";

import React from "react";
import { triServices } from "@/data/data";
import { useMediaQuery } from "react-responsive";
import { Button } from "react-bootstrap";
import { MdLocalPhone } from "react-icons/md";

function Banner() {
  const isBigScreen = useMediaQuery({ minWidth: 1224 });

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh" ,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/videos/family.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Dark overlay (improves text contrast) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
          zIndex: -1,
        }}
      />

      {/* 🧱 Content */}
      <div
        className="p-5"
        style={{
          width: isBigScreen ? "50%" : "100%",
          backgroundColor: "rgba(0,0,0,0.35)",
          marginLeft: isBigScreen ? 40 : 16,
          marginRight: 16,
        }}
      >
        <h3 style={{ color: "#fff" }}>Plan Your Financial Future</h3>

        <p style={{ fontSize: 18, color: "#fff" }}>
          Start planning for your family’s future and retirement. Contact Renee
          to learn about better life insurance policies, annuities, 401K
          rollovers, and more. We’re ready to answer any questions you may have
          about your financial goals. Call Renee today!
        </p>

        <Button
          href="tel:+14108804680"
          style={{
            backgroundColor: "#800000",
            borderColor: "#800000",
            color: "white",
            fontSize: 20,
          }}
        >
          <MdLocalPhone /> Call Renee
        </Button>
      </div>
    </div>
  );
}

export default Banner;
