// src/components/usercard.jsx
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/100"; // Placeholder image
  const name = "John Doe";
  const email = "john.doe@example.com";
  const phone = "+1 (123) 456-7890";
  const address = "1234 Elm Street, Springfield, USA";

  return (
    <div style={cardStyle}>
      <img src={profilePhoto} alt="Profile" style={imageStyle} />
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
};

// Styling for the card
const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "16px",
  textAlign: "center",
  width: "200px",
  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
};

const imageStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "10px",
};

export default Usercard;
