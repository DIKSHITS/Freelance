import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import upvcImg from "./logo/upvc.png";   // ✅ correct relative path



export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: "#fff", // solid primary background
          color: "#1788c7",
          minHeight: "100vh",
          padding: "80px 20px",
        }}
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "60px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          About Sohra UPVC Industries
        </motion.h1>

        {/* Intro Section with Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "50px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
           <p
  style={{
    fontSize: "1.2rem",
    lineHeight: "1.9",
    color: "black",   // ✅ this makes the text black
  }}
>
  Sohra UPVC Industries is a trusted name in the field of UPVC doors and
  windows. With a strong commitment to quality and innovation, we
  specialize in providing durable, stylish, and energy-efficient
  solutions for residential and commercial spaces.
</p>

<p
  style={{
    fontSize: "1.2rem",
    lineHeight: "1.9",
    color: "black",   // ✅ also here for black text
  }}
>
  Our mission is to enhance comfort, safety, and aesthetics while ensuring
  long-term performance, making every space more secure and beautiful.
</p>

          </motion.div>

  {/* Right Image */}
<motion.div style={{ textAlign: "center" }}>
  <motion.img
    src={upvcImg}
    alt="UPVC Windows"
    style={{ maxWidth: "500px", borderRadius: "12px" }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ type: "spring", stiffness: 300 }}
  />
</motion.div>


        </div>

        {/* Mission, Vision, Values Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
            marginTop: "80px",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {[ 
            {
              title: "Our Mission",
              text: "To deliver high-quality UPVC products that combine strength, beauty, and functionality. We aim to make every space more comfortable, secure, and energy-efficient with our modern solutions.",
            },
            {
              title: "Our Vision",
              text: "To be a leading provider of UPVC doors and windows across the region by setting benchmarks in innovation, customer satisfaction, and sustainable solutions.",
            },
            {
              title: "Our Values",
              text: (
                <ul style={{ lineHeight: "1.8", paddingLeft: "20px" }}>
                  <li>Quality – Never compromise on product quality.</li>
                  <li>Customer Focus – Customer satisfaction first.</li>
                  <li>Innovation – Bringing new designs & technologies.</li>
                  <li>Sustainability – Eco-friendly, energy-saving solutions.</li>
                </ul>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                background: "rgba(255, 255, 255, 0.54)", // white cards
                color: "black",   // primary text inside cards
                padding: "30px",
                borderRadius: "16px",
                border: "2px solid #fff",
              }}
            >
              <h2 style={{ marginBottom: "15px", color: "#1788c7" }}>{item.title}</h2>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
