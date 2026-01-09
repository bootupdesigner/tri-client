"use client"

import React from "react";
import { IconContext } from "react-icons";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function SocialLinks() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: "20px" }}>
      <div style={{ display: "flex", gap: 14 }}>
        <a href="https://www.facebook.com/TriFinancialCo" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.youtube.com/channel/UCyjmGgjaYc9gCEbMhRYTk-w" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://twitter.com/trifinancialco" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href='https://www.linkedin.com/in/renee-ilesanmi-8a618a41/' target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </IconContext.Provider>
  );
}

export default SocialLinks;
