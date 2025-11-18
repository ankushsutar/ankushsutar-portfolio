import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting beautiful, user-centered interfaces that delight",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Efficient workflow ensuring timely project completion",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 uppercase tracking-wider">About Me</span>
          <h2 className="mt-2">Passionate About Creating</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MzM5Nzk3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4">Building Digital Experiences</h3>
            <p className="text-gray-600 mb-4">
              With over 5 years of experience in web development and design, I
              specialize in creating engaging, accessible, and performant web
              applications.
            </p>
            <p className="text-gray-600 mb-6">
              I believe in the power of good design and clean code to solve real
              problems and create meaningful user experiences.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                Angular
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                React Native
              </span>
             
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                React
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                Node.js
              </span>
               <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                Express.js
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
