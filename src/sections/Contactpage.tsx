"use client";
import React, { useState } from "react";
import "./contact.css";


export const contact = [
  {
    id: 1,
    details: {
      name: "Example Name",
      email: "info@example.com",
      subject: "Message",
      message: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur`,
    },
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Our Contact Details</h3>
          <p><strong>Name:</strong> {contact[0].details.name}</p>
          <p><strong>Email:</strong> {contact[0].details.email}</p>
          <p><strong>Subject:</strong> {contact[0].details.subject}</p>
          <p><strong>Message:</strong> {contact[0].details.message}</p>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
