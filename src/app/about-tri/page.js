"use client"

import React from 'react'
import { aboutTri } from '@/data/data';
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import Image from 'next/image';

function Summaries({ summary, index }) {
    if (!Array.isArray(summary)) return null;

    // RN behavior: uses index parity to decide text color (used in testimonials)
    const isEven = typeof index === "number" ? index % 2 === 0 : false;
    const color = typeof index === "number" ? (isEven ? "#ffffff" : "black") : "black";

    return (
        <>
            {summary.map((paragraph, paragraphIndex) => (
                <div key={paragraphIndex} style={{ paddingTop: 5, paddingBottom: 5 }}>
                    <p style={{ ...styles.paragraph, color, margin: 0 }}>{paragraph}</p>
                </div>
            ))}
        </>
    );
}

function Testimonial({ testimonial, index }) {
    const isEven = index % 2 === 0;

    return (
        <div
            style={{
                marginTop: 10,
                marginBottom: 10,
                padding: 20,
                borderRadius: 10,
                backgroundColor: isEven ? "#800000" : "white",
                boxShadow: isEven ? "none" : "0 10px 25px rgba(0,0,0,0.25)",
                position: "relative",
            }}
        >
            {/* Fontisto quote-a-right */}
            <FaQuoteLeft
                size={24}
                color={"#800000"}
                style={styles.quoteLeft}
            />

            <Summaries summary={testimonial.testimonial} index={index} />

            <p
                style={{
                    ...styles.paragraph,
                    fontWeight: "bold",
                    color: isEven ? "#ffffff" : "black",
                    margin: 0,
                }}
            >
                -- {testimonial.person}
            </p>

            {/* Fontisto quote-a-left */}
            <FaQuoteRight
                size={24}
                color={"#800000"}
                style={styles.quoteRight}
            />
        </div>
    );
}

function page() {
    return (
        <div className='container'>
            <h1 style={{ textAlign: 'center', }}>About TRI Financial Services</h1>

            {/* TRI mission and vision statement */}
            <section>
                <h2>Mission</h2>
                <p style={{ fontSize: 18, }}>{aboutTri.mission}</p>

                <h2>Vision</h2>
                {aboutTri.vision.map(paragraph => (
                    <p>{paragraph}</p>
                ))}
            </section>

            {/* TRI Affiliations section */}

            <section>
                <h2>TRI Affiliations</h2>
                <Summaries summary={aboutTri.affiliations.summary} />
            </section>

            {/* testimonials section */}
            <section>
                <h3 style={{textAlign: "center" }}>Testimonials</h3>
                {aboutTri.testimonials.map((t, index) => (
                    <Testimonial key={t.id} testimonial={t} index={index} />
                ))}
            </section>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "white",
    },
    paragraph: {
        fontFamily: "Times New Roman",
        lineHeight: "150%",
        fontSize: 18,
        color: "black",
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        fontFamily: "Times New Roman",
        lineHeight: "150%",
        marginBottom: 0,
    },
    rowSection: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 30,
        gap: 24,
    },
    quoteLeft: {
        position: "absolute",
        top: 0,
        left: -40,
    },
    quoteRight: {
        position: "absolute",
        bottom: 0,
        right: -40,
    },
};

export default page