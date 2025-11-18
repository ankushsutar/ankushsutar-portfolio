import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management and seamless checkout experience.",
    image:
      "https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYzMzMwOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 2,
    title: "Creative Studio Website",
    description:
      "Portfolio website for a creative agency showcasing their work with stunning animations and transitions.",
    image:
      "https://images.unsplash.com/photo-1628130235364-9e412ffaae5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMzk4NDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Motion", "Tailwind"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1549791084-5f78368b208b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzM5NDE5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Firebase"],
    color: "from-orange-500 to-red-600",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-2">Featured Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A selection of recent projects showcasing my expertise in web
            development and design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center gap-4`}
                >
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
