import React from "react";
import "./TeamPage.css"; // Import the CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";
const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "CEO & Founder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYFmbCJ-t3z6Z7pt5F0-GBPLBvS4Y2-ccHw&s",
    bio: "Rahul Sharma is the driving force behind our company. With over 15 years of experience in the UPVC industry, he is passionate about delivering sustainable, high-quality solutions for modern homes and businesses. His leadership ensures innovation, customer satisfaction, and long-term growth.",
    socials: {
      website: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Anita Verma",
    role: "Head of Design",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYFmbCJ-t3z6Z7pt5F0-GBPLBvS4Y2-ccHw&s",
    bio: "Anita Verma leads the design team with creativity and precision. With a background in architecture and interior design, she specializes in crafting modern, elegant, and functional UPVC door and window designs that perfectly complement both residential and commercial spaces.",
    socials: {
      website: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Arjun Singh",
    role: "Project Manager",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYFmbCJ-t3z6Z7pt5F0-GBPLBvS4Y2-ccHw&s",
    bio: "Arjun Singh ensures every project runs smoothly from start to finish. With strong expertise in project planning, execution, and team coordination, he focuses on delivering top-quality UPVC solutions on time while maintaining strong client relationships.",
    socials: {
      website: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  

];


export default function TeamPage() {
  return (
     <>
      <Navbar />
    <div className="team-page">
      {/* Header */}
      <header className="team-header">
        <h1>Meet Our Team</h1>
        <p>The people behind Sohra UPVC Industries</p>
      </header>

      {/* Team Section */}
      <section className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
            <div className="socials">
              <a href={member.socials.website}>🔗</a>
              <a href={member.socials.twitter}>🐦</a>
              <a href={member.socials.linkedin}>💼</a>
            </div>
          </div>
        ))}
      </section>

    
    </div>
     <Footer />
    </>
  );
}
