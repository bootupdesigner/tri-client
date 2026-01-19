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
          <p style={{ fontSize: 18 }}>Start planning for your families future and retirement. Contact Renee to learn about better life insurance policies, annuities, 401K rollovers anad more. We’re ready to answer any questions you may have about your financial goals. Call Renee Today!</p>
        </section>

         {/* meet Renee Section */}
        <section >
          <Renee />
        </section>

        {/* list of services we provide */}
        <section>
          <h3 style={{textAlign:'center',}}><a 
          style={{textDecoration:'none', color:'#000000',}}
          href="/services">Services We Offer</a></h3>
          <ServiceDescription limit={4} />
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
