import React, { useEffect, useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

export default function Skill() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 1,
      degree: "Full Stack Web Development Diploma",
      institution: "University of Alberta, Edmonton, Alberta",
      years: "2024 - Present",
      description:
        "Full Stack Development  is focused on both front-end and back-end technologies, with hands-on experience in building and deploying full-stack web applications. Developed proficiency in HTML, CSS, JavaScript, and modern frameworks such as React or  and Node.js etc, while also working with databases like MongoDB and SQL. Gained practical knowledge in creating RESTful APIs, implementing responsive design, using version control with Git and GitHub, and following agile development methodologies. ",
    },
    {
      id: 2,
      degree: "Power Engineering Techology",
      institution: "NAIT, Edmonton Alberta ",
      years: "2014 - 2017",
      description:
        "Power engineering is a specialized field focused on the generation, transmission, distribution, and utilization of electric power, including the operation and maintenance of related equipment. It encompasses the entire process of how electricity is produced, moved, and used, from power plants to your home or business.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8  min-h-screen">
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes drawLine {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-in {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .card-enter {
          opacity: 0;
          transform: translateY(50px);
        }

        .header-animate {
          animation: slideInLeft 1s ease-out;
        }

        .timeline-line {
          animation: drawLine 2s ease-out 0.5s forwards;
          height: 0;
        }

        .timeline-dot {
          animation: pulse 2s infinite;
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2),
            0 0 30px rgba(0, 255, 255, 0.1);
          border-color: rgba(0, 255, 255, 0.3);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid bg-grey;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.3s;
        }
        .stagger-3 {
          animation-delay: 0.5s;
        }
      `}</style>

      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8 header-animate">
        <div className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl shadow-lg floating">
          <GraduationCap className="h-8 w-8 text-neon-teal" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">Education</h2>
          <p className="text-gray-300 mt-1">My Academic Journey</p>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="relative" ref={containerRef}>
        {/* Timeline Line */}
        <div className="absolute top-0 w-1 bg-gradient-to-b from-gray-600 via-neon-teal to-gray-600 timeline-line rounded-full shadow-sm"></div>

        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={` rounded-xl relative mb-16 last:mb-0 card-enter card-hover stagger-${
              index + 1
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute  w-7 h-7 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full border-4 border-navy shadow-xl z-10 timeline-dot">
              <div className="absolute inset-2 bg-neon-teal rounded-full opacity-90"></div>
            </div>

            {/* Content Card */}
            <div className=" rounded-xl bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700 relative overflow-hidden group">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-neon-teal/20 to-neon-teal/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 relative z-10">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-teal transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-xl font-semibold text-neon-teal mb-4">
                    {edu.institution}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-white bg-gray-800/90 px-6 py-3 rounded-full shadow-md border border-gray-600 group-hover:shadow-lg group-hover:scale-105 group-hover:bg-gray-700/90 transition-all duration-300">
                  <Calendar className="h-5 w-5 text-neon-teal" />
                  <span className="font-semibold">{edu.years}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-lg relative z-10 group-hover:text-gray-100 transition-colors duration-300">
                {edu.description}
              </p>

              {/* Progress bar animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-teal to-neon-teal/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Accent */}
      <div className="mt-16 pt-8 border-t border-gray-700">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-600 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 hover:border-neon-teal/50 transition-all duration-300 floating">
            <GraduationCap className="h-6 w-6 text-neon-teal" />
            <span className="text-lg font-semibold">
              Academic Excellence Achieved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
