import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header';
import AboutV4 from '../components/section-components/about-v4';
import Features from '../components/section-components/features-v1';
import Team from '../components/section-components/team-v1';
import Testimonial from '../components/section-components/testimonial-v1';
import BlogSlider from '../components/blog-components/blog-slider-v1';
import CallToActionV1 from '../components/section-components/call-to-action-v1';
import Footer from '../components/global-components/footer';

const About_v1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us" />
        <AboutV4 />
        <Features  customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
        <Team />
        <Testimonial />
        <BlogSlider />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default About_v1

