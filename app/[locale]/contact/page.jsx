"use client"; // Mark as a client component

import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import the EmailJS library

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(""); // Reset response message

    try {
      // Use EmailJS to send the email
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID from .env.local
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID from .env.local
        {
          name: formData.name,
          reply_to: formData.email, // User's email
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public Key from .env.local
      );

      console.log("Email sent successfully:", result.text);
      setResponseMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    } catch (error) {
      console.error("Failed to send email:", error.text);
      setResponseMessage("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 font-bold rounded-lg hover:bg-blue-600 transition duration-300"
          style={{ backgroundColor: "#a9def9", color: "black" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {responseMessage && (
        <div
          className="mt-4 p-4 w-full max-w-lg text-center rounded-lg"
          style={{
            backgroundColor: responseMessage.includes("successfully") ? "#d4edda" : "#f8d7da",
            color: responseMessage.includes("successfully") ? "#155724" : "#721c24",
          }}
        >
          {responseMessage}
        </div>
      )}
    </div>
  );
}

export default Contact;