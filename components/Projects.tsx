"use client"

import { forwardRef } from "react"
import Window, { WindowRef } from "./Window"

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  language: string;
  highlights: string[];
  stars?: number;
  collaborative?: boolean;
  forked?: boolean;
}

interface ProjectCategory {
  title: string;
  icon: string;
  projects: Project[];
}

const Projects = forwardRef<WindowRef, { defaultPosition: { x: number; y: number }; selectedCategory?: string | null; onClearFilter?: () => void }>(
  ({ defaultPosition, selectedCategory, onClearFilter }, ref) => {
    const projectCategories: ProjectCategory[] = [
      {
        title: "🤖 AI & Machine Learning",
        icon: "🧠",
        projects: [
          {
            name: "VidMetaStream",
            description: "MetaVision - AI-Powered Video Database Management System for machine learning dataset creation. Advanced video processing and metadata extraction for ML workflows.",
            tech: ["JavaScript", "AI", "Video Processing", "Database Management"],
            github: "https://github.com/vikasdimaniya/VidMetaStream",
            stars: 1,
            language: "JavaScript",
            highlights: ["Real-time video analysis", "ML dataset creation", "Metadata extraction"]
          },
          {
            name: "Q-Learning Agent",
            description: "Reinforcement Learning project training an intelligent agent to hunt prey using Q-Learning algorithms. Demonstrates advanced RL concepts and game AI implementation.",
            tech: ["Python", "Reinforcement Learning", "Q-Learning", "Game AI"],
            github: "https://github.com/vikasdimaniya/Q-learning",
            language: "Python",
            highlights: ["Prey hunting simulation", "Q-Learning algorithm", "Agent training"]
          },
          {
            name: "Auto Loan Eligibility System",
            description: "Automated financial analysis system for loan eligibility decisions. Built with Angular, Spring Boot, and ML to streamline preliminary loan assessments.",
            tech: ["Angular", "Spring Boot", "Machine Learning", "FinTech"],
            github: "https://github.com/AbhishekPanta8/auto-loan-eligibility",
            stars: 1,
            language: "Jupyter Notebook",
            collaborative: true,
            highlights: ["Financial data analysis", "ML-based decisions", "Full-stack implementation"]
          },
          {
            name: "Find Hotels - AI Search",
            description: "AI-driven hotel searching service that helps users query hotels using natural language with constraints on area, price, amenities, etc. Queries like 'Hotels with best view of New York's central park' are supported.",
            tech: ["Algorithms", "Selenium", "Natural Language Processing (NLP)", "Data Scraping"],
            github: "https://github.com/vikasdimaniya/find-hotels",
            language: "Python",
            highlights: ["Natural language queries", "Web scraping", "No database technology", "Data structures"]
          },
          {
            name: "Movie Recommendation System",
            description: "Machine learning-based movie recommendation system using user preferences. Built without version control as a learning exercise, featuring data scraping, cleaning, and KNN algorithm implementation.",
            tech: ["Java", "Python", "MySQL", "KNN Algorithm", "Machine Learning", "Data Scraping"],
            github: "#",
            language: "Java",
            highlights: ["KNN Algorithm", "Data scraping & cleaning", "User preference analysis", "First ML project"]
          }
        ]
      },
      {
        title: "👁️ Computer Vision & Deep Learning",
        icon: "📸",
        projects: [
          {
            name: "Medical Image Segmentation (U-NET)",
            description: "Advanced medical image segmentation using U-NET architecture. Implements state-of-the-art deep learning for precise medical image analysis and diagnosis support.",
            tech: ["Python", "TensorFlow/PyTorch", "U-NET", "Medical Imaging"],
            github: "https://github.com/vikasdimaniya/segmentation-CNN",
            language: "Jupyter Notebook",
            highlights: ["U-NET architecture", "Medical imaging", "Deep learning segmentation"]
          },
          {
            name: "Crown-of-Thorns Starfish Detection",
            description: "Real-time object detection model for identifying crown-of-thorns starfish in underwater coral reef videos. Critical for marine conservation efforts.",
            tech: ["Python", "Computer Vision", "Object Detection", "Marine Biology"],
            github: "https://github.com/vikasdimaniya/crown-of-thorns-starfish-Detection",
            language: "Jupyter Notebook",
            highlights: ["Real-time detection", "Underwater video analysis", "Conservation impact"]
          }
        ]
      },
      {
        title: "🌐 Web Development & Full-Stack",
        icon: "💻",
        projects: [
          {
            name: "Social Media Platform",
            description: "Full-featured social media platform with user connections, messaging, photo/video sharing, and content management. Built with modern web technologies and secure authentication.",
            tech: ["Node.js", "Express", "MongoDB", "React.js", "JWT", "NPM"],
            github: "#",
            language: "JavaScript",
            highlights: ["User relationships", "Real-time messaging", "Media sharing", "JWT authentication"]
          }
        ]
      },
      {
        title: "📊 Business Analysis & Case Studies",
        icon: "📈",
        projects: [
          {
            name: "Traffic Congestion Case Study",
            description: "Comprehensive analysis of traffic congestion in Paris and its impact on airport travel times. Involved stakeholder analysis, root cause identification, and strategic planning for transportation solutions.",
            tech: ["Strategic Communications", "Financial Analysis", "Software Documentation", "Business Analysis", "Software Project Management"],
            github: "#",
            language: "Research",
            highlights: ["Stakeholder analysis", "Root cause identification", "Strategic planning", "Communication skills"]
          }
        ]
      },
      {
        title: "🎮 Gaming & Simulation",
        icon: "🕹️",
        projects: [
          {
            name: "Multi-Body Gravity Simulation",
            description: "Physics-based simulation of gravitational interactions in multi-body systems. Demonstrates computational physics and real-time visualization of celestial mechanics.",
            tech: ["JavaScript", "Physics Simulation", "Computational Physics"],
            github: "https://github.com/vikasdimaniya/multi-body-gravity-simulation",
            language: "JavaScript",
            highlights: ["N-body problem", "Real-time physics", "Interactive visualization"]
          },
          {
            name: "Clash of Clans Game Calculator",
            description: "Advanced calculator for Clash of Clans upgrade timelines. Integrates with official CoC API to provide detailed time analysis for all available upgrades.",
            tech: ["Node.js", "Gaming APIs", "Data Analysis"],
            github: "https://github.com/vikasdimaniya/coc-game-calculator",
            language: "JavaScript",
            highlights: ["CoC API integration", "Time calculations", "Environment variables"]
          },
          {
            name: "CoC Token Refresher",
            description: "Automated API key management tool for Supercell games (Clash Royale, Clash of Clans, Brawl Stars). Handles IP-based token refresh and management.",
            tech: ["Node.js", "API Management", "Gaming Tools"],
            github: "https://github.com/vikasdimaniya/coc-token-refresher",
            language: "JavaScript",
            forked: true,
            highlights: ["Multi-game support", "Automatic IP detection", "Key management"]
          }
        ]
      }
    ];

    // Filter categories based on selection
    const filteredCategories = selectedCategory 
      ? projectCategories.filter(category => category.title === selectedCategory)
      : projectCategories;

  return (
      <Window ref={ref} title="projects.exe" defaultPosition={defaultPosition} variant="light">
        <div className="space-y-6">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-2">
              <h3 className="text-sm font-bold">{category.title}</h3>
              <div className="space-y-4">
                {category.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-bold">{project.name}</h4>
                          {project.stars && (
                            <div className="flex items-center text-yellow-600">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                              <span className="text-xs">{project.stars}</span>
                    </div>
                          )}
                          {project.collaborative && (
                            <span className="bg-purple-100 text-purple-800 px-1 py-0.5 rounded text-xs">
                              Collaborative
                            </span>
                          )}
                          {project.forked && (
                            <span className="bg-green-100 text-green-800 px-1 py-0.5 rounded text-xs">
                              Enhanced Fork
                            </span>
                          )}
                    </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-xs text-gray-500">{project.language}</span>
              </div>
            </div>
                    </div>
                    
                    <p className="text-xs text-gray-600">{project.description}</p>
                    
                    <div className="space-y-2">
                    <div>
                        <h5 className="text-xs font-bold text-gray-700 mb-1">Key Features:</h5>
                        <div className="flex flex-wrap gap-1">
                          {project.highlights.map((highlight, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs border">
                              {highlight}
                            </span>
                          ))}
              </div>
            </div>

                      <div>
                        <h5 className="text-xs font-bold text-gray-700 mb-1">Tech Stack:</h5>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-800 px-2 py-1 text-xs border">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {project.github !== "#" && (
                      <div className="pt-1">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400 hover:underline"
                        >
                          View Code →
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Window>
    )
  }
)

Projects.displayName = "Projects"

export default Projects
