import React, { useRef, useState } from "react";
import "./Contact.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage("");

    // --- 1. Get Form Data ---
    const formData = new FormData(form.current);
    const user_name = formData.get("user_name");
    const user_email = formData.get("user_email");
    const message = formData.get("message");
    // Default subject value since your form doesn't have an input for it
    const subject = "New Project Inquiry"; 

    try {
      // --- 2. Email TO YOU (Notification Template: template_22xds5o) ---
      // This uses standard keys for recipient fields and custom keys for content.
      await emailjs.send(
        "service_3vaphx4",        
        "template_22xds5o",       // Make sure this is your Notification template ID (or the new clean one)
        {
          // Standard EmailJS Recipient/Reply Keys:
          from_name: user_name,     // For From Name setting
          reply_to: user_email,     // For Reply To setting (Allows you to reply to the sender)
          to_email: "dhif_mouadh@hotmail.fr", // For To Email setting (YOUR address)

          // Data Keys used in the HTML content:
          user_name: user_name,     // For displaying name in content
          user_email: user_email,   // For displaying email in content
          message_content: message, // For displaying message in content
          subject: subject,         // For displaying subject
        },
        "1EjZd8jxXQmpJJLXB"       
      );

      // --- 3. Email TO SENDER (Auto-Reply Template: template_ug68729) ---
      // This uses the unique 'client_email' key to avoid recipient conflicts.
      await emailjs.send(
        "service_3vaphx4",
        "template_ug68729",       
        {
          // Unique Recipient Key:
          client_email: user_email,   // **SENDER'S address is passed with this unique key**

          // Data Key for content:
          user_name: user_name,   
        },
        "1EjZd8jxXQmpJJLXB"
      );

      setStatusMessage("✅ Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatusMessage("❌ Failed to send message. Check console for details.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-overlay" />
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Feel free to reach out! I’ll get back to you as soon as possible.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-card">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <p>dhif_mouadh@hotmail.fr</p>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <p>+358 44 970 3149</p>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <p>Helsinki, Finland</p>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="4" required />
            <button type="submit" className="send-btn" disabled={sending}>
              <Send size={18} /> {sending ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}