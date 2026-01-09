"use client";

import React from "react";
import Link from "next/link";
import { triServices } from "@/data/data";
import { Button } from "react-bootstrap";

const ServiceDescription = ({ variant = "grid" }) => {
    const getPreview = (service, maxLen = 150) => {
        const text = service?.blog?.[0]?.summary?.[0]?.paragraph?.[0] || "";
        if (!text) return "";
        return text.length > maxLen ? text.slice(0, maxLen).trim() + "…" : text;
    };

    const isScroll = variant === "scroll";

    return (
        <div
            className={`container ${isScroll ? "hide-scrollbar" : ""}`}
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 16,
                justifyContent: isScroll ? "flex-start" : "space-evenly",
                flexWrap: isScroll ? "nowrap" : "wrap",

                // ✅ scroll mode
                overflowX: isScroll ? "auto" : "visible",
                overflowY: "hidden",
                WebkitOverflowScrolling: isScroll ? "touch" : undefined,
                paddingBottom: isScroll ? 12 : 0,

                // ✅ optional snap (feels great)
                scrollSnapType: isScroll ? "x mandatory" : "none",
            }}
        >
            {triServices.map((service) => (
                <div
                    key={service.id}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",

                        // ✅ prevents shrink + makes horizontal row scroll
                        flex: isScroll ? "0 0 auto" : "0 1 auto",

                        width: 360, // adjust for homepage look
                        scrollSnapAlign: isScroll ? "start" : "none",
                    }}
                >
                    <Link
                        href={`/service/${service.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <h3 style={{ textAlign: "center" }}>{service.serviceName}</h3>

                        <img
                            src={service.prevImg}
                            alt={service.serviceName}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: 12,
                                display: "block",
                            }}
                        />

                        <p>{getPreview(service, 150)}</p>
                        <Button>Read More</Button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ServiceDescription;
