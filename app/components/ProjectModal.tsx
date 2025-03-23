"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/app/page";
import { FaBolt, FaGithub } from "react-icons/fa";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project?: Project | null; // or replace 'any' with a specific type if you have one
}

/* --------------------- */
/*    PROJECTS MODAL     */
/* --------------------- */
function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
if (!isOpen || !project) return null;

return (
    <motion.div
    className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm overflow-auto p-4"
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <motion.div
        className="
        relative
        bg-[linear-gradient(210deg,_#f4f6fbbd_0%,_#fff_48%)]
        dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)]
        rounded-2xl
        max-w-3xl w-full
        shadow-2xl
        dark:shadow-gray-950/50
        backdrop-blur-md
        overflow-hidden
        "
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
    >
        {/* Close Button */}
        <button
        onClick={onClose}
        className="
            absolute top-4 right-4 z-10
            p-2 rounded-full
            bg-gray-900/10 dark:bg-gray-100/10
            hover:bg-gray-900/20 dark:hover:bg-gray-100/20
            transition-colors duration-200
        "
        aria-label="Close modal"
        >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>

        {/* Project Image */}
        {project.image && (
        <div className="relative h-64 w-full">
        <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Project Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-3xl font-bold text-white mb-2">
                {project.title}
            </h3>
            {project.role && (
                <p className="text-gray-200 text-sm">
                Role: {project.role}
                </p>
            )}
            </div>
        </div>
        )}

        <div className="p-8 space-y-6">
        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
            <span
                key={index}
                className="
                    px-3 py-1.5
                    text-sm font-medium
                    bg-blue-50/50 dark:bg-blue-900/30
                    text-blue-600 dark:text-blue-400
                    rounded-full
                    border border-blue-100/50 dark:border-blue-800/50
                "
            >
                {tech}
            </span>
            ))}
        </div>
        )}

        {/* Long Description */}
        {project.longDescription && project.longDescription.length > 0 && (
            <div className="space-y-4">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Project Details
            </h4>
            <ul className="space-y-3">
                {project.longDescription.map((point, idx) => (
                <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <span className="text-blue-500 dark:text-blue-400 mt-1.5">•</span>
                    <span className="text-sm leading-relaxed">{point}</span>
                </motion.li>
                ))}
            </ul>
            </div>
        )}

        {/* Links */}
        {(project.demoLink || project.githubLink) && (
            <div className="flex items-center gap-4 pt-4 mt-8 border-t border-gray-200 dark:border-gray-800">
            {project.demoLink && (
            <a
                href={project.demoLink}
                className="
                    flex items-center gap-2
                    px-4 py-2 rounded-lg
                    bg-gradient-to-r from-orange-500 to-pink-500
                    text-white font-medium text-sm
                    hover:opacity-90 transition-opacity
                    shadow-lg shadow-orange-500/20
                "
                target="_blank"
                rel="noopener noreferrer"
                title={`View live demo of my ${project.title} project`}
            >
                <FaBolt className="w-4 h-4" />
                View Live Demo
            </a>
            )}
            {project.githubLink && (
            <a
                href={project.githubLink}
                className="
                    flex items-center gap-2
                    px-4 py-2 rounded-lg
                    bg-gray-900 dark:bg-gray-100
                    text-white dark:text-gray-900
                    font-medium text-sm
                    hover:opacity-90 transition-opacity
                "
                target="_blank"
                rel="noopener noreferrer"
                title={`View source code for my ${project.title} project on GitHub`}
            >
                <FaGithub className="w-4 h-4" />
                View Source Code
            </a>
            )}
        </div>
        )}
    </div>
    </motion.div>
    </motion.div>
);
}