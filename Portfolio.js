
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Quote } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Living Room",
    image: "/renders/living-room.jpg",
    description: "A photorealistic render of a modern living room design."
  },
  {
    title: "Futuristic Building",
    image: "/renders/futuristic-building.jpg",
    description: "3D model and render of a conceptual futuristic architecture."
  },
  {
    title: "Kitchen Interior",
    image: "/renders/kitchen.jpg",
    description: "Detailed 3D visualization of a minimalist kitchen."
  }
];

const testimonials = [
  {
    name: "Client A",
    feedback: "Absolutely stunning work! The renders looked so real and were delivered right on time."
  },
  {
    name: "Client B",
    feedback: "RS brought our design ideas to life. Super professional and highly recommended."
  }
];

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
          RS 3D Renders
        </h1>
        <p className="text-lg text-gray-700">Freelance 3D Modeling & Rendering Services</p>
      </motion.header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="rounded-2xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 px-6 py-3 text-sm text-center text-gray-700 font-medium italic border-t border-gray-200"
              >
                {project.description}
              </motion.div>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">{project.title}</h2>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">What Clients Say</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow p-6"
            >
              <p className="text-gray-700 italic">"{testi.feedback}"</p>
              <p className="text-right text-sm font-semibold text-gray-800 mt-2">- {testi.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Send a Message</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 text-center bg-white shadow-inner p-6 rounded-2xl"
      >
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <div className="space-y-2 text-gray-700">
          <p className="flex justify-center items-center gap-2">
            <Mail className="h-5 w-5" /> rs.email@example.com
          </p>
          <p className="flex justify-center items-center gap-2">
            <Phone className="h-5 w-5" /> +91 98765 43210
          </p>
          <p className="flex justify-center items-center gap-2">
            <Instagram className="h-5 w-5" />
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800"
            >
              @yourpage
            </a>
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
