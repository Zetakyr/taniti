import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "Arial, sans-serif",
        fontSize: "28px",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "42px" }}>Contact Us</h1>

      <p>
        We'd love to hear from you! Whether you're planning a visit to Taniti or
        have questions about accommodations, activities, or travel tips, feel
        free to reach out.
      </p>

      <h2 style={{ marginTop: "2rem", fontSize: "24px", color: "#333" }}>
        Get in Touch
      </h2>
      <p>
        <strong>Email:</strong> contact@taniti.com
      </p>
      <p>
        <strong>Phone:</strong> 123-456-7890
      </p>
    </div>
  );
};

export default Contact;
