import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ankushsutar23@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8308227062",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Navi Mumbai, Maharashtra",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-2 text-white">Let's Work Together</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
            >
              <p className="text-gray-300">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
