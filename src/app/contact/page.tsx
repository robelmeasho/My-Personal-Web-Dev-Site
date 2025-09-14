// app/contacts/page.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.send(
        "service_bg95ate",
        "template_p1djgbn", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "robel-measho@hotmail.com",
        },
        "Vh60V1lQkORAI9EUT"
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-24 pb-12 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Get In <span className="text-lime-300">Touch</span> 📱
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Let`s collaborate and bring your ideas to
              life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h2>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-300">
                    ✅ Message sent successfully!
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-300">
                    ❌ Failed to send message. Please try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition-all"
                    placeholder="Input your name..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition-all"
                    placeholder="youremail@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-lime-300 hover:bg-lime-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending... ⏳" : "Send Message ✉️"}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Let`s Connect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📧</span>
                    <span className="text-gray-300">
                      robel-measho@hotmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📱</span>
                    <span className="text-gray-300">
                      +Ask for my number when we contact
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <span className="text-gray-300">Edmonton, Canada </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Response
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I typically respond within 24 hours. For urgent matters, feel
                  free to give me a Discord message directly. (add robelm.💻)
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">
                    Available for new projects
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
