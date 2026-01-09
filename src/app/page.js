'use client';

import Books from "@/components/Books";
import Form from "@/components/Form";
import Renee from "@/components/Renee";
import ServiceDescription from "@/components/ServiceDescription";
import Slider from "@/components/Slider";
import React from "react";
export default function Home() {
  return (
    <div>
      <header>
        <Slider />
      </header>
      <main>
        {/* welcom to the website section */}

        <h1 style={{
          textAlign: 'center',
        }}>TRI Financial Services</h1>


        <section className="container">
          <h3 style={{ color: '#800000' }}>Plan Your Financial Future</h3>
          <p style={{ fontSize: 18 }}>Enroll in Medicare or change plan today! Contact Renee to learn about better life insurance policies. We’re Ready to answer any questions you may have about your 401K Rollover. Call Renee Today!</p>
        </section>

        {/* list of services we provide */}
        <section>
          <h3 style={{textAlign:'center',}}>Services We Offer</h3>
          <ServiceDescription limit={4} />
        </section>

        {/* meet Renee Section */}
        <section >
          <Renee />
        </section>

        {/* information contact form */}
        <section>
          <Form />
        </section>

        {/* affiliate book links */}
        <section>
          <Books />
        </section>
      </main>
    </div>
  );
}
