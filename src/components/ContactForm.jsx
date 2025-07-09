import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // ✅ başarı/başarısızlık mesajı

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(() => {
        setStatus("Message sent successfully! ✅");
        form.current.reset(); // formu temizle
      })
      .catch(() => {
        setStatus("Failed to send message. ❌ Please try again.");
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-xl w-full space-y-4"
      noValidate
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded bg-gray-800 text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded bg-gray-800 text-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="w-full p-3 rounded bg-gray-800 text-white"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Send Message
      </button>

      {status && (
        <p className="text-sm mt-2 text-center text-green-400">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
