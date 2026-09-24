import React from 'react';
import HeroSection from '../../components/home/HeroSection/HeroSection';
import VideoShowcase from '../../components/home/VideoShowcase/VideoShowcase';
import PartnerCallout from '../../components/home/PartnerCallout/PartnerCallout';
import CoursesSection from '../../components/home/CoursesSection/CoursesSection';
import TestimonialsSection from '../../components/home/TestimonialsSection/TestimonialsSection';
import InstructorSection from '../../components/home/InstructorSection/InstructorSection';
import PartnersSection from '../../components/home/PartnersSection/PartnersSection';
import './_homePage.scss';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* 1. Hero Banner */}
      <HeroSection />

      {/* 2. Video Showcase */}
      <VideoShowcase />

      {/* 3. Partner Announcement Callout */}
      <PartnerCallout />

      {/* 4. Courses List & Interactive Syllabus */}
      <CoursesSection />

      {/* 6. Student Testimonials */}
      <TestimonialsSection />

      {/* 7. Faculty / Instructor Showcase */}
      <InstructorSection />

      {/* 8. Partner Enterprise Brands */}
      <PartnersSection />
    </div>
  );
}
