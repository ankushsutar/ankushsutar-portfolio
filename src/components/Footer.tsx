import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ankushsutar", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ankush-sutar/",
    label: "LinkedIn",
  },
  // { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center gap-2"
          >
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />{" "}
            by Ankush Sutar
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-500"
          >
            © 2025 All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
