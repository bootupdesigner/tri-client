import Link from 'next/link'
import React from 'react'
import SocialLinks from './SocialLinks'

function Footer() {
    return (
        <footer>
            {/* quick links menu nav */}

            <div className='footerNav'>
                <h3>Quick Links</h3>
                <span><Link href="/">TRI</Link></span>
                <span><Link href="/about-tri">About TRI</Link></span>
                <span><Link href="/#services">Services</Link></span>
                <span><Link href="/#books">Books</Link></span>
                <span><Link href="/videos">Videos</Link></span>
                <span><a href="https://reneeilesanmi.myhomehq.biz/newsletters" target='_blank'>Newsletter</a></span>
                <span><Link href="/contact-us">Contact Us</Link></span>
            </div>

            {/* hours and location nav */}

            <div className='footerNav'>
                <h3>Hours & Location</h3>
                <span>Laurel, Maryland 20724</span>
                <span>Monday - Friday: 9:00am - 8:00pm</span>
                <span>Saturday: 9:00am - 1:00pm</span>
                <span><a href="tel:+1-410-880-4680">Call: (410)880-4680</a></span>
                <span><a href="mailto:trifinancialservices@gmail.com">Email: trifinancialservices@gmail.com</a></span>
            </div>

            {/* social media nav */}

            <div className='footerNav'>
                <h3>Stay Connected</h3>
                <SocialLinks />
            </div>
        </footer>
    )
}

export default Footer