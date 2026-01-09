"use client";

import React from "react";
import Image from "next/image";

export default function Service({ blog, serviceName, prevImg, image }) {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 10, paddingRight: 10 }}>
      {/* Top image */}
      {prevImg && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={prevImg}
            alt={serviceName || "Service preview"}
            width={300}
            height={169}
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>
      )}

      {/* Blog content */}
      <div>
        {Array.isArray(blog) &&
          blog.map((blogItem, blogIndex) => (
            <div key={blogIndex}>
              {/* Subheading */}
              {blogItem?.subHeading && (
                <h2
                  style={{
                    textAlign: "left",
                    fontFamily: "Times New Roman",
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#800000",
                    lineHeight: "150%",
                    margin: 0,
                    marginBottom: 8,
                  }}
                >
                  {blogItem.subHeading}
                </h2>
              )}

              {/* Summary */}
              {Array.isArray(blogItem?.summary) &&
                blogItem.summary.map((summaryItem, summaryIndex) => (
                  <div key={summaryIndex}>
                    {/* Paragraphs */}
                    {Array.isArray(summaryItem?.paragraph) &&
                      summaryItem.paragraph.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          style={{
                            fontFamily: "Times New Roman",
                            fontSize: 18,
                            lineHeight: "150%",
                            paddingBottom: 5,
                            margin: 0,
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}

                    {/* Bullet points */}
                    {Array.isArray(summaryItem?.bulletPoints) && (
                      <ul style={{ paddingLeft: 60, marginTop: 8, marginBottom: 8 }}>
                        {summaryItem.bulletPoints.map((bullet, bIndex) => (
                          <li
                            key={bIndex}
                            style={{
                              fontFamily: "Times New Roman",
                              fontSize: 18,
                              lineHeight: "150%",
                              paddingTop: 5,
                              paddingBottom: 5,
                            }}
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Sub-paragraphs */}
                    {Array.isArray(summaryItem?.subParagraph) &&
                      summaryItem.subParagraph.map((paragraph, spIndex) => (
                        <p
                          key={spIndex}
                          style={{
                            fontFamily: "Times New Roman",
                            fontSize: 18,
                            lineHeight: "150%",
                            paddingBottom: 5,
                            margin: 0,
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                ))}
            </div>
          ))}
      </div>

      {/* Bottom image */}
      {image && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
          <Image
            src={image}
            alt={serviceName || "Service image"}
            width={300}
            height={169}
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
