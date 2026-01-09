"use client";

import React, { useMemo, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const INITIAL_SERVICES = [
  { name: "Life Insurance", selected: false },
  { name: "401K Rollovers", selected: false },
  { name: "Final Expense", selected: false },
  { name: "Disability Insurance", selected: false },
  { name: "Children's Policies", selected: false },
  { name: "Long Term Care", selected: false },
  { name: "Life Insurance on Your Parents", selected: false },
];

export default function Form() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1224 });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1225 });

  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
    services: INITIAL_SERVICES,
  });

  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const layoutStyles = useMemo(() => {
    // Mirrors your three RN blocks but avoids duplicate JSX
    if (isMobile) {
      return { outerPaddingX: 10, innerPaddingX: 10, innerWidth: "100%", innerHeight: 800 };
    }
    if (isTablet) {
      return { outerPaddingX: 30, innerPaddingX: 30, innerWidth: "100%", innerHeight: "auto" };
    }
    // desktop
    return { outerPaddingX: 30, innerPaddingX: 30, innerWidth: 600, innerHeight: "95%" };
  }, [isMobile, isTablet]);

  const handleStateChange = (name, value) => {
    setMailerState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (index) => {
    setMailerState((prev) => {
      const next = [...prev.services];
      next[index] = { ...next[index], selected: !next[index].selected };
      return { ...prev, services: next };
    });
  };

  const onRecaptchaChange = (value) => setRecaptchaValue(value || "");

  const submitEmail = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      toast.error("Please complete the reCAPTCHA before submitting.");
      return;
    }

    if (!mailerState.name || !mailerState.email || !mailerState.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://tri-server.onrender.com/send",
        { mailerState },
        { timeout: 10000 }
      );

      const resData = response.data;

      if (resData?.status === "success") {
        toast.success("Message Sent");
        setMailerState({
          name: "",
          email: "",
          message: "",
          services: INITIAL_SERVICES,
        });
        setRecaptchaValue("");
      } else {
        toast.error("Message failed to send");
      }
    } catch (err) {
      console.error("Error submitting email:", err);
      toast.error("An error occurred while submitting the form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const { outerPaddingX, innerPaddingX, innerWidth, innerHeight } = layoutStyles;

  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 30,
          paddingBottom: 30,
          paddingLeft: outerPaddingX,
          paddingRight: outerPaddingX,
          backgroundColor: "white",
        }}
      >
        <form
          onSubmit={submitEmail}
          style={{
            border: "1px solid #ffffff",
            borderRadius: 25,
            backgroundColor: "white",
            paddingLeft: innerPaddingX,
            paddingRight: innerPaddingX,
            paddingTop: 20,
            paddingBottom: 20,
            width: innerWidth,
            height: innerHeight,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
          }}
        >
          <h2 style={{ textAlign: "center", fontSize: 24, fontWeight: 700, color: "#800000" }}>
            Contact TRI Financial Services for a Quote
          </h2>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 600 }}>Name</span>
            <input
              value={mailerState.name}
              onChange={(e) => handleStateChange("name", e.target.value)}
              placeholder="Name"
              required
              style={inputStyle}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 600 }}>Email</span>
            <input
              type="email"
              value={mailerState.email}
              onChange={(e) => handleStateChange("email", e.target.value)}
              placeholder="Email"
              required
              style={inputStyle}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 600 }}>Message</span>
            <textarea
              value={mailerState.message}
              onChange={(e) => handleStateChange("message", e.target.value)}
              placeholder="Message"
              rows={4}
              required
              style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
            />
          </label>

          {/* Services checkboxes */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 6 }}>
            {mailerState.services.map((service, index) => (
              <label
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 10px",
                  borderRadius: 12,
                  border: "1px solid #eee",
                }}
              >
                <input
                  type="checkbox"
                  checked={service.selected}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span>{service.name}</span>
              </label>
            ))}
          </div>

          {/* reCAPTCHA (web only; Next.js is web anyway) */}
          <div style={{ marginTop: 12 }}>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onRecaptchaChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 10,
              background: "transparent",
              border: "none",
              color: "#800000",
              fontWeight: 700,
              fontSize: 16,
              cursor: loading ? "not-allowed" : "pointer",
              padding: "10px 0",
              textAlign: "left",
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* Optional helper text */}
          {isDesktopOrLaptop && (
            <p style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
              We typically respond within 1 business day.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  height: 44,
  border: "1px solid #ccc",
  borderRadius: 10,
  padding: "10px 12px",
  fontSize: 16,
  outline: "none",
};
