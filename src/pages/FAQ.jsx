import React from "react";

const FAQ = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        fontSize: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>

      <div className="faq">
        <div
          className="question"
          style={{ fontWeight: "bold", marginTop: "2.5rem", color: "#333" }}
        >
          What voltage is the power outlets?
        </div>
        <div className="answer" style={{ marginLeft: "1rem", color: "#555" }}>
          Power outlets are 120 volts (the same as in the United States).
        </div>

        <div
          className="question"
          style={{ fontWeight: "bold", marginTop: "2.5rem", color: "#333" }}
        >
          Is alcohol allowed?
        </div>
        <div className="answer" style={{ marginLeft: "1rem", color: "#555" }}>
          Alcohol is not allowed to be served or sold between the hours of
          midnight and 9:00 a.m. The drinking age on Taniti is 18 and the
          drinking age is not strictly enforced.
        </div>

        <div
          className="question"
          style={{ fontWeight: "bold", marginTop: "2.5rem", color: "#333" }}
        >
          Do people speak English In Taniti?
        </div>
        <div className="answer" style={{ marginLeft: "1rem", color: "#555" }}>
          Many younger Tanitians, speak fluent English. Very little English is
          spoken in rural areas, especially by the older residents.
        </div>

        <div
          className="question"
          style={{ fontWeight: "bold", marginTop: "2.5rem", color: "#333" }}
        >
          Where can I go in case of a medical emergency?
        </div>
        <div className="answer" style={{ marginLeft: "1rem", color: "#555" }}>
          There is one hospital and several clinics. The hospital has many
          multilingual employees.
        </div>

        <div
          className="question"
          style={{ fontWeight: "bold", marginTop: "2.5rem", color: "#333" }}
        >
          What is the crime rate on Taniti?
        </div>
        <div className="answer" style={{ marginLeft: "1rem", color: "#555" }}>
          Violent crime is very rare on Taniti, but as tourism increases, there
          are more reports of pickpocketing and other petty crimes.
        </div>
        <div
          className="question"
          style={{ fontWeight: "bold", marginTop: "2.5rem", color: "#333" }}
        >
          What holidays does Taniti have?
        </div>
        <div className="answer" style={{ marginLeft: "1rem", color: "#555" }}>
          Taniti enjoys a large number of national holidays, and many tourist
          attractions and restaurants will be closed on holidays, so visitors
          should plan accordingly.
        </div>
        <div
          className="question"
          style={{ fontWeight: "bold", marginTop: "2.5rem", color: "#333" }}
        >
          What currency does Taniti use?
        </div>
        <div className="answer" style={{ marginLeft: "1rem", color: "#555" }}>
          Taniti uses the U.S. dollar as its currency, but many businesses will
          also accept euros and yen. Several banks facilitate currency exchange,
          and many businesses accept major credit cards.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
