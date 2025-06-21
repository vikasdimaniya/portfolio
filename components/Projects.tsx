"use client"

import { forwardRef } from "react"
import Window, { WindowRef } from "./Window"
import { FaGithub, FaExternalLinkAlt, FaUniversity } from "react-icons/fa"

const Projects = forwardRef<WindowRef, { defaultPosition: { x: number; y: number } }>(
  ({ defaultPosition }, ref) => {
    return (
      <Window ref={ref} title="projects.exe" defaultPosition={defaultPosition} variant="light">
        <div className="space-y-6">
          <div className="grid gap-6">
            {/* VidMetaStream */}
            <div className="border border-gray-300 p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold">VidMetaStream</h3>
                  <p className="text-xs text-gray-600">Sep 2024 - Present</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FaUniversity className="text-xs text-gray-500" />
                    <p className="text-xs text-gray-500">Associated with University of Windsor</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/vikasdimaniya/VidMetaStream"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black text-xs"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-700">
                A novel video querying system that addresses the challenges of processing and analyzing large-scale video datasets.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Computer Vision", "Surveillance", "Artificial Intelligence (AI)", "Query Optimization"].map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Traffic Congestion Case Study */}
            <div className="border border-gray-300 p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold">Case study of traffic congestion in paris and future of transportation</h3>
                  <p className="text-xs text-gray-600">Jun 2024 - Aug 2024</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FaUniversity className="text-xs text-gray-500" />
                    <p className="text-xs text-gray-500">Associated with University of Windsor</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-700">
                The case study revolved around the issue of traffic congestion and how it impacts the travel time to the airport. 
                This required analyzing clients&apos; informal problem statements, reaching the root cause, and identifying stakeholders. 
                Overall the case study helped in improving communication and planning skills.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Strategic Communications", "Financial Analysis", "Software Documentation", "Business Analysis", "Software Project Management"].map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Find Hotels - AI Search */}
            <div className="border border-gray-300 p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold">Find Hotels - AI Search Capabilities</h3>
                  <p className="text-xs text-gray-600">May 2024 - Aug 2024</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FaUniversity className="text-xs text-gray-500" />
                    <p className="text-xs text-gray-500">Associated with University of Windsor</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/vikasdimaniya/find-hotels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black text-xs"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-700">
                The project was part of a course that had a predefined scope to scrape data and store it into various data 
                structures without using any Database technology. For this we created an AI-driven hotel searching service that 
                helps users query hotels using natural language with constraints on the area, price, amenities, etc. The queries 
                can be such as &quot;Hotels with best view of New York&apos;s central park&quot;.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Algorithms", "Selenium", "Natural Language Processing (NLP)"].map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Media Site */}
            <div className="border border-gray-300 p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold">Social Media Site</h3>
                  <p className="text-xs text-gray-600">Jul 2018 - Dec 2018</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FaUniversity className="text-xs text-gray-500" />
                    <p className="text-xs text-gray-500">Associated with CHANDIGARH UNIVERSITY</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-700">
                Social Media Platform: Features include the ability to connect and form relationships, communicate with 
                contacts, share photos, share videos, and share content with others. Technical components include Node.js, 
                Express, MongoDB, NPM, JWT, GIT, and React.js.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Node.js", "Express", "MongoDB", "React.js", "JWT", "NPM"].map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Movie Recommendation System */}
            <div className="border border-gray-300 p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold">Movie Recommendation system</h3>
                  <p className="text-xs text-gray-600">Jan 2018 - May 2018</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FaUniversity className="text-xs text-gray-500" />
                    <p className="text-xs text-gray-500">Associated with CHANDIGARH UNIVERSITY</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-700">
                My first college project was a software that recommends movies to users based on their past preferences. The 
                biggest challenge we faced was not using source control. We decided to not even learn GIT and attempt to 
                complete the project without it, in order to better appreciate its value. As a result, we shared the code file by 
                file and were careful not to make changes to files that other team members were working on, manually tracking 
                all our changes and bugs in other team member&apos;s code.
                <br /><br />
                Other challenge was to scrape the data, cleaning it and using it to create a model for recommendation.
                The technology stack used included Java FX, Python, MySQL, and the KNN Algorithm for supervised machine 
                learning, data scraping.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Java", "Python", "MySQL", "KNN Algorithm", "Machine Learning", "Data Scraping"].map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Window>
    )
  }
)

Projects.displayName = "Projects"

export default Projects
