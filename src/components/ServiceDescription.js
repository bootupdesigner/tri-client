"use client";

import React from "react";
import Link from "next/link";
import { triServices } from "@/data/data";
import { Button } from "react-bootstrap";

const ServiceDescription = ({ limit }) => {
  const getPreview = (service, maxLen = 150) => {
    const text = service?.blog?.[0]?.summary?.[0]?.paragraph?.[0] || "";
    if (!text) return "";
    return text.length > maxLen ? text.slice(0, maxLen).trim() + "…" : text;
  };

  const servicesToShow = limit
    ? triServices.slice(0, limit)
    : triServices;

  return (
    <div
      className="container my-3"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: 24,
      }}
    >
      {servicesToShow.map((service) => (
        <div
          key={service.id}
          style={{
            display: "flex",
            flexDirection: "column",
            width: 400,
          }}
        >
          <Link
            href={`/service/${service.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3 style={{ textAlign: "center" }}>
              {service.serviceName}
            </h3>

            <img
              src={service.prevImg}
              alt={service.serviceName}
              style={{ width: "100%", height: "auto", borderRadius: 12 }}
            />

            <p>{getPreview(service, 150)}</p>

            <Button variant="outline-primary">Read More</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServiceDescription;
