import React from "react";
import Image from "next/image";

const team = {
    blog: [
        `A career in financial services is very rewarding. Where else can you choose your income, the type of work you do and help people? If you are seeking to advance in a financial services career and desire greater control over your professional and personal life, TRI Financial Services can open up a broad range of new opportunities and a host of tangible benefits.`,
        `We understand what it means to take hold of your destiny. TRI Financial Services helps you build your own business in the financial services industry by giving you the necessary tools to be successful. You will be in business for yourself but not by yourself. Interested? Open positions include marketing representatives and life insurance professionals.`,
        `TRI Financial Services helps you tailor a comprehensive plan that provides a solution for your unique financial needs. Want to learn more about how we can assist you? Call us today to schedule a complimentary consultation. Or take a few moments to complete the complimentary consultation form, provide us with the best phone number and e-mail address at which to reach you, and we’ll be in touch soon to help you best determine how our products and services can provide the greatest coverage at the most affordable rates.`,
        `Once you’ve selected your plan, we offer a variety of payment options, all of which are customizable and convenient for you to use. We also do government allotments for federal employees. Get started below; we look forward to hearing from you!`,
    ],
    bullets: [
        `Weekly pay`,
        `Better-than-average industry commissions`,
        `Phenomenal Products`,
        `Monthly, quarterly and annual bonuses`,
        `Club rings and diamonds`,
        `Trips to Mexico, Hawaii, Cayman Islands, Switzerland, Puerto Rico, and other exotic destinations`,
        `Exclusive lead territories`,
    ],
    summary: [
        `We also offer ongoing training and support. Learn how to educate, sell and manage customer accounts from one of our financial service experts.`,
        `We’ll help you take your next step. Call us today at (410) 880-4680 or email us at renee@trifinancialservices.com.`,
        `Learn more about our affiliate American Classic Agency.`,
    ],
    image:
        "https://res.cloudinary.com/daj06anmm/image/upload/v1709359065/Business-Meeting_ul1fhp.jpg",
};

export default function JoinOurTeamPage() {
    const email = "renee@trifinancialservices.com";

    return (
        <main className="container">
            <div >
                {/* page title */}
                <h1>Join Our Team</h1>

                <div>
                    {/* Blog paragraphs */}
                    <div>
                        {team.blog.map((paragraph, index) => (
                            <p style={{fontSize:18,}} key={index} >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Bullets section */}
                    <section>
                        <h2 >What do you get when you join our team?</h2>

                        <ul>
                            {team.bullets.map((bullet, index) => (
                                <li style={{fontSize:18,}} key={index}>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Summary with mailto link */}
                    <section>
                        {team.summary.map((paragraph, index) => {

                            // Split around the email address
                            const parts = paragraph.split(email);

                            return (
                                <p key={index} style={{fontSize:18,}}>
                                    {parts[0]}
                                    {parts.length > 1 ? (
                                        <>
                                            <a href={`mailto:${email}`} style={styles.emailLink}>
                                                {email}
                                            </a>
                                            {parts[1]}
                                        </>
                                    ) : null}
                                </p>
                            );
                        })}
                    </section>

                    {/* Image */}
                    <div style={styles.imageWrap}>
                        <Image
                            src={team.image}
                            alt="Business meeting"
                            width={560}
                            height={315}
                            style={{ objectFit: "contain", height: "auto" }}
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

const styles = {
    imageWrap: {
        display: "flex",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 30,
    },
};
